import { withObservables } from '@nozbe/watermelondb/react'

import { Container } from './styles'
import { Progress } from '../../components/Progress';
import { UseSafeArea } from '../../hooks/UseSafeArea';
import { Accordion } from '../../components/Accordion';
import { AddButton } from '../../components/AddButton';
import { observeTasks } from '../../services/getTasks';

function Home({ navigation, tasks }) {

  const { top, bottom } = UseSafeArea();

  const handleAddTask = () => {
    navigation.navigate('AddTask');
  }

  return (
    <Container paddingTop={top} paddingBottom={bottom}>
        <Progress tasks={tasks} />

        <Accordion tasks={tasks} />

        <AddButton onPress={handleAddTask}/>
    </Container>
  )
}

const enhance = withObservables(['tasks'], () => ({
  tasks: observeTasks()
}))

const EnhancedHome= enhance(Home);

export { EnhancedHome as Home }
