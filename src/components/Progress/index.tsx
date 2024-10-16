import { CircleChart } from '../CircleChart'
import { Container, Content, Description, Title } from './styles'

export function Progress() {
  return (
    <Container>
        <Content>
          <Title>Progresso</Title>
          <Description>3/5 Tarefas Concluidas</Description>
        </Content>
        <CircleChart percentage={60} />
    </Container>
  )
}
