export default function FooterCard({imgUrl, txt}) {
    return <div className="border-2 border-sky-900 text-sky-900 
    flex items-center justify-center gap-4 p-4 rounded-2xl w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/6
    hover:bg-gray-100 transition-colors cursor-pointer">
        <img src={imgUrl} alt="Card footer" width={70} />
        <p className="font-bold text-lg">
            {txt}
        </p>
    </div>
}