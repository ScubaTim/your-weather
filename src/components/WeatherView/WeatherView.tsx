import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { getCurrentWeather } from '../../actions/hookActions';


const WeatherView: React.FC = () => {
    //const [currentLocation, setCurrentLocation] = React.useState({})
    const [currentWeather, setCurrentWeather] = React.useState({});

    /*const getLocation = (): void => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setCurrentLocation({ lat: position.coords.latitude, lon: position.coords.longitude })
                });
        } else {
            console.log('error with navigator.geolocaton. Oh no!')
        }
    }
    getLocation()*/

    React.useEffect(() => {
        getCurrentWeather(setCurrentWeather)
    }, [])

    //console.log(currentLocation)
    console.log(currentWeather);

    return (
        <Container data-test="component-weather">
            <Row>
                <Col className="mt-2 mb-5 text-center text-primary">
                    <h1 className="display-3 m-0 font-weight-bolder">Orlando</h1>
                    <p className="font-weight-light">Florida, 32303</p>
                </Col>
            </Row>
            <Row noGutters>
                <Col xs="4">
                    <div className="border border-primary bg-primary text-light rounded m-1 p-1 text-center">
                        <p className="mb-0">Temp:</p>
                        <h2 className="mb-5 font-weight-bolder">78F</h2>
                        <p className="mb-0">Feels Like:</p>
                        <h2 className="font-weight-bolder">90F</h2>
                    </div>
                </Col>
                <Col xs="8">
                    <Row>
                        <Col>
                            <div className="border border-primary bg-primary text-light rounded m-1 py-1 px-3">
                                <p>Current Conditions:</p>
                                <p className="font-weight-bolder mt-5 mb-0">Good</p>
                            </div>
                        </Col>
                    </Row>
                    <Row noGutters>
                        <Col>
                            <div className="border border-primary bg-primary text-light text-center rounded m-1 p-1">
                                <span>Humidity:&nbsp;<strong>87%</strong></span>
                            </div>
                        </Col>
                        <Col>
                            <div className="border border-primary bg-primary text-light text-center rounded m-1 p-1">
                                <span>Wind:&nbsp;<strong>12mph</strong></span>
                            </div>
                        </Col>
                    </Row>
                    <Row noGutters>
                        <Col>
                            <div className="border border-primary bg-primary text-light text-center rounded m-1 p-1">
                                <span>Pressure:&nbsp;<strong>1018hPa</strong></span>
                            </div>
                        </Col>
                        <Col>
                            <div className="border border-primary bg-primary text-light text-center rounded m-1 p-1">
                                <span>Direction:&nbsp;<strong>70&deg;</strong></span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    );
};

export default WeatherView;