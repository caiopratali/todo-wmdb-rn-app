import { Container } from './styles'
import { Header } from '../../components/Header'
import { UseSafeArea } from '../../hooks/UseSafeArea';

export function AddTask() {

  const { top, bottom } = UseSafeArea();

  return (
    <Container paddingTop={top} paddingBottom={bottom}>
        <Header title='Criar' />
    </Container>
  )
}
