const http = require('http');
const url = require('url');
const fs = require('fs');
const build_html = require('./build-html.js');

http.createServer(function (req, res) {
	req.on('error', function (err) {
		console.log('request error: ', err);
		res.writeHead(400);
		res.end();
	});

	res.on('error', function (err) {
		console.log('response error: ', err);
		res.writeHead(500);
		res.end();
	});

	var urlObj = url.parse(req.url);

	if (req.method == 'GET' && urlObj.pathname == '/about-me') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		var rs = fs.createReadStream('me.json');
		
		rs.setEncoding('UTF-8');

		var jsnMsg = '';

		rs.on('data', function (chunk) {
			jsnMsg += chunk;
		});

		rs.on('end', function () {
			var jsnObj = JSON.parse(jsnMsg);
			var aboutMeHtml = '<html>' + 
									'<head>' + 
										'<title>About Me</title>' + 
									'</head>' +
									'<body>' + 
										'<div>' + 
											'<h1>About Me</h1>' + 
											'<div>' + build_html.generateHtmlPage(jsnObj) + '</div>' +
										'</div>' + 
									'</body>' + 
								'</html>';			
			res.end(aboutMeHtml);
		}); 		
		
		//rs.pipe(res);		

		return;
	}

	res.writeHead(404);
	res.end();
})
.listen(Number(process.argv[2]));
