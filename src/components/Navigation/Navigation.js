import React, { memo } from 'react';

import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';

import navDataTransformer from './transformer/navDataTransformer'
import { NavWrapper, DesktopContainer, MobileContainer } from './Navigation.style';

const Navigation = ({ navData }) => {
  if (navData.length < 1 || !navData) return <NavWrapper />;

  const desktopNavItems = navDataTransformer({ navData, isMobile: false });
  const mobileNavItems = navDataTransformer({ navData, isMobile: true });

  return (
    <NavWrapper>
      <DesktopContainer data-testid="DesktopNav">
        <DesktopNav navItems={desktopNavItems} />
      </DesktopContainer>
      <MobileContainer data-testid="MobileNav">
        <MobileNav navItems={mobileNavItems} />
      </MobileContainer>
    </NavWrapper>
  );
};

export default memo(Navigation);
