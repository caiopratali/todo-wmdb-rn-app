import styled from 'styled-components/native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export const Container = styled.TouchableOpacity`
    padding: 16px 12px;
    border-radius: 4px;
    margin-bottom: 8px;
    flex-direction: row;
    border-left-width: 4px;
    background-color: ${({ theme }) => theme.colors.primary_500};
    border-left-color: ${({ theme }) => theme.colors.primary_100};
`;

export const Title = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary_100};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Checkbox = styled.View`
    width: 20px;
    height: 20px;
    margin-right: 8px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary_100};
`;

export const Icon = styled(FontAwesome6).attrs(({ theme }) => ({
    name: 'check',
    size: 16,
    color: theme.colors.primary_900
}))``;