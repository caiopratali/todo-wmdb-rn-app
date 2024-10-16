import { useNavigation } from '@react-navigation/native'

import { BackButton } from '../BackButton'
import { Box, Container, Title } from './styles'

interface HeaderProps {
    title: string;
}

export function Header({ title }: HeaderProps) {

  const navigation = useNavigation();

  return (
    <Container>
        <BackButton onPress={navigation.goBack} />
        <Title>{ title }</Title>
        <Box />
    </Container>
  )
}
