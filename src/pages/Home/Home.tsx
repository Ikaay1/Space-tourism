import './home.css';

import React from 'react';

import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className='homeBody'>
                <div className='homeDetails'>
                    <p className='homeQuestion'>SO, YOU WANT TO TRAVEL TO</p>
                    <div>SPACE</div>
                    <p>
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className='explore'>EXPLORE</div>
            </div>
        </div>
    );
};

export default Home;
