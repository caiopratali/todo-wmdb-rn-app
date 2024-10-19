import { useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, Label, TextInput } from './styles'

interface InputProps extends TextInputProps {
  label: string;
}

export function Input({  label, ...rest }: InputProps) {
    const [isFocused, setIsFocused] = useState(false);
  
    const handleInputFocus = () => {
      setIsFocused(true);
    };
  
    const handleInputBlur = () => {
      setIsFocused(false);
    };

    return (
      <Container>
          <Label>{label}</Label>
          <TextInput  
              {...rest}
              isFocused={isFocused}
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
          />
      </Container>
    )
}
