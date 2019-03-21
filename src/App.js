import React, { Component, Fragment } from 'react';
import './assets/styles/main.scss';
import MHotelCard from './components/ui-modules/MHotelCard';
import { ReflexProvider } from 'reflexbox'

const breakpoints = [48, 64]

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReflexProvider breakpoints={breakpoints}>
          <MHotelCard/>
        </ReflexProvider>
      </Fragment>
    );
  }
}

export default App;
