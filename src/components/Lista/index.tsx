//import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from './Lista.module.scss'

interface Props{
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void //é uma função que espera um parametro chamado tarefaselecionada (tipo ITarefa) e retorna um void
}

function Lista({tarefas, selecionaTarefa}: Props ){ //aqui ja consegue pegar o ITarefa e tipar ele
    // const [tarefas, setTarefas] = useState([{
    //     tarefa:'React',
    //     tempo: '02:00:00'
    // }, {
    //     tarefa:'JavaScript',
    //     tempo:'01:00:00'
    // }]);

    return (
        <aside>
            <h2 /*onClick={() => {
                setTarefas([...tarefas, {tarefa: "Estudar estado", tempo: "05:00:00"}]);
            }} NÃO PRECISA MAIS POR CONTA DO APP QUE PASSA JA DIRETO AS TAREFAS*/
            >Estudos do dia</h2>
            <ul className={style.listaTarefas}>
                {tarefas.map((item) => (
                    <Item 
                        selecionaTarefa={selecionaTarefa}
                        key={item.id} //key -> forma do react linkar com o DOM real
                        {...item} /*Desestrutura. Assim, consigo usar todos os atributos do objeto como prop pra esse componente, não precisa escrever um por um. */
                    />
                        
                    //AGORA ISSO FOI PARA ITEM
                    // <li key={index} className={style.item}> {/*é um boa prática/ideal ter ID aqui, pois o index pode ser variável*/}
                    //     <h3>{item.tarefa}</h3>
                    //     <span>{item.tempo}</span>
                    // </li>
                ))}
                {/* <li>
                    <h3> React </h3>
                    <span> 02:00:00 </span>
                </li>
                <li>
                    <h3> JavaScript </h3>
                    <span> 01:00:00 </span>
                </li> */}
            </ul>
        </aside>
    )
}

/*
Tinha um key aqui dentro do <li>, que já vimos que é a forma que o React tem de linkar esse <li> do React para onde ele renderiza o DOM. 
Então, precisamos manter esse key lá no Lista, porque é aqui que colocamos o map.

A lista só tem a responsabilidade de fazer essa iteração, esse map, e enviar cada tarefa para o componente Item. 
O Item em si, só tem responsabilidade de renderizar esse item, só essa parte desse array de tarefas que ele precisa renderizar. */

export default Lista;