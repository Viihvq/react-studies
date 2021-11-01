import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss';

interface Props extends ITarefa{ //extende todos os tipos de ITarefa + a função selecionaTarefa
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function item({
    tarefa, 
    tempo, 
    selecionado, 
    completado, 
    id, 
    selecionaTarefa
}: Props){//{tarefa: string, tempo: string}){
    //console.log('item atual:', {tarefa, tempo, selecionado, completado, id}); debug
    return (
        <li 
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} //de padrão vai o primeiro e depois faz a condicional
            onClick={() => !completado && selecionaTarefa({ //so pode selecionar se não estiver completado
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label="tarefa completada" ></span>}
        </li>
    )
}
