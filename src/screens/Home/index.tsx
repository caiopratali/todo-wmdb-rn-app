import { useQuery } from '@tanstack/react-query';

import { Container } from './styles'
import { Loading } from '../../components/Loading';
import { getTasks } from '../../services/getTasks';
import { Progress } from '../../components/Progress';
import { UseSafeArea } from '../../hooks/UseSafeArea';
import { Accordion } from '../../components/Accordion';
import { AddButton } from '../../components/AddButton';

export function Home({ navigation }) {

  const { top, bottom } = UseSafeArea();

  const handleAddTask = () => {
    navigation.navigate('AddTask');
  }

  const { data, isLoading } = useQuery({ queryKey: ['tasks'], queryFn: getTasks })

  if (isLoading) {
    return <Loading />
  } 

  return (
    <Container paddingTop={top} paddingBottom={bottom}>
        <Progress tasks={data} />

        <Accordion tasks={data} />

        <AddButton onPress={handleAddTask}/>
    </Container>
  )
}
