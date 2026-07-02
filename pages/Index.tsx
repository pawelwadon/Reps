import PulseDot from '../components/PulseDot';
import Button from '../components/Button';
import Icon from '../components/Icon';
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
            <span className='text-xs uppercase text-[#525252] tracking-[2px]'>Session // 1247</span>
        </div>
    )
};

const Notification = () => {
    const path = iconsPaths.notification;

    return(
        <div className='p-4 border border-[#2A2A2A] text-center relative'>
            <span className='absolute top-3 right-4'>
                <PulseDot/>
            </span>
            <Icon path={path} viewBox='0 0 509.369 509.369' color='fill-[#6F6F6F]' width={20} height={20} />
        </div>
    )
}

const SearchBar = () => {
    const path = iconsPaths.loop;

    return(
        <div className='flex items-center p-4 gap-4 border border-[#2A2A2A]'>
            <Icon path={path} viewBox='0 0 511.999 511.999' color='fill-[#6F6F6F]' width={20} height={20}/>
            <input name='search-bar' type='text' placeholder='Search' className='block text-sm text-[#6F6F6F] font-normal uppercase tracking-[2px] outline-hidden'></input>
            <span ></span>
        </div>
    )
}

const user = 'Paweł';

const TopHeader = () => {
    return(
        <div className="w-full flex justify-between items-end p-10 border-b border-[#2A2A2A]">
            <div className='flex flex-col gap-1.5'>
                <SessionId/>
                <h1 className="text-[#EDEDED] text-3xl font-semibold">Welcome back, {user}<span className="text-[#28FF7E]">.</span></h1>
                <div className='text-[#6F6F6F] text-sm font-normal flex gap-2'>
                    <span className='capitalize'>{currentDate}</span>
                    <span className='text-[#2A2A2A]'>/</span>
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

export default function Index() {
    return (
        <div>
            <TopHeader/>
        </div>
    )
}