import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props{
    selecionado: ITarefa | undefined
    finalizarTarefa: () => void
}

export default function Cronometro({selecionado, finalizarTarefa}: Props){
    const [tempo, setTempo] = useState<number>();
    // if(selecionado?.tempo) //O Typescript informará que o objeto pode ser nulo, o que implica na necessidade de incluirmos uma condição que verifica se existe o selecionado ou não. Faremos isso com um ponto de interrogação em selecionado?.tempo.
    
    useEffect(()=>{
        if(selecionado?.tempo){ //se o selecionado e o selecionado.tempo nao sao nulos
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado])

    function regressiva(contador: number = 0){ //função recursiva, aqui que decrementa o tempo
        setTimeout(() => { //do js
            if(contador > 0){
                setTempo(contador-1);
                return regressiva(contador-1);
            }
            finalizarTarefa();
        }, 1000) //em quanto tempo vai decrementar em milisegundos
    }

    return(
        <div className={style.cronometro}>  
            <p className={style.titulo}>Escolha um card e inicie o cronometro </p>
            
            <div className={style.relogioWrapper}>
                <Relogio tempo= {tempo}/>
            </div>
            <Botao onClick={() => regressiva(tempo)} >
               Começar!
            </Botao>
        </div>
        
    )
}