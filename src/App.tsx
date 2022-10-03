import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CrewContainer from './containerComponents/CrewContainer';
import DestinationContainerComponent from './containerComponents/DestinationContainer';
import TechnologyContainer from './containerComponents/TechnologyContainer';
import Crew from './pages/Crew/Crew';
import Destination from './pages/Destination/Destination';
import Home from './pages/Home/Home';
import Technology from './pages/Technology/Technology';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route
                    path='/destination'
                    element={
                        <DestinationContainerComponent>
                            {Destination}
                        </DestinationContainerComponent>
                    }
                />
                <Route
                    path='/crew'
                    element={<CrewContainer>{Crew}</CrewContainer>}
                />
                <Route
                    path='/technology'
                    element={
                        <TechnologyContainer>{Technology}</TechnologyContainer>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
