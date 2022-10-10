import {VerticalContainer} from "../../../common/reusable-components/reusable";
import './home-navbar-component.css';

const HomeNavBarComponent = () => {

    return (
    <div className="flex-column responsive-container">
        <div className="home-nav-element">
            <a href="/selected-projects">Selected Projects</a>
        </div>
        <div className="home-nav-element">
            <p>Portfolio</p>
        </div>
    </div>
    );
};




export default HomeNavBarComponent;