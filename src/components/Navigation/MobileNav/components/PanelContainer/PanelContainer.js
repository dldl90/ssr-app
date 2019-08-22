import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { dropLast, flatten, pathOr } from 'ramda';

import navItemType from '../../../navItemType';
import MobileTracking from '../../tracking/MobileTracking';

import { Wrapper, Content } from './PanelContainer.style';
import { Panel } from '../index';

// Set max panels based on total number of nested levels within nav data
const MAX_PANELS = 3;

class PanelContainer extends PureComponent {
  state = {
    currentPanelIndex: 0,
    currentPanelPath: [[0]],
    panels: [
      {
        index: 0,
        path: [[0]],
      },
    ],
    isAnimating: false,
  };

  createPanel(newPanelPath, newIndex) {
    return [...this.state.panels, { index: newIndex, path: newPanelPath }];
  }

  // Avoid creating another panel if MAX_PANEL limit has been reached
  // or the user has previously navigated to a panel in this position
  updateExistingPanel(newPanelPath, newIndex) {
    return this.state.panels.map(panel =>
      panel.index === newIndex ? { ...panel, path: newPanelPath } : panel
    );
  }

  goForward = (index, name) => {
    const { isAnimating, panels, currentPanelIndex, currentPanelPath } = this.state;
    if (!isAnimating) {
      const newIndex = currentPanelIndex + 1;
      const panelAlreadyCreated = panels.some(panel => panel.index === newIndex);

      const shouldUpdatePanel = panels.length > MAX_PANELS || panelAlreadyCreated;
      const newPanelPath = [...currentPanelPath, [index, 'subItems']];

      this.setState(
        {
          currentPanelPath: newPanelPath,
          currentPanelIndex: newIndex,
          panels: shouldUpdatePanel
            ? this.updateExistingPanel(newPanelPath, newIndex)
            : this.createPanel(newPanelPath, newIndex),
          isAnimating: true,
        },
        () => MobileTracking.trackGoForward(currentPanelPath, index, name)
      );
    }
  };

  goBack = () => {
    const { isAnimating, currentPanelIndex, currentPanelPath } = this.state;
    if (!isAnimating) {
      const newPanelPath = dropLast(1)(currentPanelPath);
      this.setState(
        {
          currentPanelPath: newPanelPath,
          currentPanelIndex: currentPanelIndex - 1,
          isAnimating: true,
        },
        () => MobileTracking.trackGoBack(currentPanelPath)
      );
    }
  };

  handleLinkClick = (index, name, url) => {
    const { currentPanelPath } = this.state;
    MobileTracking.trackLinkClick(currentPanelPath, index, name, url);
  };

  reenableClicks = () => this.setState({ isAnimating: false });

  getNavPanelItems = navPanelPath => pathOr([], flatten(navPanelPath))(this.props.navItems);

  render() {
    const { panels, currentPanelIndex } = this.state;

    return (
      <Wrapper data-testid="PanelsWrapper">
        <Content translateX={currentPanelIndex} onTransitionEnd={this.reenableClicks}>
          {panels.map((panel, index) => {
            const navPanelItems = this.getNavPanelItems(panels[index].path);

            return (
              <Panel
                navItems={navPanelItems}
                key={panel.path}
                onLinkClick={this.handleLinkClick}
                goForward={this.goForward}
                goBack={this.goBack}
                panelIndex={index}
              />
            );
          })}
        </Content>
      </Wrapper>
    );
  }
}

PanelContainer.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.arrayOf(navItemType)).isRequired,
};

export default PanelContainer;
