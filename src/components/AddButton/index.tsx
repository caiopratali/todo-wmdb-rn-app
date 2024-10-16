import { Container, Icon } from './styles'

interface AddButtonProps {
  onPress: () => void;
}

export function AddButton({ onPress}: AddButtonProps) {
  return (
    <Container onPress={onPress}>
        <Icon />
    </Container>
  )
}
