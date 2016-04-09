import React, {Component, PropTypes} from 'react';

export default class ImageList extends Component {
	static propTypes = {
		
		images: PropTypes.arrayOf(PropTypes.shape ({
			img_url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		})).isRequired,
		
		onImgSelect: PropTypes.func.isRequired,
		
		username: PropTypes.string.isRequired
	}

	getImage(image) {
	let {onImgSelect} = this.props;
	return (
		<div onClick={onImgSelect.bind(null, image)}>
			<h5>{image.title}</h5>
			<img className="img-list-unique" src={image.img_url}/>
		</div>
		);
	}

	render () {
		let { username, images} = this.props;
		return(
			<div className="img-list-wrapper">
				<div className="home-btn">
						<a onClick={renderStart}>Home</a>
					</div>
				<h4>{username}</h4>
				<div>{images.map(::this.getImage)}</div>
			</div>
		);
	}
}