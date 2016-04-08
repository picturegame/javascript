// Javascript Entry Point
import React from 'react';
import ReactDOM from 'react-dom';
import Startscreen from './Startscreen';
import Account from './Account';
import Contribute from './contribute_page';
import PlayPage from './playpage';
import { ajax } from 'jquery';
import Dashboard from './Dashboard';
import ImageList from './ImageList';




// function renderLogin (player) {
// 	if username === player.username and password === player.password 
// return 
// 		)
// }

<<<<<<< HEAD
let renderLogin = (user, password) => {
  ajax({
      url: 'http://ironpics.herokuapp.com/login',
      type: 'POST',
      data: {
        "username": "username",
        "password": "password"      
    	},
      cache: false,
      dataType: 'json',
      processData: false,
      contentType: false
=======
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

>>>>>>> 1ca5692ed08a4cec24ecfc881c40174dd4bff38c
    }).then(response => {
      if (response.success) {
      //????if (response.success === true)?????

        // login worked
        // do one thhing

       // loggedInUser = response.username;
       username = response.username;
       password = response.password

        ajaxSetup({
          headers: {
            'X-Access-Token': response.auth_token
          }
        })

        renderDashboard();

      } else {
        // login failed
        // do something else
        alert('The username and password do not match.');
        renderStart();

      }
    });
}


let logout = () => {
  username = null;

  ajaxSetup({
    headers: {
      'X-Access-Token': ''
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
	<Contribute onSubmit={renderImageList}/>
	, document.querySelector('.app')
	);

let renderImageList = () => ReactDOM.render (
	<ImageList onImgSelect={renderPlayPage}/>
	, document.querySelector('.app')
	);

let renderDashboard = () => ReactDOM.render (
	<Dashboard onPlay={renderImageList} onCont={renderContribute}/>
	, document.querySelector('.app')
	);







renderStart();


