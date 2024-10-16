import { useState } from 'react';
import { Container, Label, TextInput } from './styles'

export function Input() {
    const [isFocused, setIsFocused] = useState(false);
  
    const handleInputFocus = () => {
      setIsFocused(true);
    };
  
    const handleInputBlur = () => {
      setIsFocused(false);
    };

    return (
        <Container>
            <Label>Nome</Label>
            <TextInput  
                placeholder='Digite o da tarefa' 
                isFocused={isFocused}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
            />
        </Container>
    )
}
