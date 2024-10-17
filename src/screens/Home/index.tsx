import { useEffect } from 'react';

import { Container } from './styles'
import { Progress } from '../../components/Progress';
import { UseSafeArea } from '../../hooks/UseSafeArea';
import { Accordion } from '../../components/Accordion';
import { AddButton } from '../../components/AddButton';

export function Home({ navigation }) {

  const { top, bottom } = UseSafeArea();

  const handleAddTask = () => {
    navigation.navigate('AddTask');
  }

  return (
    <Container paddingTop={top} paddingBottom={bottom}>
        <Progress />

        <Accordion />

        <AddButton onPress={handleAddTask}/>
    </Container>
  )
}
