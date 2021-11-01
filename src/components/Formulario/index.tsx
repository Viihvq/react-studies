import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from './Formulario.module.scss'
import {v4 as uuidv4} from 'uuid';

interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({setTarefas}: Props){

    const[tarefa,setTarefa] = useState("");
    const[tempo,setTempo]= useState("00:00")

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault(); //O preventDefault() também vem do JavaScript e ele previne que esse padrão de refresh na página aconteça automaticamente.
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                  tarefa,
                  tempo,
                  selecionado: false, //quando for criado 
                  completado: false,
                  id: uuidv4()  //ID aleatório criado que nunca irá se repetir
                }
            ]
        );
        setTarefa("");//Reseta o formulário depois de adicionar
        setTempo("00:00");
    }

    return(                                                             //bind está associonado esse escopo this a adicionarTarefa, senão dá erro por estar em escopos diferentes (limitação da classe).
            <form className={style.novaTarefa} onSubmit={adicionarTarefa}> 
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa"> {/*htmlFor: se clicar no label, o input será focado */}
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text" 
                        name="tarefa" 
                        value={tarefa}
                        onChange={evento => setTarefa(evento.target.value)} //Se não por, o input fica congelado com o value!
                        id="tarefa" 
                        placeholder="O que você quer estudar" 
                        required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label> 
                    <input 
                    type="time" 
                    step="1" /*< atributo tipo time*/
                    name="tempo" 
                    value={tempo} //Faz com que o tempo marque o que estiver na variavel ao invés de --:--:--
                    onChange={evento => setTempo(evento.target.value)} //Target=tag dom que o evento foi disparado
                    id="tempo" 
                    min="00:00:00" 
                    max="01:30:00" 
                    required />
                </div>
                <Botao type="submit">Adicionar</Botao> {/*Por ser submit, quando clicado envia as informações do formulário */} 
            </form>
        )
}

// class Formulario1 extends React.Component<{
//     setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
// }>{
//     state = {
//         tarefa: "",
//         tempo: "00:00" 
//     }

//     adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
//         evento.preventDefault(); //O preventDefault() também vem do JavaScript e ele previne que esse padrão de refresh na página aconteça automaticamente.
//         this.props.setTarefas(tarefasAntigas => 
//             [
//                 ...tarefasAntigas, 
//                 {
//                   ...this.state,
//                   selecionado: false, //quando for criado 
//                   completado: false,
//                   id: uuidv4()  //ID aleatório criado que nunca irá se repetir
//                 }
//             ]
//         );
//         this.setState({ //Reseta o formulário depois de adicionar
//             tarefa:"",
//             tempo:"00:00"
//         })
//     }

//     render(){
//         return(                                                             //bind está associonado esse escopo this a adicionarTarefa, senão dá erro por estar em escopos diferentes (limitação da classe).
//             <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}> 
//                 <div className={style.inputContainer}>
//                     <label htmlFor="tarefa"> {/*htmlFor: se clicar no label, o input será focado */}
//                         Adicione um novo estudo
//                     </label>
//                     <input 
//                         type="text" 
//                         name="tarefa" 
//                         value={this.state.tarefa}
//                         onChange={evento => this.setState({...this.state, tarefa: evento.target.value})} //Se não por, o input fica congelado com o value!
//                         id="tarefa" 
//                         placeholder="O que você quer estudar" 
//                         required/>
//                 </div>
//                 <div className={style.inputContainer}>
//                     <label htmlFor="tempo">
//                         Tempo
//                     </label> 
//                     <input 
//                     type="time" 
//                     step="1" /*< atributo tipo time*/
//                     name="tempo" 
//                     value={this.state.tempo} //Faz com que o tempo marque o que estiver na variavel ao invés de --:--:--
//                     onChange={evento => this.setState({...this.state, tempo: evento.target.value})} //Target=tag dom que o evento foi disparado
//                     id="tempo" 
//                     min="00:00:00" 
//                     max="01:30:00" 
//                     required />
//                 </div>
//                 <Botao type="submit">Adicionar</Botao> {/*Por ser submit, quando clicado envia as informações do formulário */} 
//             </form>
//         )
//     }
// }

export default Formulario;