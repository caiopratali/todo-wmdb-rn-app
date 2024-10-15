import * as Styles from './styles'
import { UseSafeArea } from '../../hooks/UseSafeArea';

export function Home() {

  const { top, bottom } = UseSafeArea();

  return (
    <Styles.Container paddingTop={top} paddingBottom={bottom}>
        <Styles.Title>Junho</Styles.Title>
    </Styles.Container>
  )
}
