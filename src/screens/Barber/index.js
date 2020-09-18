import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import Stars from '../../components/Stars';
import ServiceModal from '../../components/ServiceModal';

import FavoriteIcon from '../../assets/favorite.svg';
import FavoriteFullIcon from '../../assets/favorite_full.svg';
import BackIcon from '../../assets/back.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';

import {
  Container,
  Scroller,
  PageBody,
  UserInfoArea,

  FakeSwiper,
  SwipeDot,
  SwipeActiveDot,
  SwipeItem,
  SwipeImage,

  UserAvatar,
  UserInfo,
  UserInfoName,
  UserFavoriteButton,
  BackButton,
  LoadingIcon,

  ServicesArea,
  ServicesTitle,
  ServiceItem,
  ServiceInfo,
  ServiceName,
  ServicePrice,
  ServiceButton,
  ServiceButtonText,

  TestimonialArea,
  TestimonialItem,
  TestimonialTop,
  TestimonialName,
  TestimonialBody
} from './style';

import Api from '../../Api';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars
  });
  const [loading, setLoading] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getBarberInfo = async () => {
      setLoading(true);
      let res = await Api.getBarber(userInfo.id);
      if (res.error == '') {
        setUserInfo(res.data);
        setFavorited(res.data.favorited);
      } else {
        alert("Erro: " + res.error)
      }
      setLoading(false);
    }
    getBarberInfo();
  }, []);

  const backPage = () => {
    navigation.goBack();
  }

  const clickFavorite = () => {
    setFavorited(!favorited);
    Api.setFavorited(userInfo.id);
  }

  const chooseService = (key) => {
    setSelectedService(key);
    setShowModal(true);
  }

  return (
    <Container>
      <Scroller>
        {userInfo.photos && userInfo.photos.length > 0 ?
          <Swiper
            style={{ height: 240 }}
            dot={<SwipeDot />}
            activeDot={<SwipeActiveDot />}
            paginationStyle={{ top: 15, right: 15, bottom: null, left: null }}
            autoplay={true}
          >
            {userInfo.photos.map((item, key) => (
              <SwipeItem key={key}>
                <SwipeImage source={{ uri: item.url }} resizeMode="cover" />
              </SwipeItem>
            ))}
          </Swiper>
          :
          <FakeSwiper></FakeSwiper>
        }
        <PageBody>
          <UserInfoArea>
            <UserAvatar source={{ uri: userInfo.avatar }} />
            <UserInfo>
              <UserInfoName>{userInfo.name}</UserInfoName>
              <Stars stars={userInfo.stars} showNumber={true} />
            </UserInfo>
            <UserFavoriteButton onPress={clickFavorite}>
              {favorited ?
                <FavoriteFullIcon width="24" height="24" fill="#FF0000" />
                :
                <FavoriteIcon width="24" height="24" fill="#FF0000" />
              }

            </UserFavoriteButton>
          </UserInfoArea>

          {loading &&
            <LoadingIcon size="large" color="#000" />
          }

          {userInfo.services &&
            <ServicesArea>
              <ServicesTitle>Lista de serviços</ServicesTitle>
              {userInfo.services.map((item, key) => (
                <ServiceItem key={key}>
                  <ServiceInfo>
                    <ServiceName>{item.name}</ServiceName>
                    <ServicePrice>R$ {item.price.toFixed(2)}</ServicePrice>
                  </ServiceInfo>
                  <ServiceButton onPress={() => chooseService(key)}>
                    <ServiceButtonText>Agendar</ServiceButtonText>
                  </ServiceButton>
                </ServiceItem>
              ))}
            </ServicesArea>
          }
          {userInfo.testimonials && userInfo.testimonials.length > 0 &&
            <TestimonialArea>
              <Swiper
                style={{ height: 110 }}
                showsPagination={false}
                showsButtons={true}
                prevButton={<NavPrevIcon width="35" height="35" fill="#000" />}
                nextButton={<NavNextIcon width="35" height="35" fill="#000" />}
              >
                {userInfo.testimonials.map((item, key) => (
                  <TestimonialItem key={key}>
                    <TestimonialTop>
                      <TestimonialName>{item.name}</TestimonialName>
                      <Stars stars={item.rate} showNumber={false} />
                    </TestimonialTop>
                    <TestimonialBody>{item.body}</TestimonialBody>
                  </TestimonialItem>
                ))}
              </Swiper>
            </TestimonialArea>
          }

        </PageBody>
      </Scroller>

      <BackButton onPress={backPage}>
        <BackIcon width="44" height="44" fill="#fff" />
      </BackButton>

      <ServiceModal
        show={showModal}
        setShow={setShowModal}
        user={userInfo}
        service={selectedService}
      />

    </Container>
  )
}