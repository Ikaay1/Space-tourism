import React, { useState } from 'react';

import { destinationData } from '../data';
import { DestinationDataInterface } from '../interface';

const DestinationContainerComponent = ({
    children: Children,
}: {
    children: any;
}) => {
    const [planet, setPlanet] = useState<string>('moon');
    const [planetObject, setPlanetObject] = useState<DestinationDataInterface>(
        destinationData[0],
    );

    const handleChangePlanetObject = (
        planetObjectName: DestinationDataInterface,
    ) => {
        setPlanetObject(planetObjectName);
    };

    const handleChangePlanet = (planetName: string) => {
        setPlanet(planetName);
    };
    return (
        <>
            {React.isValidElement(<Children />) ? (
                <Children
                    {...{
                        planet,
                        handleChangePlanet,
                        planetObject,
                        handleChangePlanetObject,
                    }}
                />
            ) : (
                <Children />
            )}
        </>
    );
};

export default DestinationContainerComponent;
