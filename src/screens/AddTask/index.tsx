import { Container, Form } from './styles'
import { Input } from '../../components/Input';
import { Header } from '../../components/Header'
import { Button } from '../../components/Button';
import { UseSafeArea } from '../../hooks/UseSafeArea';

export function AddTask() {

  const { top, bottom } = UseSafeArea();

  return (
    <Container paddingTop={top} paddingBottom={bottom}>
        <Header title='Criar' />

        <Form>
          <Input />
        </Form>

        <Button title='Adicionar' onPress={() => {}} />
    </Container>
  )
}
