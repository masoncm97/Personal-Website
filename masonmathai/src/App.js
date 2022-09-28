import './App.css';
import Home from "./components/home/home"
import Paintings from "./components/random-image/random-image-container"
import {
  Routes,
  Route
} from 'react-router-dom'
import Header from "./components/header/header";
import styled from 'styled-components';

function App() {

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
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`;

export default App;
