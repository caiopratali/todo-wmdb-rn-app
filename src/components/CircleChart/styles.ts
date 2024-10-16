import styled from 'styled-components/native'

export const Container = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Percentage = styled.Text`
    font-size: 16px;
    position: absolute;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary_100};
`;