import React from 'react';

export default class Navbar extends React.Component {
  render() {
      return(
<nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom">
			<div class="container">
				<div class="navbar-header page-scroll">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						<span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
					</button>
					<a class="navbar-brand" href="#page-top">Start Bootstrap</a>
				</div>

				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav navbar-right">
						<li class="hidden">
							<a href="#page-top"></a>
						</li>
						<li class="page-scroll">
							<a href="#portfolio">Portfolio</a>
						</li>
						<li class="page-scroll">
							<a href="#about">About</a>
						</li>
						<li class="page-scroll">
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
      );
  }
}
