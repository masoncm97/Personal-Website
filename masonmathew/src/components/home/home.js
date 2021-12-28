import homeImage from "../../assets/pixel-painting.jpg"
import Navbar from "../navbar/navbar";
import styled from 'styled-components';

const Home = () => {
    return (
            <HomeContainer>
                <HomeImage src={homeImage} alt="Home Image" />
                <Navbar />
            </HomeContainer>
    );
};

export const HomeImage = styled.img`
    max-width: 20%;
    border: 1px solid blue;
    margin-left: 5em;
`;

export const HomeContainer = styled.div`
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    margin-top: 5em;
`;

export default Home;