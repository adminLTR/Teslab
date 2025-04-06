import { useState } from "react";
import Result from "./Result"
import Button from "./Button"
import Input from "./Input"

export default function Section({result, setResult}) {
    const [input, setInput] = useState('');

    return <section className='py-10 px-4'>
        <section id="container-inputs">
            <div className="">
                <img className='w-4/5 md:w-1/2 lg:w-1/3 m-auto' src="/logo-teslab-2.png" alt=""/>
            </div>
            <div className='mt-10'>
                <Input setResult={setResult} input={input} setInput={setInput}/>
            </div>
        </section>
        <div className="flex justify-center gap-4 mt-5">
            <Button text="Clear" onClick={(e) => {setResult(''); setInput('')}}/>
            <Button text="Help" type='outline' />
        </div>
        {Object.keys(result).length != 0 && <Result result={result}/>}

    </section>
}