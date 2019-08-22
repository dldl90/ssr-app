import React, { PureComponent } from 'react';

import { Navigation } from '../src';
import { GlobalDataContext } from '../src';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 400px;
  margin: 0 auto;
`;

export default class App extends PureComponent {
  render() {
    return (
      <GlobalDataContext.Consumer>
        {({ navData }) => {
          return (
            <Wrapper>
              <Navigation navData={navData} />
            </Wrapper>
          );
        }}
      </GlobalDataContext.Consumer>
    );
  }
}
