import { useEffect } from 'react';
import { CircleChart } from '../CircleChart'
import { Container, Content, Description, Title } from './styles'

interface Props {
    tasks: {
        id: string;
        name: string;
        done: boolean;
    }[]
};

export function Progress({ tasks }: Props) {

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.done).length;
  const percentage = totalTasks ? ((completedTasks / totalTasks) * 100).toFixed() : 0;

  useEffect(() => {
    console.log({ totalTasks, completedTasks, percentage });
  }, []);

  return (
    <Container>
        <Content>
          <Title>Progresso</Title>
          <Description>
            {`${completedTasks}/${totalTasks} `} 
            Tarefas Concluidas
          </Description>
        </Content>
        <CircleChart percentage={percentage} />
    </Container>
  )
}
