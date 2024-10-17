import { Checkbox, Container, Icon, Title } from './styles'
import { updateTask } from '../../services/updateTask';

interface TaskProps {
    id: string;
    name: string;
    isCompleted: boolean;
}

export function Task({ id, name, isCompleted }: TaskProps) {

  const handleCompleted = () => {
    updateTask(id, !isCompleted);
  }

  return (
    <Container onPress={handleCompleted}>
        <Checkbox>
            { isCompleted && <Icon /> }
        </Checkbox>

        <Title>{name}</Title>
    </Container>
  )
}
