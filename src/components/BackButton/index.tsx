import { Container, Icon } from './styles'

interface AddButtonProps {
  onPress: () => void;
}

export function BackButton({ onPress }: AddButtonProps) {
  return (
    <Container onPress={onPress}>
        <Icon />
    </Container>
  )
}
