import React from 'react';
import { Outlet } from 'react-router';

import VerticalNav from '../Nav/VerticalNav';

export default function WithNav() {
  return (
    <>
      <VerticalNav />
      <Outlet />
    </>
  );
}
