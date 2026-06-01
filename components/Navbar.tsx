import { Link } from "react-router-dom";
import { useState } from "react";
import Icon from '../components/Icon';
import Logo from '../public/assets/images/logo.webp'
import iconsPaths from '../public/assets/icons/iconsPaths';

type NavigationElementProps = {
    to:string;
    label:string;
    char:string;
    selected:string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const NavigationElement = ({to, label, char, selected, setSelected} : NavigationElementProps) => {
    const path = iconsPaths[label];

    return(
        <Link to={to} onClick={()=> setSelected(label)}>
        <li className={`flex justify-between items-center relative px-3 py-2.5 cursor-pointer text-[#6F6F6F] text-sm font-normal hover:bg-[#111111] hover:text-[#EDEDED] border ${selected === label ? 'border-[#1D1D1D] text-[#EDEDED]' : 'border-transparent'}`}>
            {selected === label && <span className="w-0.5 bg-[#28FF7E] h-8 absolute left-0"/>}
            <div className="flex items-center gap-3">
                <Icon path={path} viewBox="0 0 512 512" color={`${selected === label ? 'fill-[#EDEDED]' : 'fill-[#6F6F6F]'}`} width={16} height={16}/>
                <p className="capitalize">{label}</p>
            </div>
            <p className="text-[#2A2A2A] text-xs">{char}</p>
        </li>
        </Link>
    )
}

export default function Navbar() {
    const [selected, setSelected] = useState<string>('')

    return (
        <nav className="min-h-screen bg-[#0B0B0B] p-3 border-r border-[#2A2A2A]">
            <div className="flex items-center gap-3 px-5 pb-7 pt-6 border-b border-[#2A2A2A]">
                <img src={Logo} alt="logo" width={40} height={40} className="object-contain"/>
                <p className="text-white text-lg">Reps</p>
            </div>
            <p className="text-xs uppercase text-[#525252] tracking-[2px] px-3 py-5">Navigation</p>
            <ul className="min-h-full flex flex-col">
                <NavigationElement to='/' label="dashboard" char="D" selected={selected} setSelected={setSelected}/>
                <NavigationElement to='/workouts' label="workouts" char="W" selected={selected} setSelected={setSelected}/>
                <NavigationElement to='/exercises' label="exercises" char="E" selected={selected} setSelected={setSelected}/>
                <NavigationElement to='/statistics' label="statistics" char="S" selected={selected} setSelected={setSelected}/>
                <NavigationElement to='/profile' label="profile" char="P" selected={selected} setSelected={setSelected}/>
            </ul>
        </nav>
    )
}