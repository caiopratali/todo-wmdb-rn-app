import styled from 'styled-components/native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export const Container = styled.TouchableOpacity`
    width: 54px;
    height: 54px;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled(FontAwesome6).attrs(({ theme }) => ({
    size: 20,
    name: 'arrow-left',
    color: theme.colors.primary_100
}))``;