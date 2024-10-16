import styled from 'styled-components/native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export const Container = styled.TouchableOpacity`
    width: 56px;
    right: 20px;
    height: 56px;
    bottom: 40px;
    position: absolute;
    border-radius: 56px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary_100};
`;

export const Icon = styled(FontAwesome6).attrs(({ theme }) => ({
    size: 20,
    name: 'plus',
    color: theme.colors.primary_900
}))``;