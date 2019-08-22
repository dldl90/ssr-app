/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

import navItemType from '../../../navItemType';
import MobileNavContext from '../../MobileNavContext';
import { Container, NavList, NavButton, Link } from './Panel.styles';
import { Chevron, Cross } from '../index';

const Panel = ({ navItems, goForward, goBack, onLinkClick, panelIndex }) => {
  const handleClick = (e, item, index) => {
    const { title, url, subItems } = item;
    const hasItems = subItems && subItems.length > 0;

    if (hasItems) {
      e.preventDefault();
      goForward(index, title);
    } else {
      onLinkClick(index, title, url);
    }
  };

  return (
    <Container data-testid={`Panel-${panelIndex}`}>
      <MobileNavContext.Consumer>
        {({ setOpen }) => (
          <NavList>
            {panelIndex === 0 ? (
              <li>
                <NavButton data-testid="CloseButton" onClick={() => setOpen(false)}>
                  close
                  <Cross />
                </NavButton>
              </li>
            ) : (
              <li>
                <NavButton data-testid="BackButton" onClick={goBack}>
                  <Chevron color="#fff" />
                  back
                </NavButton>
              </li>
            )}
            {navItems.map((item, index) => {
              const { title, url, subItems, titleColor } = item;

              return (
                <li key={title} data-testid={`Panel-${panelIndex}-Link-${index}`}>
                  <Link
                    titleColor={titleColor}
                    onClick={e => handleClick(e, item, index)}
                    href={url}
                  >
                    {title}
                    {subItems && subItems.length > 0 && <Chevron direction="right" />}
                  </Link>
                </li>
              );
            })}
          </NavList>
        )}
      </MobileNavContext.Consumer>
    </Container>
  );
};

Panel.defaultProps = {
  navItems: [],
  isFirstPanel: false,
};

Panel.propTypes = {
  navItems: PropTypes.arrayOf(navItemType).isRequired,
  isFirstPanel: PropTypes.bool,
  goForward: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  onLinkClick: PropTypes.func.isRequired,
};

export default memo(Panel);
