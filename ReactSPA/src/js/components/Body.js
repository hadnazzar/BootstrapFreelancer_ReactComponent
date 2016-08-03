import React from 'react';

import Portfolio from './body/Portfolio'
import About from './body/About'
import Contact from './body/Contact'
export default class Body extends React.Component {

  render() {
      return(
       <div>
       <Portfolio/>
       <About/>
       <Contact/>
       </div>
      );
  }
}
