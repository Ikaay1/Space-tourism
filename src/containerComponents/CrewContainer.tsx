import React, { useState } from 'react';

import { crewData } from '../data';
import { CrewDataInterface } from '../interface';

const CrewContainer = ({children: Children}: {children: any}) => {
    const [person, setPerson] = useState<CrewDataInterface>(crewData[0]);

    const handleChangePerson = (personName: CrewDataInterface) => {
        setPerson(personName);
    };

    const handleChangeActiveCircle = (e: any) => {
        const circles = document.querySelectorAll('.circle');
        circles.forEach((circle) => {
            if (circle.classList.contains('active')) {
                circle.classList.remove('active');
            }
        });
        e.target.classList.add('active');
    };

    return (
        <>
            {React.isValidElement(<Children />) ? (
                <Children
                    {...{person, handleChangePerson, handleChangeActiveCircle}}
                />
            ) : (
                <Children />
            )}
        </>
    );
};

export default CrewContainer;
