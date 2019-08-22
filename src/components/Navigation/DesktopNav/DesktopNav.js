import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import { path, pathOr } from 'ramda';

import DesktopNavContext from './DesktopNavContext';
import navItemType from '../navItemType';
import Department from './components/Department/Department';

import { Wrapper } from './DesktopNav.style';

class DesktopNav extends PureComponent {
  containerRef = createRef();
  state = { navLeft: 0, navRight: 0 };

  handleNavEdgeCoords = () => {
    if (path(['current', 'getBoundingClientRect'])(this.containerRef)) {
      const boundingRect = this.containerRef.current.getBoundingClientRect();

      this.setState({
        navLeft: pathOr(0, ['left'])(boundingRect),
        navRight: pathOr(0, ['right'])(boundingRect),
      });
    }
  };

  componentDidMount() {
    this.handleNavEdgeCoords();
    window.addEventListener('resize', this.handleNavEdgeCoords, true);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleNavEdgeCoords, true);
  }

  render() {
    const { navLeft, navRight } = this.state;
    const { navItems } = this.props;

    return (
      <nav>
        <Wrapper ref={this.containerRef} data-testid="DesktopNavWrapper">
          <DesktopNavContext.Provider value={{ navLeft, navRight }}>
            {navItems &&
              navItems.map((category, index) => {
                return <Department key={`category-${index}`} navItem={category} position={index} />;
              })}
          </DesktopNavContext.Provider>
        </Wrapper>
      </nav>
    );
  }
}

DesktopNav.propTypes = {
  navItems: PropTypes.arrayOf(navItemType).isRequired,
};

export default DesktopNav;
