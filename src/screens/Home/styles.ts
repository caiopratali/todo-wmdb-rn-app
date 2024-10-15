import styled from 'styled-components/native';

interface ContainerProps {
    paddingTop?: number;
    paddingBottom?: number;
}

export const Container = styled.View<ContainerProps>`
    flex: 1;
    padding-top: ${({ paddingTop }) => paddingTop}px;
    padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
    background-color: ${({ theme }) => theme.colors.primary_900};
`;

export const Title = styled.Text`
    font-size: 24px;
    font-family: ${({ theme}) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary_100};
`;