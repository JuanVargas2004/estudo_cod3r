'use client'
import { useState } from "react";

interface ContadorProps{
    valorInicial?: number
}


export default function Contador(props: ContadorProps){
    const [num, alterarEstado] = useState(props.valorInicial ?? 0)

    function decrementar(){
        alterarEstado(num - 1)
        console.log(num)
    };

    function incrementar(){
        alterarEstado(num + 1)
        console.log(num)
    };


    return (
        <div>
            <h1>Contador</h1>
            <span>{num}</span>
            <div className="flex gap-2">
                <button onClick={decrementar} className="bg-red-400 p-2">Decrementar</button>
                <button onClick={incrementar} className="bg-green-300 p-2">Incrementar</button>
            </div>
        </div>
    );
}