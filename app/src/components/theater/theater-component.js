import React, {useState} from 'react';
import NameHeaderComponent from '../headers/name-header/name-header-component.js';
import CenteredImageComponent from '../centered-image/centered-image-component.js'
import ScrollTextComponent from '../scroll-text/scroll-text-component.js';
import ScrollImageComponent from '../scroll-image/scroll-image-component'
import { ResponsiveContainer, Container } from '../../common/reusable-components/reusable';
import useMediaQuery from '../../common/hooks/useMediaQuery';
import { device } from '../../common/device-sizes';
import '../../styles.css';

const TheaterComponent = ({data}) => {

    const isNonMobile = useMediaQuery(`${device.laptop}`);
    const [centerImage, setCenterImage] = useState(data.imgData[0]);

    return (
        <ResponsiveContainer>
            {isNonMobile ? 
            (<Container>
                <CenteredImageComponent centerImage={centerImage}></CenteredImageComponent>
                <ScrollTextComponent data={data.imgData} setCenterImage={setCenterImage}></ScrollTextComponent>

            </Container>) :
            (<ScrollImageComponent data={data.imgData}></ScrollImageComponent>)
            }
        </ResponsiveContainer>
    );
};

export default TheaterComponent;