export default function FooterCard({imgUrl, txt}) {
    return <div className="border-2 border-sky-900 text-sky-900 
    flex items-center justify-center gap-4 p-4 rounded-2xl w-1/6">
        <img src={imgUrl} alt="Card footer" width={80} />
        <p className="font-bold text-lg">
            {txt}
        </p>
    </div>
}