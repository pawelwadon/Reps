import iconsPaths from '../assets/icons/iconsPaths';
import Icon from './Icon';


type ButtonProps = {
    label:string,
    icon?:boolean,
}

export default function Button( {label, icon = true} : ButtonProps ){
    const path = iconsPaths.plus;
    return(
        <button className='flex items-center gap-2 sm:px-6 px-4 py-4 bg-main-green hover:scale-105 transition duration-150 ease-in-out tracking-[0.7px] hover:shadow-[0_0_12px_rgba(40,255,126,0.8)] active:shadow-[0_0_12px_rgba(40,255,126,0.8)]'>
            {icon && <Icon path={path} viewBox='0 0 512 512' color='fill-text-black' width={20} height={20}/>}
            <span className='text-sm text-black font-medium uppercase lg:block hidden'>{label}</span>
        </button>
    )
}