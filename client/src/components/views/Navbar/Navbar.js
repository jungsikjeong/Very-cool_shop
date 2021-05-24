import React from 'react';
import { useMediaQuery } from 'react-responsive';
import NavbarMobile from './Navbar-m';
import NavbarPC from './Navbar-pc';

const Navbar = () => {
  const isMobile = useMediaQuery({
    query: '(max-width:800px)',
  });
  return <>{isMobile ? <NavbarMobile /> : <NavbarPC />}</>;
};

export default Navbar;
