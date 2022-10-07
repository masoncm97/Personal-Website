import {VerticalContainer} from "../../../common/reusable-components/reusable";
import './home-navbar-component.css';

const HomeNavBarComponent = () => {

    return (
    <div className="flex-column responsive-container">
        <div className="home-nav-element">
            <p>Selected Projects</p>
        </div>
        <div className="home-nav-element">
            <p>Portfolio</p>
        </div>
    </div>
    );
};




export default HomeNavBarComponent;