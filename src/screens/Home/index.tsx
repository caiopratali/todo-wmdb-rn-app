import { useEffect, useState } from 'react';

import { Container } from './styles'
import { getTasks } from '../../services/getTasks';
import { Progress } from '../../components/Progress';
import { UseSafeArea } from '../../hooks/UseSafeArea';
import { Accordion } from '../../components/Accordion';
import { AddButton } from '../../components/AddButton';

export function Home({ navigation }) {

  const [tasks, setTasks] = useState([]);

  const { top, bottom } = UseSafeArea();

  const handleAddTask = () => {
    navigation.navigate('AddTask');
  }

  useEffect(() => {
    (async () => {
      const response = await getTasks();

      setTasks(response);
    })()
  }, [tasks]);

  return (
    <Container paddingTop={top} paddingBottom={bottom}>
        <Progress tasks={tasks} />

        <Accordion tasks={tasks} />

        <AddButton onPress={handleAddTask}/>
    </Container>
  )
}
