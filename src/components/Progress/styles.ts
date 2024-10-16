import styled from 'styled-components/native'

export const Container = styled.View`
    margin-top: 20px;
    padding: 30px;
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.primary_700};
`;

export const Content = styled.View``;

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