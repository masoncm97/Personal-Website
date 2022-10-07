import './App.css';
import Home from "./components/home/home-component"
import About from "./components/about/about-component"
import {
  Routes,
  Route
} from 'react-router-dom'
import styled from 'styled-components';

function App() {

  return (
      <AppContainer>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes> 
      </AppContainer> 
  );
}


export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    min-width: 100vw;
    min-height: 100vh;
    border: 1px solid blue;
`;

export default App;
