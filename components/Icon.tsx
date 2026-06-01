type IconProps = {
    path:string;
    viewBox:string;
    color:string;
    width:number;
    height:number;
}

export default function Icon( {path, viewBox, color, width, height} : IconProps ) {
  return (
    <svg viewBox={viewBox} className={color} width={width} height={height}>
        <path d={path}/>
    </svg>
  )
}

