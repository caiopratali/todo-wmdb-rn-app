import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
    padding: 16px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary_100};
`;

export const Title = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary_900};
`;