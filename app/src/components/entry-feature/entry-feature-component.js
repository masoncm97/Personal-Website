import React from 'react';
import { useParams } from "react-router-dom";
import NameHeaderComponent from '../headers/name-header/name-header-component.js';
import { StaticPage, VerticalContainer } from '../../common/reusable-components/reusable';
import useMediaQuery from '../../common/hooks/useMediaQuery';
import { device } from '../../common/device-sizes';
import '../../styles.css';
import NavHeaderComponent from '../headers/nav-header/nav-header-component.js';
import data from '../../assets/data.js';
import useLoadImages from '../../common/hooks/useLoadImages';
import useImageMapper from '../../common/hooks/useImageMapper';
import TheaterComponent from '../theater/theater-component.js';

const EntryFeatureComponent = () => {
    
    let { id } = useParams();
    const isNonMobile = useMediaQuery(`${device.laptop}`);
    const context = require.context('../../photos', true, /\.(webp)$/);
    const imageContext = useLoadImages(context);
    const dataContext = useImageMapper(data, imageContext);
    
    return (
        <StaticPage>
        <VerticalContainer>
            <div className="flex-space-between">
                {isNonMobile &&
                    (
                        <div className="flex-start">
                            <NameHeaderComponent></NameHeaderComponent>
                        </div>
                    )
                }
                <NavHeaderComponent title={"Selected Projects"}></NavHeaderComponent>
            </div>
            {dataContext.imgsMapped && imageContext.imgsLoaded &&
                <TheaterComponent data={dataContext}></TheaterComponent>
            }
        </VerticalContainer>
    </StaticPage>
    );
};

export default EntryFeatureComponent;