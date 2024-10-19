import { useTranslation } from 'react-i18next';
import { CircleChart } from '../CircleChart'
import { Container, Content, Description, Title } from './styles'

interface Props {
    tasks: {
        id: string;
        name: string;
        done: boolean;
    }[]
};

export function Progress({ tasks }: Props) {

  const { t } = useTranslation();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.done).length;
  const percentage = totalTasks ? ((completedTasks / totalTasks) * 100).toFixed() : 0;

  return (
    <Container>
        <Content>
          <Title>{t("progress")}</Title>
          <Description>
            {`${completedTasks}/${totalTasks} `}
            {t("completedTasks")}
          </Description>
        </Content>
        <CircleChart percentage={percentage} />
    </Container>
  )
}
