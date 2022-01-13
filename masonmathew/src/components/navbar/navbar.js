import useMediaQuery from '../../hooks/useMediaQuery';
import { device } from '../../assets/device-sizes';
import '../../styles.css'

const Navbar = () => {

    const mediaSelector= useMediaQuery(`${device.laptop}`) ? 'nonMobile' : 'mobile';

    return (
            <div className={`${mediaSelector} navMenu`} >
                <div className={`${mediaSelector} navLink`} to="/">
                    Paintings
                </div>
                <div className={`${mediaSelector} navLink`} to="/about">
                    Analog
                </div>
                <div className={`${mediaSelector} navLink`} to="/contact">
                    Github
                </div>
                <div className={`${mediaSelector} navLink`} to="/signin">
                    Info
                </div>
            </div> 
    );
};



export default Navbar;