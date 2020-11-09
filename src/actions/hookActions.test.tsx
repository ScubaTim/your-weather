import moxios from 'moxios';

import { getCurrentWeather } from './hookActions';

describe('moxios tests', () => {
    beforeEach(() => {
        moxios.install()
    })
    afterEach(() => {
        moxios.uninstall()
    })

    test('calls the getCurrentWeather callback on acios response', async () => {
        const currentWeather = {
            "coord": {
                "lon": -122.08,
                "lat": 37.39
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 282.55,
                "feels_like": 281.86,
                "temp_min": 280.37,
                "temp_max": 284.26,
                "pressure": 1023,
                "humidity": 100
            },
            "visibility": 16093,
            "wind": {
                "speed": 1.5,
                "deg": 350
            },
            "clouds": {
                "all": 1
            },
            "dt": 1560350645,
            "sys": {
                "type": 1,
                "id": 5122,
                "message": 0.0139,
                "country": "US",
                "sunrise": 1560343627,
                "sunset": 1560396563
            },
            "timezone": -25200,
            "id": 420006353,
            "name": "Mountain View",
            "cod": 200
        }

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: currentWeather
            })
        })

        const mockSetCurrentWeather = jest.fn()

        await getCurrentWeather(mockSetCurrentWeather);

        expect(mockSetCurrentWeather).toHaveBeenCalledWith(currentWeather);

    })
})
