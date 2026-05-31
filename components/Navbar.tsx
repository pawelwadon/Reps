import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from '../public/assets/images/logo.webp'

export default function Navbar() {
    const [selected, setSelected] = useState<string>('')

    return (
        <nav className="min-h-screen bg-[#0B0B0B] p-3 border-r border-[#2A2A2A]">
            <div className="flex items-center gap-3 px-5 pb-7 pt-6 border-b border-[#2A2A2A]">
                <img src={Logo} alt="logo" width={40} height={40} className="object-contain"/>
                <p className="text-white text-lg">Reps</p>
            </div>
            <p className="text-xs uppercase text-[#525252] tracking-[2px] px-3 py-5">Navigation</p>
            <ul className="min-h-full flex flex-col text-[#6F6F6F] text-sm font-normal">
                <li className={`flex justify-between items-center relative px-3 py-2.5 cursor-pointer hover:bg-[#111111] hover:text-[#EDEDED] border ${selected === 'Dashboard' ? 'border-[#1D1D1D]' : 'border-transparent'} `} onClick={()=> setSelected('Dashboard')}>
                    {selected==='Dashboard' && <span className="w-0.5 bg-[#28FF7E] h-8 absolute left-0"/>}
                    <Link to='/'>Dashboard</Link>
                    <p className="text-[#2A2A2A] text-xs">D</p>
                </li>
                <li className={`flex justify-between items-center relative px-3 py-2.5 cursor-pointer hover:bg-[#111111] hover:text-[#EDEDED] border ${selected === 'Workouts' ? 'border-[#1D1D1D]' : 'border-transparent'} `} onClick={()=> setSelected('Workouts')}>
                    {selected==='Workouts' && <span className="w-0.5 bg-[#28FF7E] h-8 absolute left-0"/>}
                    <Link to='/workouts'>Workouts</Link>
                    <p className="text-[#2A2A2A] text-xs">W</p>
                </li>
                <li className={`flex justify-between items-center relative px-3 py-2.5 cursor-pointer hover:bg-[#111111] hover:text-[#EDEDED] border ${selected === 'Exercises' ? 'border-[#1D1D1D]' : 'border-transparent'} `} onClick={()=> setSelected('Exercises')}>
                    {selected==='Exercises' && <span className="w-0.5 bg-[#28FF7E] h-8 absolute left-0"/>}
                    <Link to='/exercises'>Exercises</Link>
                    <p className="text-[#2A2A2A] text-xs">E</p>
                </li>
                <li className={`flex justify-between items-center relative px-3 py-2.5 cursor-pointer hover:bg-[#111111] hover:text-[#EDEDED] border ${selected === 'Statistics' ? 'border-[#1D1D1D]' : 'border-transparent'} `} onClick={()=> setSelected('Statistics')}>
                    {selected==='Statistics' && <span className="w-0.5 bg-[#28FF7E] h-8 absolute left-0"/>}
                    <Link to='/statistics'>Statistics</Link>
                    <p className="text-[#2A2A2A] text-xs">S</p>
                </li>
                <li className={`flex justify-between items-center relative px-3 py-2.5 cursor-pointer hover:bg-[#111111] hover:text-[#EDEDED] border ${selected === 'Profile' ? 'border-[#1D1D1D]' : 'border-transparent'} `} onClick={()=> setSelected('Profile')}>
                    {selected==='Profile' && <span className="w-0.5 bg-[#28FF7E] h-8 absolute left-0"/>}
                    <Link to='/profile'>Profile</Link>
                    <p className="text-[#2A2A2A] text-xs">P</p>
                </li>
            </ul>
        </nav>
    )
}