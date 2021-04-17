const fs = require('fs');
const fetch = require('node-fetch');

const getPosts = fetch => {
	fetch('http://jsonplaceholder.typicode.com/posts')
	.then(response => response.json())
	.then(data => {
		if(data) {
			fs.writeFile('result/posts.json',JSON.stringify(data), (err) => {
				if(err) throw err
			})
		}	
	})
	.catch(err => console.log(err));
}

getPosts(fetch);