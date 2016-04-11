import React, {Component, PropTypes} from 'react';
import SSF from 'react-simple-serial-form';

export default class PlayPage extends Component {

//would image be fed by backend?


	static propTypes = {
		playImage: PropTypes.object,
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

	dataHandler(info){
		this.props.onGuess(info);
	 }

	render () {
		let {onGuess, playImage, renderStart} = this.props;
		console.log(playImage)
		return (
			<div className="play-page">
				<SSF onData={::this.dataHandler}>
					<div className="home-btn">
						<a onClick={renderStart}>Home</a>
					</div>
						<h2>{playImage.title}</h2>
							<img src={playImage.image} name="image"/>
							<input type="text" name="guess"></input>
							<input type="hidden" name="solution" defaultValue={playImage.solution}></input>
						<button>Submit</button>
					</SSF>
			</div>

		)

	}


}