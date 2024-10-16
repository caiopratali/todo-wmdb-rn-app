import * as Styles from './styles'
import { UseSafeArea } from '../../hooks/UseSafeArea';
import { Progress } from '../../components/Progress';

export function Home() {

  const { top, bottom } = UseSafeArea();

  return (
    <Styles.Container paddingTop={top} paddingBottom={bottom}>
        <Styles.Title>Bem-vindo</Styles.Title>

        <Progress />
    </Styles.Container>
  )
}
