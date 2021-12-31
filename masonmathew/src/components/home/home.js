import homeImage from "../../assets/pixel-painting.jpg"
import Navbar from "../navbar/navbar";
import styled from 'styled-components';
import { device } from '../../assets/device-sizes';

const Home = () => {
    return (
            <HomeContainer>
                <HomeImage src={homeImage} alt="Home Image" />
                <Navbar />
            </HomeContainer>
    );
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
    flex-direction: column-reverse;
    align-items: center;
    overflow: hidden;

    @media ${device.laptop} { 
        flex-direction: row;
        justify-content: space-between;
        padding: 2% 10% 2% 10%;
        max-height: 100vh;
        max-width: 100vw; 
    }
`;

export default Home;