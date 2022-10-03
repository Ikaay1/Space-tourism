import React, { useState } from 'react';

import { technologyData } from '../data';
import { TechnologyDataInterface } from '../interface';

const TechnologyContainer = ({children: Children}: {children: any}) => {
    const [number, setNumber] = useState<string>('1');
    const [launchObject, setLaunchObject] = useState<TechnologyDataInterface>(
        technologyData[0],
    );

    const handleChangeLaunchObject = (
        launchObjectName: TechnologyDataInterface,
    ) => {
        setLaunchObject(launchObjectName);
    };

    const handleChangeNumber = (num: string) => {
        setNumber(num);
    };
    return (
        <>
            {React.isValidElement(<Children />) ? (
                <Children
                    {...{
                        number,
                        handleChangeNumber,
                        launchObject,
                        handleChangeLaunchObject,
                    }}
                />
            ) : (
                <Children />
            )}
        </>
    );
};

export default TechnologyContainer;
