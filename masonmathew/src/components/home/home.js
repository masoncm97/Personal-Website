import homeImage from "../../assets/pixel-painting.jpg"
import Header from "../header/header";
import styled from 'styled-components';
import { device } from '../../assets/device-sizes';
import Anime, { anime } from 'react-anime';
import useMediaQuery from '../../hooks/useMediaQuery';
import '../../styles.css'

const Home = () => {

    const isLaptop= useMediaQuery(`${device.laptop}`);

    return (
            <HomeContainer className="home">
                <Header />
                <HomeImage src={homeImage} alt="Home Image" />
            </HomeContainer>
    );
};

const styles = {
    logoStyle: isLaptop => ({
        display: isLaptop ? 'flex' : 'none'
    })
};

export const HomeImage = styled.img`
    border: 1px solid blue;
    max-width: 300px;
    margin-top: 10%;

    @media ${device.laptop} { 
        margin-top: 0%;
        max-width: 500px;
        max-height: 700px;
    }

`;

export const HomeContainer = styled.div`
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

export default Home;