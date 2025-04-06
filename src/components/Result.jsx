
export default function Result({result}) {
    return <section id="section-results">
        <div className="p-5">
            <h1 class="text-center text-2xl font-bold mb-5">RESULT</h1>
            <div className="w-full md:w-2/3 m-auto text-xl">
                <div className="border-1 border-sky-500">
                    <h1 className='font-bold text-xl bg-gray-300 py-1'>&nbsp; Input</h1>
                    <div className="p-4 border-t-1 border-sky-500 bg-gray-100" style={{ whiteSpace: 'pre-line' }}>
                        {result.input}
                    </div>
                </div>
                <div className="border-1 border-sky-500">
                    <h1 className='font-bold text-xl bg-gray-300 py-1'>&nbsp; Result</h1>
                    <div className="p-4 border-t-1 border-sky-500 bg-gray-100 break-words" style={{ whiteSpace: 'pre-line' }}>
                        {result.output}
                    </div>
                </div>
            </div>
        </div>
    </section>
}