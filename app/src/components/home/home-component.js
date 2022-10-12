import NameHeaderComponent from '../headers/name-header/name-header-component.js'
import ShuffleImageComponent from '../shuffle-image/shuffle-image-component.js'
import HomeNavBarComponent from '../navbars/home-navbar/home-navbar-component.js'
import { StaticPage, ResponsiveContainer } from '../../common/reusable-components/reusable';
import '../../styles.css';
import './home-component.css';

const Home = () => {

    return (
        <StaticPage>
            <ResponsiveContainer>
                <div className="flex-column align-center pos-relative home-content">
                    <NameHeaderComponent></NameHeaderComponent>
                    <ShuffleImageComponent></ShuffleImageComponent>
                    <div className="link-container">
                        <a href="url">Github</a>
                        <a href="url">Newsletter</a>
                        <a href="/about">About</a>
                    </div>
                </div>
                <HomeNavBarComponent></HomeNavBarComponent>
            </ResponsiveContainer>
        </StaticPage>
    );
};

export default Home;