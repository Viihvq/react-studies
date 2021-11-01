import React from "react";
import style from './Relogio.module.scss';

interface Props{
    tempo:number | undefined
}

export default function Relogio({tempo = 0}: Props){
    const minutos = Math.floor(tempo/60);
    const segundos = tempo%60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0'); //largura padrão, caracter default. Desestruturou a string. Ps: downLevelIteration: true no tsconfig
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2,'0');

    return(
        <> {/*Pode usar como solução também o React.Fragment, para burlar a falta do componente pai*/}
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}