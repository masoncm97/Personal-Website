import './App.css';
import HomeComponent from "./components/home/home-component"
import About from "./components/about/about-component"
import {
  Routes,
  Route
} from 'react-router-dom'
import styled from 'styled-components';
import SelectedProjectsComponent from './components/selected-projects/selected-projects-component';
import ArchiveComponent from './components/archive/archive-component';
import EntryFeatureComponent from './components/entry-feature/entry-feature-component';

function App() {

  return (
      <AppContainer>
            <Routes>
              <Route exact path="/" element={<HomeComponent />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/selected-projects" element={<SelectedProjectsComponent />} />
              <Route exact path="/archive" element={<ArchiveComponent />} />
              <Route exact path="feature/:id" element={<EntryFeatureComponent />} />
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
