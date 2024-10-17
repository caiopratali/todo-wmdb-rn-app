import { useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, Label, TextInput } from './styles'

interface InputProps extends TextInputProps {}

export function Input({  ...rest }: InputProps) {
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
              {...rest}
              placeholder='Digite o da tarefa' 
              isFocused={isFocused}
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
          />
      </Container>
    )
}
