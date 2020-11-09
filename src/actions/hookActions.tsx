import axios from 'axios';

export const getCurrentWeather = async (setCurrentWeather: any) => {
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=30.438255&lon=-84.280731&appid=0317b02bce728aa1f3b87d5d6ad88a5d`)
    setCurrentWeather(response.data);
}

export default { getCurrentWeather }