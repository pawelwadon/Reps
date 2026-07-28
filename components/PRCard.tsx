import Icon from "./Icon";
import PulseDot from "./PulseDot";
import iconsPaths from "../assets/icons/iconsPaths";

type PRCardProps = {
    label:string,
    volume:number,
    reps:number,
    date:{
        day:string,
        when:string,
    },
}

const iconPath = iconsPaths.trophy;

export default function PRCard( {label, volume, reps, date} : PRCardProps ){
    return(
        <div className='flex flex-col p-4 gap-4 bg-grey-secondary border border-grey-primary'>
            <div className="flex justify-between text-xs uppercase">
                <div className="flex justify-center items-center gap-2">
                    <Icon path={iconPath} viewBox='0 0 297 297' color="fill-text-secondary" width={14} height={14}/>
                    <span className="text-text-secondary tracking-[2px]">Record</span>
                </div>
                <div className="flex items-center justify-between p-1.5 gap-2 border border-main-green">
                    <PulseDot/>
                    <span className="text-main-green tracking-[2px]">New PR</span>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <span className="text-white-primary text-lg font-medium">{label}</span>
                <div className="flex items-end gap-2">
                    <span className="text-white-primary text-5xl font-medium">{volume}</span>
                    <span className="text-text-secondary text-lg font-light">kg x</span>
                    <span className="text-white-primary text-3xl font-medium">{reps}</span>
                </div>
            </div>
            <div className="flex item justify-between pt-4 border-t border-grey-primary text-xs">
                <span className="text-text-primary">{date.day}</span>
                <span className="text-grey-primary">{date.when}</span>
            </div>
        </div>
    )
};