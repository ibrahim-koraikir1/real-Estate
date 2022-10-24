import React from 'react';

// import components
import HouseList from '../components/HouseList';
import Banner from '../components/Banner';
import Logose from '../components/Logose';
import Value from '../components/Value';

const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <Banner />
      <HouseList />
      <Logose/>
      <Value/>
    </div>
  );
};

export default Home;