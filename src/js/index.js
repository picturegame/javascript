// Javascript Entry Point
import React from 'react';
import ReactDOM from 'react-dom';
import Startscreen from './Startscreen';
import Account from './Account';
import Contribute from './contribute_page';
import PlayPage from './playpage';
import { ajax, ajaxSetup } from 'jquery';
import Dashboard from './Dashboard';
import ImageList from './ImageList';
import cookie from 'cookie-js';


function ifActiveUser () {
	return !!cookie.get('username');
}



var loggedInUser = null;

let renderLogin = (user) => {

	let data = new FormData();
	data.append('username', user.username);
	data.append('password', user.password);

	ajax({
		url:'http://ironpics.herokuapp.com/login',
		type: 'POST',
		data: data,
		cache: false,
		dataType: 'json',
		processData: false,
		contentType: false

	}).then(response => {
		console.log(response)

		if (response.user) {


			loggedInUser = response.username;
	  const password = response.password;

			ajaxSetup({

				headers: {
					'X-Auth-Token': response.user.auth_token
				}
			})

			renderDashboard();
		} else {


			alert('The username and password do not match.');
			renderStart();
		}
	})

}



// let logout = () => {
//    username = null;

//   ajaxSetup({
//     headers: {
//       'X-Auth-Token': ''
//     }
//   });
  
//   renderStart();
// }



let saveUser = (contact) => {
	
 		let data = new FormData();
		data.append('username', contact.username);
		data.append('email', contact.email);
		data.append('password', contact.password);
	
	ajax({
		url: 'http://ironpics.herokuapp.com/registrations',
		type: 'POST',
		data: data,
		cache: false,
		dataType: 'json',
		processData: false,
		contentType: false
		}).then( () => {

		renderDashboard(); 
	});
}

let postCont = (info) => {
	
 		let data = new FormData();
		data.append('title', info.title);
		data.append('image', info.image);
		data.append('solution', info.solution);
	
	ajax({
		url: 'http://ironpics.herokuapp.com/posts/create',
		type: 'POST',
		data: data,
		cache: false,
		dataType: 'json',
		processData: false,
		contentType: false
		}).then( (data) => {
		console.log('first',data)
		renderImages(data); 
		});
		}

let renderImages = (image) => {

	let data = new FormData();
	data.append('user', image.user);
	data.append('image', image.image);
	data.append('title', image.title);

	ajax({
		url: 'http://ironpics.herokuapp.com/posts/index',
		type: 'GET',
		data: data,
		cache: false,
		dataType: 'json',
		processData: false,
		contentType: false
		}).then( (data) => {
			renderImageList(data);
		});
}

let renderSingleImage = (data) => {

	// let data = new FormData();
	// data.append('username', image.username);
	// data.append('image', image.image);
	// data.append('title', image.title);


	// ajax({
	// 	url: 'http://ironpics.herokuapp.com/posts/index',
	// 	type: 'GET',
	// 	data: data,
	// 	cache: false,
	// 	dataType: 'json',
	// 	processData: false,
	// 	contentType: false
	// 	}).then( () => {
			
		renderPlayPage(data);
};



	



let postGuess = (answer) => {

 		let data = new FormData();
		data.append('title', answer.title);
		data.append('image', answer.image);
		data.append('solution', answer.solution);
		data.append('guesses', answer.guesses);
	
	// ajax({
	// 	url: 'http://ironpics.herokuapp.com/posts/index',
	// 	type: 'GET',
	// 	data: data,
	// 	cache: false,
	// 	dataType: 'json',
	// 	processData: false,
	// 	contentType: false

    // }).then((data) => {

    	if (answer.guess === answer.solution) {
    		 alert('Correct!');
    		 renderDashboard(); 
    	} else {
    		console.log(answer.guess);
    		console.log(answer.solution);
    		 alert('Incorrect');
    	};
}







let renderAccount = () => ReactDOM.render (
	<Account onSave={saveUser} renderStart={renderStart}/>
	, document.querySelector('.app')
	);

let renderStart = (user) => ReactDOM.render(
	<Startscreen username={user} onLogin={renderLogin} onCreate={renderAccount}/>
	, document.querySelector('.app')
	);


let renderPlayPage = (info) => ReactDOM.render (
	<PlayPage onGuess={postGuess} playImage={info} renderStart={renderStart}/>
	, document.querySelector('.app')
	);

let renderContribute = () => ReactDOM.render (
	<Contribute onSubmit={postCont} renderStart={renderStart}/>
	, document.querySelector('.app')
	);

let renderImageList = (image) => ReactDOM.render (
	<ImageList onImgSelect={renderPlayPage} images={image} renderStart={renderStart}/>
	, document.querySelector('.app')
	);

let renderDashboard = () => ReactDOM.render (
	<Dashboard onPlay={renderImages} onCont={renderContribute} renderStart={renderStart}/>
	, document.querySelector('.app')
	);

renderStart();


