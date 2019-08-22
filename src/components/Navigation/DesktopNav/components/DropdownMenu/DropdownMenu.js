import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { path, pathOr } from 'ramda';

import navItemType from '../../../navItemType';
import Column from '../Column/Column';

import { Wrapper, Columns } from './DropdownMenu.style';

class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { margin: 0, shouldCalculatePosition: true };
    this.containerRef = createRef();
  }

  componentDidMount() {
    window.addEventListener('resize', this.resetMargin, true);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resetMargin, true);
  }

  componentDidUpdate(prevProps) {
    const { open } = this.props;
    const { shouldCalculatePosition } = this.state;

    if (prevProps.open !== open && shouldCalculatePosition) {
      this.calculateMargin();
    }
  }

  updateMargin = newMargin =>
    this.state.margin !== newMargin &&
    this.setState({ margin: newMargin, shouldCalculatePosition: false });

  resetMargin = () =>
    this.state.margin !== 0 && this.setState({ margin: 0, shouldCalculatePosition: true });

  calculateMargin = () => {
    const { open, navLeft, navRight } = this.props;
    if (open) {
      if (path(['current', 'getBoundingClientRect'])(this.containerRef)) {
        const boundingRect = this.containerRef.current.getBoundingClientRect();
        const left = pathOr(0, ['left'])(boundingRect);
        const right = pathOr(0, ['right'])(boundingRect);

        if (left < navLeft) {
          this.updateMargin(navLeft - left);
        } else if (right > navRight) {
          this.updateMargin(navRight - right);
        }
      }
    }
  };

  render() {
    const { open, category, navItems, prevGtmData } = this.props;

    const style = {
      marginLeft: `${this.state.margin}px`,
    };

    return (
      <Wrapper open={open} ref={this.containerRef} style={style}>
        <Columns>
          {navItems.map((columnNavItems, index) => (
            <Column
              key={`${category}-${index}`}
              navItems={columnNavItems}
              position={index}
              prevGtmData={prevGtmData}
            />
          ))}
        </Columns>
      </Wrapper>
    );
  }
}

DropdownMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.arrayOf(navItemType)).isRequired,
  navLeft: PropTypes.number.isRequired,
  navRight: PropTypes.number.isRequired,
  prevGtmData: PropTypes.shape({}).isRequired,
};

export default DropdownMenu;
