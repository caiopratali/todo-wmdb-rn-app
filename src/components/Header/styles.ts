import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary_100};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Box = styled.View`
    width: 54px;
    height: 54px;
`;