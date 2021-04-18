const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');

let filePath = path.join(__dirname, 'result', '/' ? 'posts.json' : '/' )

const getPosts = fetch => {
	fetch('http://jsonplaceholder.typicode.com/posts')
	.then(response => response.json())
	.then(data => {
		if(data) {
			fs.writeFile(filePath, JSON.stringify(data), (err) => {
				if(err) throw err
			})
			console.log("API data gotten in result directory")
		}	
	})
	.catch(err => console.log(err));
}

getPosts(fetch);