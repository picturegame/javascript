import React, {Component, PropTypes} from 'react';

export default class ImageList extends Component {
	static propTypes = {
		
		images: PropTypes.array,
		onImgSelect: PropTypes.func.isRequired,
		renderStart:PropTypes.func.isRequired
		
		// user: PropTypes.string.isRequired 
	}

	getImage(image) {
	let {onImgSelect} = this.props;
	return (
		<div className="images-div" onClick={onImgSelect.bind(null, image)}>
			<h5 className="images-title">{image.title}</h5>
			<img key={image.title} className="img-list-unique" src={image.image}/>
		</div>
		);
	}

	render () {
		let { user, images, renderStart} = this.props;
		return(
			<div className="img-list-wrapper">
				<div className="home-btn">
						<a onClick={renderStart}>Home</a>
					</div>
				<div>{images.map(::this.getImage)}</div>
				<div className="bg-fade"></div>
			</div>
		);
	}
}