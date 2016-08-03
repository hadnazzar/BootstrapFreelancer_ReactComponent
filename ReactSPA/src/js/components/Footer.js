import React from 'react';

import MainFooter from './Footer/MainFooter'
import PortfolioModal from './Footer/PortfolioModal'
export default class Footer extends React.Component {

  render() {
      return(
       <div>
       <MainFooter/>
       <PortfolioModal/>
       </div>
      );
  }
}
