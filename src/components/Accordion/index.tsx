import { useEffect, useState } from 'react'
import { Task } from '../Task'
import { Container, Content, Item, Trigger, TriggerText } from './styles'
import { getTasksByStatus } from '../../services/getTasksByStatus';
import { TaskModel } from '../../db/model/Task';

export function Accordion() {

  const [session, setSession] = useState(0);
  const [doneTasks, setDoneTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);

  const handleSession = (index: number) => {
    setSession(index);
  }

  const getInProgressTasks = async () => {
    const tasks = await getTasksByStatus(false);
    setInProgressTasks(tasks);
  }

  const getDoneTasks = async () => {
    const tasks = await getTasksByStatus(true);
    setDoneTasks(tasks);
  }

  useEffect(() => {
    getInProgressTasks();
    getDoneTasks();
  }, [])

  return (
    <Container>
      <Item>
        <Trigger onPress={() => handleSession(0)}>
          <TriggerText>Em andamento</TriggerText>
        </Trigger>
        {
          session === 0 &&
          <Content>
            {
              inProgressTasks.map((task) => (
                <Task key={task.id} name={task.name} />
              ))
            }
          </Content>
        }
      </Item>

      <Item>
        <Trigger onPress={() => handleSession(1)}>
          <TriggerText>Concluidas</TriggerText>
        </Trigger>
        {
          session === 1 &&
          <Content>
            {
              doneTasks.map((task) => (
                <Task key={task.id} name={task.name} />
              ))
            }
          </Content>
        }
      </Item>
    </Container>
  )
}
