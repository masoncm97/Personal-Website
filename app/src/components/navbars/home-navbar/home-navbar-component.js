import './home-navbar-component.css';

const HomeNavBarComponent = () => {

    return (
    <div className="flex-column responsive-container">
        <div className="home-nav-element">
            <a href="/selected-projects">Selected Projects</a>
        </div>
        <div className="home-nav-element">
            <a href="/archive">Archive</a>
        </div>
    </div>
    );
};




export default HomeNavBarComponent;