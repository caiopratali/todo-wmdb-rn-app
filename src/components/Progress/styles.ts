import styled from 'styled-components/native'

export const Container = styled.View`
    padding: 48px;
    margin-top: 20px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.primary_700};
`;

export const Title = styled.Text`
    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary_100};
`;

export const Description = styled.Text`
    font-size: 16px;
    margin-top: 4px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.primary_100};
`;