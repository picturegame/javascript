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
      if (response.user) {
      //????if (response.success === true)?????

        // login worked
        // do one thhing

       // loggedInUser = response.username;
       // username = response.username;
       // password = response.password
=======

    	console.log(response);

     if (response.success) {

      if (response.user) {

       username = response.username;

>>>>>>> 0152b3cbb74609974e2351c837b7ba311f359dc8
       	loggedInUser = response.user;

        ajaxSetup({
          headers: {
            'X-Auth-Token': response.user.auth_token
          }
        })

        renderDashboard(); 

      } else {

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
	data.append('image', image.image);
	data.append('title', image.title);

	ajax({
		url: 'http://ironpics.herokuapp.com/posts/create',
		type: 'GET',
		data: data,
		cache: false,
		dataType: 'json',
		processData: false,
		contentType: false
		}).then( () => {
<<<<<<< HEAD
=======


		alert('Screw This!');


>>>>>>> 0152b3cbb74609974e2351c837b7ba311f359dc8
			renderImageList();
		});


}

let renderSingleImage = (image) => {

	let data = new FormData();
	data.append('username', image.username);
	data.append('image', image.image);
	data.append('title', image.title);


	ajax({
		url: 'http://ironpics.herokuapp.com/posts/create',
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
		}).then( () => {
<<<<<<< HEAD
		renderImages(); 
		});
		}
=======
		
		renderImageList(); 
	});
}

let postGuess = (answer) => {
	
 		let data = new FormData();
		data.append('title', answer.title);
		data.append('image', answer.image);
		data.append('solution', answer.solution);
		data.append('guess', answer.guess)
	
	ajax({
		// url: 'http://ironpics.herokuapp.com/posts/create',
		type: 'POST',
		data: data,
		cache: false,
		dataType: 'json',
		processData: false,
		contentType: false
>>>>>>> 0152b3cbb74609974e2351c837b7ba311f359dc8

    }).then(response => {

    	console.log(response);

     if (response.success) {

      if (response.answer) {
      	solution = response.solution;
      	guess = response.guess;
		let score = 0;
		let count = 0;
      	if (solution === guess) {
		//if (user.guess === solution){      		

			alert('Correct! You get 1 Point!');

			score=score+1;
			count=count+1;

        renderDashboard(); 

      } else {

        console.log('resp:', response);
        alert('Sorry!  Wrong answer.  Try again.');
			count=count+1    
		    renderPlayPage();

      }
     }
    }
})
}






let renderAccount = () => ReactDOM.render (
	<Account onSave={saveUser} renderStart={renderStart}/>
	, document.querySelector('.app')
	);

let renderStart = (user) => ReactDOM.render(
	<Startscreen username={user} onLogin={renderLogin} onCreate={renderAccount}/>
	, document.querySelector('.app')
	);


let renderPlayPage = () => ReactDOM.render (
	<PlayPage onGuess={postGuess} renderStart={renderStart}/>
	, document.querySelector('.app')
	);

let renderContribute = () => ReactDOM.render (
	<Contribute onSubmit={postCont} renderStart={renderStart}/>
	, document.querySelector('.app')
	);

let renderImageList = () => ReactDOM.render (
<<<<<<< HEAD
	<ImageList onImgSelect={renderPlayPage} images={renderImages} username={renderImages}/>
=======
	<ImageList onImgSelect={renderPlayPage} images={images} username={username} renderStart={renderStart}/>
>>>>>>> 0152b3cbb74609974e2351c837b7ba311f359dc8
	, document.querySelector('.app')
	);

let renderDashboard = () => ReactDOM.render (
	<Dashboard onPlay={renderImages} onCont={renderContribute} renderStart={renderStart}/>
	, document.querySelector('.app')
	);








renderStart();


