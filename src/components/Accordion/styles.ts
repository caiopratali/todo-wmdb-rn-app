import styled from 'styled-components/native'

export const Container = styled.View``;

export const Item = styled.View`
    margin-top: 20px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.primary_700};
`;

export const Trigger = styled.TouchableOpacity`
    padding: 20px;
`;

export const TriggerText = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary_100};
`;

export const Content = styled.View`
    padding: 0 20px 12px;
`;