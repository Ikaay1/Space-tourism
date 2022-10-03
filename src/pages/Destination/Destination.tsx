import './destination.css';

import Navbar from '../../components/Navbar/Navbar';
import { destinationData } from '../../data';
import { DestinationDataInterface } from '../../interface';

const data: {
    name: string;
    index: string;
}[] = [
    {name: 'moon', index: '00'},
    {name: 'mars', index: '01'},
    {name: 'europa', index: '02'},
    {name: 'titan', index: '03'},
];

const Destination = ({
    planet,
    handleChangePlanet,
    planetObject,
    handleChangePlanetObject,
}: {
    planet: string;
    handleChangePlanet: (planetName: string) => void;
    planetObject: DestinationDataInterface;
    handleChangePlanetObject: (
        planetObjectName: DestinationDataInterface,
    ) => void;
}) => {
    const checkPlanet = (planetName: string) => {
        return planet === planetName;
    };

    return (
        <div className='destination'>
            <Navbar />
            <div className='destinationBody'>
                <div className='pick'>
                    <span style={{marginRight: '.25rem'}}>01</span>PICK YOUR
                    DESTINATION
                </div>
                <div className='destinationFlex'>
                    <div className='destinationImage'>
                        <img src={planetObject.image} alt='' />
                    </div>
                    <div className='destinationInfo'>
                        <div className='destinationMenu'>
                            {data.map(({index, name}) => (
                                <div className='destinationLink' key={index}>
                                    <div
                                        className={
                                            checkPlanet(name)
                                                ? `isActive links`
                                                : 'links'
                                        }
                                        onClick={() => {
                                            handleChangePlanet(name);
                                            destinationData.forEach((item) => {
                                                if (
                                                    name.toUpperCase() ===
                                                    item.planet
                                                ) {
                                                    handleChangePlanetObject(
                                                        item,
                                                    );
                                                }
                                            });
                                        }}
                                    >
                                        {name.toUpperCase()}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='destinationDetails'>
                            <div>{planetObject.planet}</div>
                            <p>{planetObject.details}</p>
                        </div>
                        <div className='destinationDistance'>
                            <div>
                                <p>AVG. DISTANCE</p>
                                <div>{planetObject.distance}</div>
                            </div>
                            <div>
                                <p>Est. travel time</p>
                                <div>{planetObject.time}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;
