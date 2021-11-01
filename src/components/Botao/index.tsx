import React from "react";
import style from './Botao.module.scss'

interface Props{
    type?: "button" | "submit" | "reset" | undefined, //?: significa que é opcional
    onClick?: () => void
    children?: React.ReactNode
}

function Botao( {onClick, type, children}: Props){
    return(
        <button onClick={onClick } type={type} className={style.botao}> 
            {children /*.texto pega o texto da props*/} 
        </button>
    )
}

// class Botao1 extends React.Component<{
//     type?: "button" | "submit" | "reset" | undefined, //?: significa que é opcional
//     onClick?: () => void // ?: diz que é opcional 
// }> /*<{texto: string}>*/{ //a Prop é sempre um objeto
//     render(){ //função obrigatória, dentro dela retorna o JSX (forma de escrever html no js) que é preciso para criar o componente
//         const{type = "button", onClick } =this.props;
//         return( //retorna um html e conseguimos escrever js dentro dele
//             //O que está entre as tags é o que vai aparecer dentro do botão
//             <button onClick={onClick } type={type} className={style.botao}> 
//                 {this.props.children/*.texto pega o texto da props*/} 
//             </button>
//         )
//     }
// }

export default Botao; //está expotando Botão