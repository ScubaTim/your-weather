import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const WeatherDisplay: React.FC = () => {
    return (
        <Card data-test="component-weatherDisplay" color="light"  className="shadow" style={{minWidth:"320px", width:"45vw"}}>
        <CardBody>
          <CardTitle tag="h1" className="text-center text-uppercase my-2">Your Location</CardTitle>
          <CardSubtitle className="text-center text-uppercase font-weight-bold text-secondary">The Current Weather Is:</CardSubtitle>
          <hr className="mt-3" />
          <div className="mx-4 pt-4 pb-5">
            <CardText>
              Weather Data
            </CardText>
          </div>
          <div className="d-flex mx-4 mb-4">
          <Button block className="text-white bg-dark">Get Weather</Button>
          </div>
        </CardBody>
      </Card>
    )
}

export default WeatherDisplay;