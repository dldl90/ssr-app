import React, { PureComponent } from 'react';
import { ErrorWrapper } from './ErrorComp.style';
export default class MyError extends PureComponent {
  render() {
    return (
      <ErrorWrapper>
        <p>
          Ups! something went wrong
          <a href="#" onClick={this.handleClick}>
            Click to reload
          </a>
        </p>
      </ErrorWrapper>
    )
  }

  handleClick = () => {
    throw new Error('Uncaught');
  }
}
