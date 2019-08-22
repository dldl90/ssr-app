import React, { Component } from 'react';
import PropTypes from 'prop-types';

import navItemType from '../navItemType';
import MobileNavContext from './MobileNavContext';
import { Burger } from './components';

import { BurgerWrapper } from './MobileNav.style';
import MobileTracking from './tracking/MobileTracking';
import { PanelContainer } from './components';

class MobileNav extends Component {
  state = { open: false };

  setOpen = open => {
    this.setState(
      {
        open,
      },
      () => MobileTracking.trackSetOpen(open)
    );
  };

  render() {
    const { navItems } = this.props;
    const { open } = this.state;

    return (
      <>
        <BurgerWrapper
          className='BurgerWrapper'
          onClick={() => this.setOpen(!open)}
          aria-label={`${open ? 'Close' : 'Open'} Mobile Navigation`}
          aria-expanded={open}
          data-testid='BurgerWrapper'
        >
          <Burger />
        </BurgerWrapper>
        {open && (
          <MobileNavContext.Provider value={{ setOpen: this.setOpen }}>
            <PanelContainer navItems={navItems} />
          </MobileNavContext.Provider>
        )}
      </>
    );
  }
}

MobileNav.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.arrayOf(navItemType)).isRequired,
};

export default MobileNav;
