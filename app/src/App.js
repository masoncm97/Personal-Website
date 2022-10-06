import './App.css';
import Home from "./components/home/home"
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
