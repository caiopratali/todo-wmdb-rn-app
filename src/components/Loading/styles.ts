import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary_900};
`;

export const Loader = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.colors.primary_100,
}))``;