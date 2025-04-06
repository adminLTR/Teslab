import { useState } from "react";
import textProcessing from "../js/text-processing";

export default function Input({setResult, input, setInput}) {


    return <form onSubmit={(e)=> {
        e.preventDefault();
        setResult(textProcessing(input))
    }} className='border-3 border-sky-900 rounded-lg flex m-auto md:w-3/5 p-0'>

        <input value={input} onChange={(e) => setInput(e.target.value)} 
        className='flex-1 px-2 outline-0' type="text" placeholder="evaluate (1+2)*3"/>

        <button type="submit" className="cursor-pointer">
            <svg width={50} id="button-send-expression" class="sc-34cb55e4-1 cPAvSd __Csy" viewBox="0 0 24 24">
                <path className="bg-sky-500"
                    d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm-2 13H7v-2h10zm0-4H7V9h10z">
                </path>
            </svg>
        </button>
    </form>
}