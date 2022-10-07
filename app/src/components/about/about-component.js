import React from 'react';
import NameHeaderComponent from '../headers/name-header/name-header-component.js';
import ShuffleImageComponent from '../shuffle-image/shuffle-image-component.js'
import { StaticPage, ResponsiveContainer } from '../../common/reusable-components/reusable';
import '../../styles.css';

const AboutComponent = () => {
    return (
        <div>
            <StaticPage>
                <ResponsiveContainer>
                    <div className="flex-column">
                        <NameHeaderComponent></NameHeaderComponent>
                        <ShuffleImageComponent></ShuffleImageComponent>
                    </div>
                    <div className="responsive-container">
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