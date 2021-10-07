import React from 'react';
import PropTypes from 'prop-types';
import { 
  Container,
  Content,
  Details,
  DetailsItem,
  Preview,
  PreviewImage,
  Text,
} from './styled';
import sunImg from '../../static/img/sun.png';

const Weather = (props) => {
  const {data} = props;

  const getCurrentDate = () => new Date().toLocaleDateString('en-EN', {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return data && Object.keys(data).length !== 0 && (
    <Container>
      <Content>
        <Details>
          <DetailsItem>
            <Text size="md">
              {data.city}
            </Text>
            <Text>
              {getCurrentDate()}
            </Text>
          </DetailsItem>
          <DetailsItem>
            <Text size="lg">
              {data.main.temp} <span>&#8451;</span>
            </Text>
            <Text>
              {data.main.temp_max} / {data.main.temp_min} <span>&#8451;</span>
            </Text>
          </DetailsItem>
          <DetailsItem>
            <Text>
              Wind: {data.wind.speed} km/h
            </Text>
            <Text>
              Humidity: {data.main.humidity}%;
            </Text>
            <Text>
              Pressure: {data.main.pressure} mm Hg
            </Text>
          </DetailsItem>
        </Details>
        <Preview>
          <PreviewImage src={sunImg} alt="Weather Image"/>
        </Preview>
      </Content>
    </Container>
  );
};

Weather.defaultProps = {
  data: null,
}

Weather.propTypes = {
  data: PropTypes.oneOfType([PropTypes.shape({
    city: PropTypes.string,
    main: PropTypes.shape({
      temp: PropTypes.number,
      feels_like: PropTypes.number,
      temp_min: PropTypes.number,
      temp_max: PropTypes.number,
      pressure: PropTypes.number,
      humidity: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
      deg: PropTypes.number,
    }),
    weather: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      main: PropTypes.number,
      description: PropTypes.number,
      icon: PropTypes.number,
    })),
  }), PropTypes.oneOf([null])]),
}

export default React.memo(Weather);