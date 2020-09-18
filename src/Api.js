import AsyncStorage from '@react-native-community/async-storage';

const BASE_API = 'https://api.b7web.com.br/devbarber/api';

export default {
  checkToken: async (token) => {
    const req = await fetch(`${BASE_API}/auth/refresh`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token })
    })
    const res = await req.json();
    return res;
  },
  signIn: async (email, password) => {
    const req = await fetch(`${BASE_API}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    const res = await req.json();
    return res;
  },
  signUp: async (name, email, password) => {
    const req = await fetch(`${BASE_API}/user`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
    const res = await req.json();
    return res;
  },
  logout: async () => {
    const token = await AsyncStorage.getItem('token');
    const req = await fetch(`${BASE_API}/auth/logout`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token })
    })
    const res = await req.json();
    return res;
  },
  getBarbers: async (lat = null, lng = null, address = null) => {
    const token = await AsyncStorage.getItem('token');
    const req = await fetch(`${BASE_API}/barbers?token=${token}&lat=${lat}&lng=${lng}&address=${address}`);

    const res = await req.json();
    return res;
  },
  getBarber: async (id) => {
    const token = await AsyncStorage.getItem('token');

    const req = await fetch(`${BASE_API}/barber/${id}?token=${token}`);

    const res = await req.json();
    return res;
  },

  setFavorited: async (barberId) => {
    const token = await AsyncStorage.getItem('token');
    const req = await fetch(`${BASE_API}/user/favorite`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token, barber: barberId })
    })
    const res = await req.json();
    return res;
  },
  setAppointment: async (userId,
    service,
    selectedDay,
    selectedHour,
    selectedMonth,
    selectedYear) => {
    const token = await AsyncStorage.getItem('token');
    const req = await fetch(`${BASE_API}/user/appointment`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token,
        id: userId,
        service,
        day: selectedDay,
        hour: selectedHour,
        month: selectedMonth,
        year: selectedYear
      })
    })
    const res = await req.json();
    return res;

  }

}