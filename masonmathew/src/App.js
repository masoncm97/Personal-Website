import './App.css';
import Home from "./components/home/home"
import Paintings from "./components/image-scroll"
import {
  Link,
  Routes,
  Route,
  Redirect,
  useLocation,
  useParams
} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Header from "./components/header/header";
import { device } from './assets/device-sizes';
import styled from 'styled-components';

function App() {

  const location = useLocation()

  return (
    <AppContainer>
      <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/paintings" element={<Paintings />} />
          </Routes> 
    </AppContainer> 
  );
}


export const AppContainer = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    @media ${device.laptop} { 
        flex-direction: row-reverse;
        justify-content: space-between;
        padding: 2% 10% 2% 10%;
        max-height: 100vh;
        max-width: 100vw; 
    }
`;

export default App;
