import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import Stars from '../components/Stars';

const Area = styled.TouchableOpacity`
  background: #fff;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;
const Avatar = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 20px;
`;
const InfoArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;
const UserName = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;
const SeeProfileButton = styled.View`
  width: 85px;
  height: 26px;
  border: 1px solid #4EADBE;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
const SeeProfileButtonText = styled.Text`
  font-size: 13px;
  color: #268596;
`;

export default ({ data }) => {
  const navigation = useNavigation();

  const clickProfile = () => {
    navigation.navigate('Barber', {
      id: data.id,
      avatar: data.avatar,
      name: data.name,
      stars: data.stars
    });
  }
  return (
    <Area onPress={clickProfile}>
      <Avatar source={{ uri: data.avatar }} />
      <InfoArea>
        <UserName>{data.name}</UserName>

        <Stars stars={data.stars} showNumber={true} />

        <SeeProfileButton>
          <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area>
  )
}