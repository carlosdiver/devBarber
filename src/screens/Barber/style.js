import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;
export const Scroller = styled.ScrollView`
  flex: 1;
`;
export const SwipeDot = styled.View`
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 5px;
  margin: 3px;
`;
export const SwipeActiveDot = styled.View`
  width: 10px;
  height: 10px;
  background-color: #000;
  border-radius: 5px;
  margin: 3px;
  `;
export const SwipeItem = styled.View`
  flex: 1;
  background-color: #63C2D1;
`;
export const SwipeImage = styled.Image`
  width: 100%;
  height: 240px;
`;
export const FakeSwiper = styled.View`
  height: 240px;
  background-color: #63C2D1;
`;
export const PageBody = styled.View`
  background-color: #fff;
  border-top-left-radius: 50px;
  margin-top: -50px;
  min-height: 400px;
`;
export const UserInfoArea = styled.View`
  flex-direction: row;
  margin-top: -40px;
`;
export const UserAvatar = styled.Image`
  width: 110px;
  height: 110px;
  margin: 0 20px 0 30px;
  border-radius: 20px;
  border-width: 4px;
  border-color: #fff;
`;
export const UserInfo = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
export const UserInfoName = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const UserFavoriteButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 2px solid #999;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin: 20px 20px 0 20px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
  background-color: rgba(0,0,0,0.4)
  border-radius: 22px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const ServicesArea = styled.View`
  margin-top: 40px;
`;

export const ServicesTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #268596;
  margin: 0 0 20px 30px;
`;
export const ServiceItem = styled.View`
  flex-direction: row;
  margin: 0 30px 20px 30px;
`;
export const ServiceInfo = styled.View`
  flex: 1;
`;
export const ServiceName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #268596; 
`;
export const ServicePrice = styled.Text`
    font-size: 14px;
    color: #268596;
  `;
export const ServiceButton = styled.TouchableOpacity`
  background-color: #4EADBE;
  border-radius: 10px;
  padding: 10px 15px;
`;
export const ServiceButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
  `;


export const TestimonialArea = styled.View`
  margin: 10px 0 50px 0;
`;
export const TestimonialItem = styled.View`
  margin: 0 50px;
  background-color: #268596;
  border-radius: 10px;
  height: 110px;
  padding: 15px;
  justify-content: center;
`;
export const TestimonialTop = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 15px;
`;
export const TestimonialName = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
`;
export const TestimonialBody = styled.Text`
    font-size: 13px;
    color: #fff;
`;


