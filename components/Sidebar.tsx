import { Link } from "react-router-dom";
import { useState } from "react";
import Icon from './Icon';
import PulseDot from './PulseDot';
import iconsPaths from '../assets/icons/iconsPaths';

type SidebarHeaderProps = {
    setActive:React.Dispatch<React.SetStateAction<boolean>>;
    active:boolean;
}

const SidebarHeader = ({setActive, active} : SidebarHeaderProps) => {
    return(
        <div className="flex items-center max-sm:justify-between gap-3 px-6 py-6 border-b border-[#2A2A2A] max-sm:bg-[#0B0B0B]">
            <img src='../assets/images/logo.webp' alt="logo" width={100} height={25} className="object-contain"/>
            <button onClick={()=>setActive(!active)} className="block sm:hidden">
                <Icon path={iconsPaths.menu} viewBox="0 0 330 330" color='fill-[#28FF7E]' width={24} height={24}/>
            </button>
        </div>
    )
};

type NavigationElementProps = {
    to:string;
    label:string;
    char:string;
    selected:string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
};

const NavigationElement = ({to, label, char, selected, setSelected} : NavigationElementProps) => {
    const path = iconsPaths[label];

    return(
        <Link to={to} onClick={()=> setSelected(label)}>
        <div className={`flex justify-between items-center relative px-3 py-2.5 cursor-pointer text-[#6F6F6F] hover:bg-[#111111] hover:text-[#EDEDED] border ${selected === label ? 'border-[#1D1D1D] text-[#EDEDED]' : 'border-transparent'}`}>
            {selected === label && <span className="w-0.5 bg-[#28FF7E] h-8 absolute left-0"/>}
            <div className="flex items-center gap-3">
                <Icon path={path} viewBox="0 0 512 512" color={`${selected === label ? 'fill-[#EDEDED]' : 'fill-[#6F6F6F]'}`} width={16} height={16}/>
                <p className="capitalize text-sm font-normal">{label}</p>
            </div>
            <p className="text-[#2A2A2A] text-xs">{char}</p>
        </div>
        </Link>
    )
};

const Navbar = () => {
    const [selected, setSelected] = useState<string>('');
    
    return(
        <div className="p-3">
            <p className="text-xs uppercase text-[#525252] tracking-[2px] px-3 py-5">Navigation</p>
            <nav className="flex flex-col">
                <NavigationElement to='/' label="dashboard" char="D" selected={selected} setSelected={setSelected}/>
                <NavigationElement to='/workouts' label="workouts" char="W" selected={selected} setSelected={setSelected}/>
                <NavigationElement to='/exercises' label="exercises" char="E" selected={selected} setSelected={setSelected}/>
                <NavigationElement to='/statistics' label="statistics" char="S" selected={selected} setSelected={setSelected}/>
                <NavigationElement to='/profile' label="profile" char="P" selected={selected} setSelected={setSelected}/>
            </nav>
        </div>
    )
};

const TodayWorkoutCard = () => {
    const currentDate = new Date().toLocaleDateString('pl-PL', {
      day: '2-digit',
      month: '2-digit',
    });
    
    return(
        <div className="pt-6 px-3">
            <div className="flex justify-between items-center px-3 py-5 text-xs text-[#525252] uppercase tracking-[2px]">
                <p>Today</p>
                <p className="text-[#2A2A2A]">{currentDate}</p>
            </div>
            <div className="bg-[#111111] border border-[#2A2A2A] p-3">
                <div className="flex justify-between items-center">
                    <p className="text-xs text-[#6F6F6F]">Planned</p>
                    <PulseDot/>
                </div>
                <div className="pt-2 pb-1">
                    <p className="text-[#EDEDED] text-sm font-medium">Push Day</p>
                </div>
                <div>
                    <p className="text-xs text-[#2A2A2A] tracking-[1px]">6 exercises ~75 min</p>
                </div>
            </div>
        </div>
    )
};

const UserBadge = () => {
    const userName:string = 'Jan';
    const userSurname:string = 'Kowalski';
    const user:string = `${userName} ${userSurname}`;
    const userInitial = userName.charAt(0) + userSurname.charAt(0);

    return(
        <div className="absolute bottom-0 left-0 p-3 w-full border-t border-[#2A2A2A]">
            <div className="flex items-center gap-4 p-2">
                <div className="bg-[#111111] border border-[#2A2A2A] p-2.5">
                    <p className="text-[#EDEDED] text-xs">{userInitial}</p>
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <p className="text-[#EDEDED] text-sm font-medium">{user}</p>
                    <p className="text-xs text-[#2A2A2A] tracking-[1px]">intermediate</p>
                </div>
            </div>
        </div>
    )
};

export default function Sidebar() {
    const [active, setActive] = useState<boolean>(false);

    return (
        <aside className="sm:w-1/3 sm:max-w-xs">
        <div className="max-sm:w-full sm:h-screen relative bg-transparent sm:bg-[#0B0B0B] sm:border-r border-[#2A2A2A]">
        <SidebarHeader setActive={setActive} active={active}/>
            <div className={`max-sm:absolute max-sm:h-[calc(100vh-73px)] max-sm:${active ? 'w-3/4' : 'w-0 hidden'} sm:block max-sm:bg-[#0B0B0B] max-sm:border-r max-sm:border-[#2A2A2A]`}>
                <Navbar/>
                <TodayWorkoutCard/>
                <UserBadge/>
            </div>
        </div>
        </aside>
    )
};