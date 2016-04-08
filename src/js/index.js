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


var loggedInUser = null;

// function renderLogin (player) {
// 	if username === player.username and password === player.password 
// return 
// 		)
// }


//let renderLogin = (user, password) => {
  //ajax({
      //url: 'http://ironpics.herokuapp.com/login',
      //type: 'POST',
      //data: {
        //"username": "username",
        //"password": "password"      
    	//},
      //cache: false,
      //dataType: 'json',
      //processData: false,
      //contentType: false
    //});
   //};

let renderLogin = (user) => {
  	let data = new FormData();
		data.append('username', user.username);
		data.append('password', user.password);
	
	ajax({
		url: 'http://ironpics.herokuapp.com/login',
		type: 'POST',
		data: data,
		cache: false,
		dataType: 'json',
		processData: false,
		contentType: false


    }).then(response => {
<<<<<<< HEAD
    	console.log(response);
      if (response.success) {
=======
      if (response.user) {
>>>>>>> 9cd195ee82ad6bf88b54c401766598f2171fac7c
      //????if (response.success === true)?????

        // login worked
        // do one thhing

       // loggedInUser = response.username;
       // username = response.username;
       // password = response.password
       	loggedInUser = response.user;

        ajaxSetup({
          headers: {
            'X-Auth-Token': response.user.auth_token
          }
        })

        renderDashboard();

      } else {
        // login failed
        // do something else
        console.log('resp:', response);
        alert('The username and password do not match.');
        renderStart();

      }
    });
}


let logout = () => {
  username = null;

  ajaxSetup({
    headers: {
      'X-Auth-Token': ''
    }
  });
  renderStart();
}



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

let renderImages = (image) => {

	let data = new FormData();
	data.append('username', image.username);
	data.append('img_url', image.img_url);
	data.append('title', image.title);

	ajax({
		// url: 'http://ironpics.herokuapp.com/registrations',
		type: 'GET',
		data: data,
		cache: false,
		dataType: 'json',
		processData: false,
		contentType: false
		}).then( () => {
<<<<<<< HEAD
			alert('Screw This!');
=======
>>>>>>> 624480ef89c32177ef58d21a4ca898ca2144788d
			renderImageList();
		});
}

let renderSingleImage = (image) => {

	let data = new FormData();
	data.append('username', image.username);
	data.append('img_url', image.img_url);
	data.append('title', image.title);


	ajax({
		// url: 'http://ironpics.herokuapp.com/registrations',
		type: 'GET',
		data: data,
		cache: false,
		dataType: 'json',
		processData: false,
		contentType: false
		}).then( () => {
			renderPlayPage();
		});
}



	
let postCont = (info) => {
	
 		let data = new FormData();
		data.append('title', info.title);
		data.append('image', info.img_url);
		data.append('solution', info.solution);
	
	ajax({
		url: 'http://ironpics.herokuapp.com/posts/create',
		type: 'POST',
		data: data,
		cache: false,
		dataType: 'json',
		processData: false,
		contentType: false
		}).then( () => {
		renderImageList(); 
		});
		}











let renderAccount = () => ReactDOM.render (
	<Account onSave={saveUser}/>
	, document.querySelector('.app')
	);

let renderStart = (user) => ReactDOM.render(
	<Startscreen username={user} onLogin={renderLogin} onCreate={renderAccount}/>
	, document.querySelector('.app')
	);


let renderPlayPage = () => ReactDOM.render (
	<PlayPage onGuess={renderDashboard}/>
	, document.querySelector('.app')
	);

let renderContribute = () => ReactDOM.render (
	<Contribute onSubmit={postCont}/>
	, document.querySelector('.app')
	);

let renderImageList = () => ReactDOM.render (
	<ImageList onImgSelect={renderPlayPage} images={images} username={username}/>
	, document.querySelector('.app')
	);

let renderDashboard = () => ReactDOM.render (
	<Dashboard onPlay={renderImages} onCont={renderContribute}/>
	, document.querySelector('.app')
	);








renderStart();


