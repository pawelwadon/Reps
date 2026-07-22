import Icon from "./Icon";

type StatCardProps = {
    index: string,
    icon:{
        path:string,
        viewBox:string,
    },
    label: string,
    value: number,
    suffix: string,
    caption: string,
    tag?:string,
};

export default function StatCard( {index, icon, label, value, suffix, caption, tag} : StatCardProps ){
    return(
        <div className="flex flex-col p-4 gap-4 bg-grey-secondary border border-grey-primary">
            <div className="flex justify-between text-xs uppercase">
                <div className="flex justify-center items-center gap-2">
                    <Icon path={icon.path} viewBox={icon.viewBox} color="fill-text-secondary" width={14} height={14}/>
                    <span className="text-text-secondary tracking-[2px]">{label}</span>
                </div>
                <span className="text-grey-primary tracking-[2px]">{index}</span>
            </div>
            <div className="flex items-end gap-2">
                <span className="text-white-primary font-medium text-5xl">{value}</span>
                <span className="text-base text-text-secondary">{suffix}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
                <span className="text-text-primary">{caption}</span>
                <span className="text-main-green">{tag}</span>
            </div>
        </div>
    )
}