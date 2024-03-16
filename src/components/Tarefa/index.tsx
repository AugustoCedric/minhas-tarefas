import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import TarefaClass from '../../models/Tarefa'
import { remover } from '../../store/reducers/tarefas'

type Props = TarefaClass

const Tarefa = ({ descricao, prioridade, status, titulo, id }: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancearRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancearRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancearRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancearRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
export default Tarefa
