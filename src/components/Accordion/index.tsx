import { useState } from 'react'
import { Task } from '../Task'
import { Container, Content, Item, Trigger, TriggerText } from './styles'

const sessions = [
  {
    title: 'Em andamento',
    tasks: [
      { name: 'Task 3' },
      { name: 'Task 4' }
    ]
  },
  {
    title: 'Concluídas',
    tasks: [
      { name: 'Task 1' },
      { name: 'Task 2' },
    ]
  }
]

export function Accordion() {

  const [session, setSession] = useState(0);

  const handleSession = (index: number) => {
    setSession(index);
  }

  return (
    <Container>
      {
        sessions.map((item, index) => (
          <Item key={index}>
            <Trigger onPress={() => handleSession(index)}>
              <TriggerText>{item.title}</TriggerText>
            </Trigger>
            {
              session === index &&
              <Content>
                {
                  item.tasks.map((task, index) => (
                    <Task key={index} name={task.name} />
                  ))
                }
              </Content>
            }
          </Item>
        ))
      }
    </Container>
  )
}
