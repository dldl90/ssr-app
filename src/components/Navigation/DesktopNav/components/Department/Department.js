import React, { PureComponent, createRef } from 'react';

import DesktopNavContext from '../../DesktopNavContext';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import navItemType from '../../../navItemType';
import DesktopTracking from '../../tracking/DesktopTracking';

import { Wrapper, DepartmentName } from './Department.style';

class Department extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { open: false, alreadyTracked: false };
    this.gtmTimer = createRef();
    this.containerRef = createRef();
  }

  componentDidUpdate() {
    if (this.state.open) {
      document.addEventListener('touchend', this.handleDocumentTouch, true);
    }
  }
  componentWillUnmount() {
    document.removeEventListener('touchend', this.handleDocumentTouch, true);
  }

  handleDocumentTouch = event => {
    if (this.containerRef.current) {
      if (!this.containerRef.current.contains(event.target)) {
        this.toggleDropdownMenu(false);
      }
    }
  };

  handleTabletTouch = event => {
    if (!this.state.open) {
      event.preventDefault();
      this.toggleDropdownMenu(true);
    }
  };

  toggleDropdownMenu = newOpenStatus => {
    const { open, alreadyTracked } = this.state;

    if (!open && newOpenStatus) {
      this.gtmTimer.current = setTimeout(() => {
        const { position, navItem } = this.props;

        if (!alreadyTracked) {
          DesktopTracking.trackHover({ position: position + 1, title: navItem.title });
          this.setState({ alreadyTracked: true });
        }
      }, 500);
    } else if (this.gtmTimer.current && !newOpenStatus) {
      clearTimeout(this.gtmTimer.current);
    }

    this.setState({ open: newOpenStatus });
  };

  handleMouseDown = gtmData => DesktopTracking.trackClick(gtmData);

  render() {
    const { navItem, position } = this.props;
    const { open } = this.state;
    if (navItem) {
      const { title, url, subItems, titleColor } = navItem;

      const gtmData = {
        level: 1,
        url: navItem && navItem.url,
        menuPosition: position + 1,
        menuName: navItem && navItem.title,
      };

      return (
        <Wrapper
          onMouseEnter={() => this.toggleDropdownMenu(true)}
          onMouseLeave={() => this.toggleDropdownMenu(false)}
          ref={this.containerRef}
          aria-haspopup="true"
          aria-expanded={open}
        >
          <DepartmentName
            open={open}
            onTouchEnd={event => this.handleTabletTouch(event)}
            onMouseDown={() => this.handleMouseDown(gtmData)}
            href={url}
            titleColor={titleColor}
          >
            {title}
          </DepartmentName>
          <DesktopNavContext.Consumer>
            {({ navLeft, navRight }) => (
              <DropdownMenu
                open={open}
                category={title}
                navItems={subItems ? subItems : []}
                prevGtmData={gtmData}
                navLeft={navLeft}
                navRight={navRight}
              />
            )}
          </DesktopNavContext.Consumer>
        </Wrapper>
      );
    }
    return <Wrapper />;
  }
}

Department.propTypes = {
  navItem: navItemType.isRequired,
};

export default Department;
