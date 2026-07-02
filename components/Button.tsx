type ButtonProps = {
    label:string,
}

export default function Button( {label} : ButtonProps ){
    return(
        <button className='px-6 py-4 bg-[#28FF7E] border border-[#2A2A2A] text-sm text-black font-semibold hover:scale-105 transition duration-150 ease-in-out tracking-[0.7px]'>
            {label}
        </button>
    )
}