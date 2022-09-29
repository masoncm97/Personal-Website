import styled from 'styled-components';
import { device } from '../../common/device-sizes';
import '../../styles.css'

const Home = () => {

    return (
        <HomeImage src={"/paintings/pixel-painting.jpg"} alt="Home Image" />
    );
};

export const HomeImage = styled.img`
    max-width: 300px;
    margin-top: 10%;

    @media ${device.laptop} { 
        margin-top: 0%;
        max-width: 500px;
        max-height: 700px;
    }

`;

export default Home;