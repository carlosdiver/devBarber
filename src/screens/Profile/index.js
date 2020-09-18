import React from 'react';
import { Container, ProfileButton, ProfileButtonText, ProfileTitle } from './style';
import { useNavigation } from '@react-navigation/native';
import Api from '../../Api';

export default () => {
  const navigation = useNavigation();

  const logoutClick = async () => {
    await Api.logout();
    navigation.reset({
      routes: [{ name: 'SignIn' }]
    });

  }
  return (
    <Container>
      <ProfileTitle>Profile</ProfileTitle>
      <ProfileButton title="Sair" onPress={logoutClick}>
        <ProfileButtonText>SAIR</ProfileButtonText>
      </ProfileButton>
    </Container>
  )
}