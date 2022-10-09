import React from 'react';
import NameHeaderComponent from '../headers/name-header/name-header-component.js';
import ShuffleImageComponent from '../shuffle-image/shuffle-image-component.js'
import { StaticPage, ResponsiveContainer } from '../../common/reusable-components/reusable';
import useMediaQuery from '../../common/hooks/useMediaQuery';
import { device } from '../../common/device-sizes';
import '../../styles.css';
import NavHeaderComponent from '../headers/nav-header/nav-header-component.js';

const AboutComponent = () => {

    const isNonMobile = useMediaQuery(`${device.laptop}`);

    return (
        <div>
            <StaticPage>
                <ResponsiveContainer>
                    <div className="flex-column">
                        {isNonMobile ?
                            (<NameHeaderComponent></NameHeaderComponent>) :
                            (<NavHeaderComponent title={"About"}></NavHeaderComponent>)
                        }
                        <ShuffleImageComponent></ShuffleImageComponent>
                    </div>
                    <div className="responsive-container">
                        {isNonMobile &&
                            <NavHeaderComponent title={"About"}></NavHeaderComponent> 
                        }
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute.</p>
                    </div>
                </ResponsiveContainer>
            </StaticPage>
        </div>
    );
};

export default AboutComponent;