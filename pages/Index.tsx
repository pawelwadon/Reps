import { Link } from "react-router-dom";
import PulseDot from '../components/PulseDot';
import Button from '../components/Button';
import Icon from '../components/Icon';
import StatCard from '../components/StatCard';
import PRCard from '../components/PRCard';
import iconsPaths from '../assets/icons/iconsPaths';
import { useMemo, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    type ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const currentDate = new Date().toLocaleDateString('pl-PL', {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year:'numeric',
});

const SessionId = () => {
    return(
        <div className='flex items-center gap-2'>
            <PulseDot/>
            <span className='text-xs uppercase text-text-secondary tracking-[2px]'>Session // 1247</span>
        </div>
    )
};

const Notification = () => {
    const path = iconsPaths.notification;

    return(
        <div className='p-4 border border-grey-primary text-center relative'>
            <span className='absolute top-3 right-4'>
                <PulseDot/>
            </span>
            <Icon path={path} viewBox='0 0 509.369 509.369' color='fill-text-primary' width={20} height={20} />
        </div>
    )
}

const SearchBar = () => {
    const path = iconsPaths.loop;

    return(
        <div className='flex w-full min-w-0 items-center gap-4 border border-grey-primary p-4 sm:w-auto'>
            <Icon path={path} viewBox='0 0 511.999 511.999' color='fill-text-primary' width={20} height={20}/>
            <input name='search-bar' type='search' placeholder='Search' className='block w-full min-w-0 text-sm text-text-primary font-normal uppercase tracking-[2px] outline-hidden sm:w-auto'></input>
        </div>
    )
}

const user = 'Paweł';

const TopHeader = () => {

    return(
        <div className="flex w-full flex-col gap-6 border-b border-grey-primary p-6 lg:flex-row lg:items-center sm:justify-between sm:gap-4 sm:p-10">
            <div className='flex w-full flex-col gap-1.5 sm:w-auto'>
                <SessionId/>
                <span className="text-white-primary text-3xl font-semibold">Welcome back, {user}<span className="text-main-green">.</span></span>
                <div className='text-text-primary text-sm font-normal flex gap-2'>
                    <span className='capitalize'>{currentDate}</span>
                    <span className='text-grey-primary'>/</span>
                    <span>Week 20 - Day 137 of program</span>
                </div>
            </div>
            <div className='flex w-full items-center gap-4 sm:w-auto'>
                <SearchBar/>
                <Notification/>
                <div>
                    <Button label='Start Workout'/>
                </div>
            </div>
        </div>
    )    
};

const Statistics = () => {
    return(
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6'>
            <StatCard index='01' icon={{path:iconsPaths.streak, viewBox:'0 0 512 512'}} label='Current streak' value={12} suffix='wks' caption='weeks active' tag='best ever'/>
            <StatCard index='02' icon={{path:iconsPaths.calendar, viewBox:'0 0 512 512'}} label='This week' value={4} suffix='/ 5' caption='workouts completed'/>
            <StatCard index='03' icon={{path:iconsPaths.weight, viewBox:'0 0 512 512'}} label='Volume' value={24580} suffix='kg' caption='vs last week' tag='+8.2%'/>
            <StatCard index='04' icon={{path:iconsPaths.trophy, viewBox:'0 0 297 297'}} label='Last PR' value={100} suffix='x 5' caption='Bench Press' tag='+2.5 kg'/>
        </div>
    )
};

type TimespanButtonProps = {
    timespan:string,
    selectedTimespan:string,
    setSelectedTimespan: React.Dispatch<React.SetStateAction<string>>,
}

const TimespanButton = ( {timespan, selectedTimespan, setSelectedTimespan} : TimespanButtonProps) => {
    return(
        <button type="button" onClick={()=>setSelectedTimespan(timespan)} className={`p-2 border border-grey-primary text-sm uppercase hover:text-white-primary ${selectedTimespan===timespan ? 'text-white-primary' : 'text-text-secondary'} ease-in duration-75`}>{timespan}</button>
    )
};

type VolumePoint = {
    date: string,
    kg: number,
};

const exerciseVolume: Record<string, VolumePoint[]> = {
    'Bench Press': [
        { date: '2026-11-03', kg: 3120 },
        { date: '2026-11-04', kg: 3280 },
        { date: '2026-11-05', kg: 3010 },
        { date: '2026-11-06', kg: 3450 },
        { date: '2026-11-07', kg: 3620 },
    ],
    'Squats': [
        { date: '2026-11-03', kg: 5400 },
        { date: '2026-11-04', kg: 5120 },
        { date: '2026-11-05', kg: 5680 },
        { date: '2026-11-06', kg: 5510 },
        { date: '2026-11-07', kg: 5900 },
    ],
    'Cable Rows': [
        { date: '2026-11-03', kg: 1860 },
        { date: '2026-11-04', kg: 1920 },
        { date: '2026-11-05', kg: 1780 },
        { date: '2026-11-06', kg: 2040 },
        { date: '2026-11-07', kg: 2110 },
    ],
    'Deadlifts': [
        { date: '2026-11-03', kg: 6200 },
        { date: '2026-11-04', kg: 6050 },
        { date: '2026-11-05', kg: 6480 },
        { date: '2026-11-06', kg: 6320 },
        { date: '2026-11-07', kg: 6710 },
    ],
};

const formatVolumeDate = (isoDate: string) => {
    const [, month, day] = isoDate.split('-');
    return `${day}.${month}`;
};

const volumeChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: {
            callbacks: {
                label: (context) => `${context.parsed.y} kg`,
            },
        },
    },
    scales: {
        x: {
            ticks: { color: '#6F6F6F' },
            grid: { color: '#2A2A2A' },
            border: { color: '#2A2A2A' },
        },
        y: {
            title: {
                display: true,
                text: 'kg',
                color: '#6F6F6F',
            },
            ticks: { color: '#6F6F6F' },
            grid: { color: '#2A2A2A' },
            border: { color: '#2A2A2A' },
        },
    },
};

const ProgressChart = () => {

    const [selectedExercise, setSelectedExercise] = useState<string>('Bench Press');
    const [selectedTimespan, setSelectedTimespan] = useState<string>('');

    const volumePoints = exerciseVolume[selectedExercise] ?? [];

    const chartData = useMemo(() => ({
        labels: volumePoints.map((point) => formatVolumeDate(point.date)),
        datasets: [
            {
                label: 'Volume',
                data: volumePoints.map((point) => point.kg),
                borderColor: '#28FF7E',
                backgroundColor: '#28FF7E',
                pointRadius: 4,
                pointHoverRadius: 5,
                tension: 0.3,
            },
        ],
    }), [volumePoints]);

    return(
        <div className="lg:col-span-2 bg-grey-secondary border border-grey-primary p-4 flex flex-col gap-2 md:gap-0">
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2'>
                <div className='flex items-center gap-2 text-xs tracking-[2px]'>
                    <span className='text-text-secondary uppercase'>Progress</span>
                    <span className='text-grey-primary'>// e1RM</span>
                </div>
                <div className="flex justify-between md:items-center gap-3">
                    <div className="h-max">
                        <TimespanButton timespan='1m' selectedTimespan={selectedTimespan} setSelectedTimespan={setSelectedTimespan}/>
                        <TimespanButton timespan='3m' selectedTimespan={selectedTimespan} setSelectedTimespan={setSelectedTimespan}/>
                        <TimespanButton timespan='6m' selectedTimespan={selectedTimespan} setSelectedTimespan={setSelectedTimespan}/>
                        <TimespanButton timespan='1y' selectedTimespan={selectedTimespan} setSelectedTimespan={setSelectedTimespan}/>
                    </div>
                    <select onChange={ e => setSelectedExercise(e.target.value)} name="selectedExercise" value={selectedExercise} className="text-white-primary text-sm border border-grey-primary p-2 outline-none h-9.5">
                        <option value="Bench Press">Bench Press</option>
                        <option value="Squats">Squats</option>
                        <option value="Cable Rows">Cable Rows</option>
                        <option value="Deadlifts">Deadlifts</option>
                    </select>
                </div>
            </div>
            <span className='text-2xl text-white-primary capitalize font-medium'>{selectedExercise}</span>
            <div className="mt-4 h-64">
                <Line data={chartData} options={volumeChartOptions} />
            </div>
        </div>
    )
}

type WorkoutLogProps = {
    date:{
        numeric:string,
        when:string,
    },
    label:string,
    exercises: number,
    volume:number,
    duration:string,
};

const WorkoutLog = ( {date, label, exercises, volume, duration} : WorkoutLogProps ) => {
    return(
        <li className='flex justify-between items-center py-3.5 border-b border-grey-primary last:border-none last:pb-0'>
            <div className='flex flex-col text-xs'>
                <span className='text-white-primary'>{date.numeric}</span>
                <span className='text-text-secondary uppercase'>{date.when}</span>
            </div>
            <div className='block'>
                <span className='text-white-primary text-base capitalize'>{label}</span>
                <div className='text-text-secondary text-xs uppercase flex gap-2'>
                    <span>{exercises} ex</span>
                    <span>{volume} kg</span>
                </div>
            </div>
            <div className='flex flex-col items-end'>
                <span className='text-xs text-text-primary'>{duration}</span>
                <Icon path={iconsPaths.arrow} viewBox='0 0 330 330' color='fill-text-secondary' width={10} height={10}/>
            </div>
        </li>
    )
}

const SessionsLogs = () => {
    return(
        <div className="flex flex-col bg-grey-secondary border border-grey-primary lg:col-span-1">
            <div className='p-4'>
                <div className='pb-4'>
                    <div className='flex items-center gap-2 text-xs tracking-[2px] pb-1.5'>
                        <span className='text-text-secondary uppercase'>Log</span>
                        <span className='text-grey-primary'>// 247 total</span>
                    </div>
                    <div className='flex justify-between items-end'>
                        <span className='text-2xl text-white-primary capitalize font-medium'>Recent workouts</span>
                        <span className='text-xs text-grey-primary uppercase'>Showing 5</span>
                    </div>
                </div>
                <div>
                    <ul className=''>
                        <WorkoutLog date={{numeric:'13.05', when:'1d ago'}} label='Push day' exercises={6} volume={12400} duration='1h 12m'/>
                        <WorkoutLog date={{numeric:'12.05', when:'2d ago'}} label='Pull day' exercises={7} volume={14120} duration='1h 18m'/>
                        <WorkoutLog date={{numeric:'10.05', when:'4d ago'}} label='Legs day' exercises={5} volume={18900} duration='1h 32m'/>
                        <WorkoutLog date={{numeric:'07.05', when:'7d ago'}} label='Push day' exercises={6} volume={11980} duration='1h 09m'/>
                        <WorkoutLog date={{numeric:'05.05', when:'9d ago'}} label='Pull day' exercises={7} volume={13650} duration='1h 14m'/>
                    </ul>
                </div>
            </div>
            <div className='border-t border-grey-primary'>
                <Link to={'/workouts'}>
                    <div className='p-4 flex justify-between items-center'>
                        <span className='text-xs uppercase text-text-primary tracking-[2px]'>View all workouts</span>
                        <div className='flex items-center gap-2'>
                            <span className='text-grey-primary text-xs'>242 more</span>
                            <Icon path={iconsPaths.arrow} viewBox='0 0 330 330' color='fill-text-primary' width={12} height={12}/>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
};

const PersonalRecords = () => {
    return(
        <div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs tracking-[2px]">
                    <span className="text-text-secondary uppercase">PERSONAL RECORDS</span>
                    <span className="text-grey-primary">// last 14 days</span>
                </div>
                <span className="text-2xl text-white-primary font-medium">Recent PRs</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
                <PRCard label="Deadlift" volume={200} reps={3} date={{day:'14 May', when:'0d ago'}}/>
                <PRCard label="Deadlift" volume={200} reps={3} date={{day:'14 May', when:'0d ago'}}/>
                <PRCard label="Deadlift" volume={200} reps={3} date={{day:'14 May', when:'0d ago'}}/>
                <PRCard label="Deadlift" volume={200} reps={3} date={{day:'14 May', when:'0d ago'}}/>
            </div>
        </div>
    )
}

export default function Index() {
    return (
        <section>
            <TopHeader/>
            <div className="p-6">
                <Statistics/>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6'>
                    <ProgressChart/>
                    <SessionsLogs/>
                </div>
                <PersonalRecords/>
            </div>
        </section>
    )
}