import './crew.css';

import Navbar from '../../components/Navbar/Navbar';
import { crewData } from '../../data';
import { CrewDataInterface } from '../../interface';

const Crew = ({
    person,
    handleChangePerson,
    handleChangeActiveCircle,
}: {
    person: CrewDataInterface;
    handleChangePerson: (personName: CrewDataInterface) => void;
    handleChangeActiveCircle: (e: any) => void;
}) => {
    return (
        <div className='crew'>
            <Navbar />
            <div className='crewBody'>
                <div>
                    <p className='crewPick'>
                        <span style={{marginRight: '.25rem'}}>02</span>MEET YOUR
                        CREW
                    </p>
                    <div>
                        <p>{person.profession}</p>
                        <div className='crewName'>{person.name}</div>
                        <div className='crewDetails'>{person.details}</div>
                        <div className='circleDiv'>
                            <div
                                className='circle active'
                                onClick={(e) => {
                                    handleChangePerson(crewData[0]);
                                    handleChangeActiveCircle(e);
                                }}
                            ></div>
                            <div
                                className='circle'
                                onClick={(e) => {
                                    handleChangePerson(crewData[1]);
                                    handleChangeActiveCircle(e);
                                }}
                            ></div>
                            <div
                                className='circle'
                                onClick={(e) => {
                                    handleChangePerson(crewData[2]);
                                    handleChangeActiveCircle(e);
                                }}
                            ></div>
                            <div
                                className='circle'
                                onClick={(e) => {
                                    handleChangePerson(crewData[3]);
                                    handleChangeActiveCircle(e);
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className='crewImage'>
                    <img src={person.image} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Crew;
