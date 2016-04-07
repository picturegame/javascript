// Javascript Entry Point
import React from 'react';
import Startscreen from './Startscreen';
import Account from './Account';
import Contribute from './contribute_page';
import Playpage from './playpage';
import { ajax } from 'jquery';
import Dashboard from './Dashboard';

//let loggedInUser = null;

//let renderStart = () => 
	//const url = '';

	//ajax({url}).then(data => {
		//ReactDOM.render(
	//<Startscreen onCreate={renderSignIn}/>
//, document.querySelector('.app')
	//);
//});

//let data = new formData();
//data.append('username',)
//data.append('email',)
//data.append('password_digest',)
//data.append('image_url',)
//data.append('solution',)
//data.append('title',)
//data.append('guess',)
//data.append('points',)


//ajax({
//url:'',
	//type: 'POST'
	//headers: {
		//X-access-token: man,
		//X-girl: boy,
	//}
	//data: data,
	//cache: false,
	//dataType: 'json',
	//processData: false,
	//contentType: false
//}).then(() => {
	//}renderStart();
//);




function help(x) {
	x => x;
}



let renderPlaypage () => {
	ReactDOM.render(
		<PlayPage onGuess={help}/>,
		document.querySelector('.app')
		);
}



