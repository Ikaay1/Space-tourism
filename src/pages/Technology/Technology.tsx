import './technology.css';

import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import { technologyData } from '../../data';
import { TechnologyDataInterface } from '../../interface';

const data: {
    num: string;
    index: string;
}[] = [
    {num: '1', index: '00'},
    {num: '2', index: '01'},
    {num: '3', index: '02'},
];

const Technology = ({
    number,
    handleChangeNumber,
    launchObject,
    handleChangeLaunchObject,
}: {
    number: string;
    handleChangeNumber: (num: string) => void;
    launchObject: TechnologyDataInterface;
    handleChangeLaunchObject: (
        launchObjectName: TechnologyDataInterface,
    ) => void;
}) => {
    return (
        <div className='technology'>
            <div className='technologyNav'>
                <Navbar />
            </div>
            <div className='technologyBody'>
                <div className='technologyPick'>
                    <span style={{marginRight: '.25rem'}}>03</span>SPACE LAUNCH
                    101
                </div>
                <div className='technologyFlex'>
                    <div className='technologyDetailsFlex'>
                        <div className='technologyNumbers'>
                            {data.map(({index, num}) => (
                                <p
                                    className={number === num ? 'active' : ''}
                                    key={index}
                                    onClick={() => {
                                        handleChangeNumber(num);
                                        technologyData.forEach((item) => {
                                            if (num === item.num) {
                                                handleChangeLaunchObject(item);
                                            }
                                        });
                                    }}
                                >
                                    {num}
                                </p>
                            ))}
                        </div>
                        <div>
                            <p className='technologyHeader'>THE TERMINOLOGY…</p>
                            <div>{launchObject.header}</div>
                            <p>{launchObject.details}</p>
                        </div>
                    </div>
                    <div className='technologyImage'>
                        <img src={launchObject.image.split(' ')[0]} alt='' />
                    </div>
                    <div className='technologyImageTab'>
                        <img src={launchObject.image.split(' ')[1]} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technology;
