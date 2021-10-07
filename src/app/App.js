import logo from '../logo.svg';
import { Container, Content, ContentInner, Header, Heading, Logo } from './styled';
import Weather from '../components/Weather';
import API from '../api';
import {  useState } from 'react';
import { safePropValueOr } from '../helpers';
import { DropDownField, ErrorMessage } from '../components/Weather/styled';


const defaultOptions = [
  { key: 'Kharkiv', text: 'Kharkiv', value: 'Kharkiv' },
  { key: 'Lviv', text: 'Lviv', value: 'Lviv' },
  { key: 'London', text: 'London', value: 'London' },
  { key: 'Los Angeles', text: 'Los Angeles', value: 'Los Angeles' },
  { key: 'New York', text: 'New York', value: 'New York' },
]

export const api = new API();

function App() {
  const [options, setOptions] = useState(defaultOptions);
  const [value, setValue] = useState('');
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = async (value) => {
    setValue(value);

    try {
      setError(null);
      setLoading(true);
      const response = await api.getWeather(value);
      const data = safePropValueOr(response, 'data', {})
      setLoading(false);

      if(data && Object.keys(data).length !== 0) {
        setState({
          city: data.name,
          main: data.main,
          wind: data.wind,
          weather: data.weather,
        });

        setOptions(prevState => {
          if(prevState.findIndex((el) => el.value === value) === -1) {
            const newState = [...prevState];
            newState.splice(-1);
            return [{ text: value, value }, ...newState];
          } else {
            return prevState;
          }
        });
      }
    } catch (error) {
      setLoading(false);
      setError(error.response.data);
    }
  }

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>
      <Content>
        <Heading>React Weather App</Heading>
        <ContentInner>
          <DropDownField
            error={error}
            options={options}
            placeholder='Choose city'
            search
            selection
            fluid
            allowAdditions
            value={value}
            additionLabel=''
            onChange={(e, {value}) => search(value)}
            loading={loading}
          />
          {
            error ? (
              <ErrorMessage>
                <h3>&#128533;</h3>
                <p>{error.message}</p>
                <span>Please try again!</span>
              </ErrorMessage>
            ) : (
              <Weather data={state}/>
            )
          }
        </ContentInner>
      </Content>
    </Container>
  );
}

export default App;
