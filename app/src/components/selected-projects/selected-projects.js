import React from 'react';
import NameHeaderComponent from '../headers/name-header/name-header-component.js';
import CenteredImageComponent from '../centered-image/centered-image-component.js'
import ScrollTextComponent from '../scroll-text/scroll-text-component.js';
import { StaticPage, ResponsiveContainer } from '../../common/reusable-components/reusable';
import useMediaQuery from '../../common/hooks/useMediaQuery';
import { device } from '../../common/device-sizes';
import '../../styles.css';
import NavHeaderComponent from '../headers/nav-header/nav-header-component.js';

const SelectedProjects = () => {
    
    const isNonMobile = useMediaQuery(`${device.laptop}`);

    return (
        <StaticPage>
            <ResponsiveContainer>
                {isNonMobile &&
                    (
                        <div className="flex-column">
                            <NameHeaderComponent></NameHeaderComponent>
                            <CenteredImageComponent></CenteredImageComponent>
                        </div>
                    )
                }
                
                        <div className="flex-column">
                            <NavHeaderComponent title={"Selected Projects"}></NavHeaderComponent>
                            <ScrollTextComponent></ScrollTextComponent>
                        </div>

            </ResponsiveContainer>
        </StaticPage>
    );
};

export default SelectedProjects;