import React from 'react';

export default class Title extends React.Component {
  render() {
      return(
    <header>
    <div class="container">
        <div class="row">
					<div class="col-lg-12">
						<img class="img-responsive" src="img/profile.png" alt=""/>
						<div class="intro-text">
							<span class="name">   <h1>{this.props.title}</h1> </span>
							<hr class="star-light"/>
							<span class="skills">Web Developer - Graphic Artist - User Experience Designer</span>
						</div>
					</div>
          </div>
   </div>
   </header>
      );
  }
}
