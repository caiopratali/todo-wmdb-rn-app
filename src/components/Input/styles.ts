import { Platform } from 'react-native';
import styled from 'styled-components/native'

interface InputProps {
    isFocused: boolean;
}

export const Container = styled.View``;

export const Label = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary_100};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TextInput = styled.TextInput.attrs<InputProps>(({ theme }) => ({
    cursorColor: theme.colors.primary_100,
    placeholderTextColor: theme.colors.primary_500,
    selectionColor: Platform.OS === "ios" ? theme.colors.primary_100 : "#FFFFFF40",
}))`
    padding: 16px;
    font-size: 16px;
    margin-top: 8px;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.primary_100};
    font-family: ${({ theme }) => theme.fonts.regular};
    border: 1px solid ${({ theme, isFocused }) => isFocused ? theme.colors.primary_100 : theme.colors.primary_500};
`;

export const Error = styled.Text`
    font-size: 16px;
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.error};
    font-family: ${({ theme }) => theme.fonts.regular};
`;