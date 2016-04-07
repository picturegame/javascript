import React, {Component, PropTypes}from 'react';
 
export default class Dashboard extends Component {
	static propTypes = {
		onPlay: PropTypes.func.isRequired,
		onCont: PropTypes.func.isRequired
	}
	clickHandler([file]) {

	}

	render () {
		let { onCont, onPlay } = this.props;
		return (
			<div className="dashboard">?
				<div className="intro">
					<h1>Instructions</h1>
							<p>Chupa chups gummi bears liquorice jelly tiramisu. 
							Marshmallow topping macaroon gingerbread. Cheesecake apple pie chocolate bar. 
							Sugar plum apple pie cotton candy.</p>
				</div>
				<div className="cont-div">
					<button className="login-cont-btn" onClick={onCont}>Contribute</button>
				</div>
				<div className="play-div">
					<button className="login-play-btn" onClick={onPlay}>Play!!</button>
				</div>	
			</div>
			);
		};
	};