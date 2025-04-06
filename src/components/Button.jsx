export default function Button({text, icon, type, onClick}) {
    return <button onClick={onClick ? onClick : ()=>{}}
    className={`${type == 'outline' ? 'border-sky-900 text-sky-900' : 'bg-sky-900 text-white'} border font-bold rounded-2xl
     px-5 py-1 flex gap-2 cursor-pointer transition-all
    hover:bg-sky-700 hover:text-white`}>
        {icon && <img src={icon} alt="" width={20} />}
        {text}
    </button>
}