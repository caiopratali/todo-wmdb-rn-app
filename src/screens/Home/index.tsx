import * as Styles from './styles'

import { Progress } from '../../components/Progress';
import { UseSafeArea } from '../../hooks/UseSafeArea';
import { Accordion } from '../../components/Accordion';
import { AddButton } from '../../components/AddButton';

export function Home() {

  const { top, bottom } = UseSafeArea();

  return (
    <Styles.Container paddingTop={top} paddingBottom={bottom}>
        <Progress />

        <Accordion />

        <AddButton />
    </Styles.Container>
  )
}
