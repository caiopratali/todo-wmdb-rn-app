import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary_900};
`;

export const Title = styled.Text`
    font-size: 24px;
    font-family: ${({ theme}) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary_100};
`;