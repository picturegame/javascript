import React, {Component, PropTypes} from 'react';
import SSF from 'react-simple-serial-form';

export default class PlayPage extends Component {

//would image be fed by backend?


	static propTypes = {
		title: PropTypes.string.isRequired,
		img_url: PropTypes.string.isRequired,
		// guess: PropTypes.string.isRequired,
		onGuess: PropTypes.func.isRequired,
		renderStart:PropTypes.func.isRequired
		//solution: PropTypes.string.isRequired
	}
	//onGuess() {
		//let score = 0;
		//let count = 0;
		//if (user.guess === solution){
			//score=score+1;
			//count=count+1;
		//} else {
			//count=count+1
		//}
	//}

	dataHandler(){
		this.props.onGuess;
	 }

	render () {
		let {onGuess, title, img_url, renderStart} = this.props;
		return (
			<div className="play-page">
				<SSF onData={::this.dataHandler}>
					<div className="home-btn">
						<a onClick={renderStart}>Home</a>
					</div>
					<h2>{title}</h2>
					<img src={img_url} name={img_url}/>
					<input type="text" name="guess"></input>
					<input type="hidden" name="solution"></input>
				</SSF>
			</div>

		)

	}


}