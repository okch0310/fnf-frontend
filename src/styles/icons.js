import React from 'react';
import { IconContext } from 'react-icons';
import { CgShapeTriangle } from 'react-icons/cg';
import { IoMdArrowDropdown } from 'react-icons/io';

export function HorizonNavTri() {
  return (
    <IconContext.Provider value={{ color: 'white', size: '2em' }}>
      <CgShapeTriangle />
    </IconContext.Provider>
  );
}

export function DropdownIcon() {
  return (
    <IconContext.Provider value={{ color: 'black', size: '1.5em' }}>
      <IoMdArrowDropdown />
    </IconContext.Provider>
  );
}
