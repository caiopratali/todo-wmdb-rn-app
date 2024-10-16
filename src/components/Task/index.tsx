import { useState } from 'react';

import { Checkbox, Container, Icon, Title } from './styles'

interface TaskProps {
    name: string;
}

export function Task({ name }: TaskProps) {

  const [completed, setCompleted] = useState(false);

  const handleCompleted = () => {
    setCompleted(prev => !prev);
  }

  return (
    <Container onPress={handleCompleted}>
        <Checkbox>
            { completed && <Icon /> }
        </Checkbox>

        <Title>{name}</Title>
    </Container>
  )
}
