
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
					<div className="playpage-stuff">
						<span className="playpage-title">{playImage.title}</span>
						<br/>
							<img src={playImage.image} name="image"/>
							<br/>
							<label> Caption This Picture: </label>
							<br/>
							<br/>
							<input type="text" name="guess" className="guess-input"></input>
							<br/>
							<input type="hidden" name="solution" defaultValue={playImage.solution}></input>
						<button>Submit</button>
					</div>	
					</SSF>
			</div>

		)
	}
}