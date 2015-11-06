var express	= require('express'),
    bodyParser  = require('body-parser'),
    mysql       = require('./survey.js'),
    app		= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.route('/api/v1/questions/')
	.get(mysql.findAllQuestions)
	.post(mysql.createQuestion);
		
app.listen(8000,function(){
	console.log('Server is running');
});
