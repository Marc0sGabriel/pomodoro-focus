import { HistoryContainer, HistoryList, Status } from './styles';

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Meditar</td>
              <td>20 minutos</td>
              <td>Há 2 semanas</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>

            <tr>
              <td>Organizar agenda</td>
              <td>20 minutos</td>
              <td>Há 2 semanas</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>

            <tr>
              <td>Ler livro</td>
              <td>20 minutos</td>
              <td>Há 2 semanas</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>

            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 semanas</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
