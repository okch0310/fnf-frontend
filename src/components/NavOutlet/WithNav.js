import React from 'react';
import { Outlet } from 'react-router';

import VerticalNav from '../Nav/VerticalNav';
import HorizonNav from '../Nav/HorizonNav';

export default function WithNav() {
  return (
    <>
      <VerticalNav />
      <HorizonNav />
      <Outlet />
    </>
  );
}
