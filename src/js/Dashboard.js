import React, {Component, PropTypes}from 'react';
 
export default class Dashboard extends Component {
	static propTypes = {
		onPlay: PropTypes.func.isRequired,
		onCont: PropTypes.func.isRequired,
		renderStart: PropTypes.func.isRequired
	}
	clickHandler([file]) {

	}

	render () {
		let { onCont, onPlay, renderStart } = this.props;
		return (
			<div className="dashboard">
				<div className="blue-line"></div>
				<div className="home-btn">
						<a onClick={renderStart}>Home</a>
					</div>
				<div className="content-div">
					<button className="login-cont-btn" onClick={onCont}>Contribute</button>
					<button className="login-play-btn" onClick={onPlay}>Play!!</button>
				</div>	
			</div>
			);
		};
	};