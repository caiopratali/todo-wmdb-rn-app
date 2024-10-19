import { useState } from 'react'

import { Task } from '../Task'
import { Container, Content, Item, Trigger, TriggerText } from './styles'
import { useTranslation } from 'react-i18next';

interface Props {
  tasks: {
      id: string;
      name: string;
      done: boolean;
  }[]
};

export function Accordion({ tasks }: Props) {

  const { t } = useTranslation();

  const [session, setSession] = useState(0);

  const handleSession = (index: number) => {
    setSession(index);
  }

  return (
    <Container>
      <Item>
        <Trigger onPress={() => handleSession(0)}>
          <TriggerText>{t("inProgress")}</TriggerText>
        </Trigger>
        {
          session === 0 &&
          <Content>
            {
              tasks.map((task) => (
                !task.done &&
                <Task 
                  key={task.id} 
                  id={task.id} 
                  name={task.name} 
                  isCompleted={task.done}
                />
              ))
            }
          </Content>
        }
      </Item>

      <Item>
        <Trigger onPress={() => handleSession(1)}>
          <TriggerText>{t("completed")}</TriggerText>
        </Trigger>
        {
          session === 1 &&
          <Content>
            {
              tasks.map((task) => (
                task.done &&
                <Task 
                  key={task.id} 
                  id={task.id} 
                  name={task.name} 
                  isCompleted={task.done}
                />
              ))
            }
          </Content>
        }
      </Item>
    </Container>
  )
}