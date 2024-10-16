import styled from 'styled-components/native'

interface ContainerProps {
    paddingTop?: number;
    paddingBottom?: number;
}

export const Container = styled.View<ContainerProps>`
    flex: 1;
    padding: 20px;
    padding-top: ${({ paddingTop }) => paddingTop}px;
    padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
    background-color: ${({ theme }) => theme.colors.primary_900};
`;

export const Form = styled.View`
    margin-top: 20px;
`;