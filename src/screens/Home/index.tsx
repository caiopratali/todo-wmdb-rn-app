import * as Styles from './styles'

import { Progress } from '../../components/Progress';
import { UseSafeArea } from '../../hooks/UseSafeArea';
import { Accordion } from '../../components/Accordion';

export function Home() {

  const { top, bottom } = UseSafeArea();

  return (
    <Styles.Container paddingTop={top} paddingBottom={bottom}>
        <Styles.Title>Bem-vindo</Styles.Title>

        <Progress />

        <Accordion />
    </Styles.Container>
  )
}
