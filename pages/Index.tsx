import PulseDot from '../components/PulseDot';
import Button from '../components/Button';
import Icon from '../components/Icon';
import StatCard from '../components/StatCard';
import iconsPaths from '../assets/icons/iconsPaths';

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
        <div className='flex items-center p-4 gap-4 border border-grey-primary'>
            <Icon path={path} viewBox='0 0 511.999 511.999' color='fill-text-primary' width={20} height={20}/>
            <input name='search-bar' type='text' placeholder='Search' className='block text-sm text-text-primary font-normal uppercase tracking-[2px] outline-hidden'></input>
            <span ></span>
        </div>
    )
}

const user = 'Paweł';

const TopHeader = () => {
    return(
        <div className="w-full flex justify-between items-end p-10 border-b border-grey-primary">
            <div className='flex flex-col gap-1.5'>
                <SessionId/>
                <h1 className="text-white-primary text-3xl font-semibold">Welcome back, {user}<span className="text-main-green">.</span></h1>
                <div className='text-text-primary text-sm font-normal flex gap-2'>
                    <span className='capitalize'>{currentDate}</span>
                    <span className='text-grey-primary'>/</span>
                    <span>Week 20 - Day 137 of program</span>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <SearchBar/>
                <Notification/>
                <Button label='+ Start Workout'/>
            </div>
        </div>
    )    
};

const Statistics = () => {
    return(
        <div className='grid grid-cols-4 gap-6 p-6'>
            <StatCard index='01' icon={{path:iconsPaths.streak, viewBox:'0 0 512 512'}} label='Current streak' value={12} suffix='wks' caption='weeks active' tag='best ever'/>
            <StatCard index='02' icon={{path:iconsPaths.calendar, viewBox:'0 0 512 512'}} label='This week' value={4} suffix='/ 5' caption='workouts completed'/>
            <StatCard index='03' icon={{path:iconsPaths.weight, viewBox:'0 0 512 512'}} label='Volume' value={24580} suffix='kg' caption='vs last week' tag='+8.2%'/>
            <StatCard index='04' icon={{path:iconsPaths.trophy, viewBox:'0 0 297 297'}} label='Last PR' value={100} suffix='x 5' caption='Bench Press' tag='+2.5 kg'/>
        </div>
    )
}

export default function Index() {
    return (
        <div>
            <TopHeader/>
            <Statistics/>
        </div>
    )
}