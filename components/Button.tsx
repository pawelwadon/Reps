type ButtonProps = {
    label:string,
}

export default function Button( {label} : ButtonProps ){
    return(
        <button className='px-6 py-4 bg-[#28FF7E] text-sm text-black font-medium uppercase hover:scale-105 transition duration-150 ease-in-out tracking-[0.7px] hover:shadow-[0_0_12px_rgba(40,255,126,0.8)] active:shadow-[0_0_12px_rgba(40,255,126,0.8)]'>
            {label}
        </button>
    )
}