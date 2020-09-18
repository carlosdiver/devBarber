import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #63C2D1;
  padding: 20px;
  justify-content: center;
`;
export const ProfileTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
export const ProfileButton = styled.TouchableOpacity`
  background: #fff;
  margin-top: 30px;
  padding: 20px 0;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;
export const ProfileButtonText = styled.Text`
  color: #63C2D1;
  background-color: #fff;
  font-weight: bold;
  font-size: 18px;
`;