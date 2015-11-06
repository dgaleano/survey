var mysql = require('mysql'),
    conf  = require('./dbconf.json');

var connection = mysql.createConnection(conf);

exports.findAllQuestions = function(req,res){
	connection.query({
		sql:"SELECT id,question FROM questions"
	},function(error,result){
		if(error){
			res.json({
				status:false,
				code:500,
				messages:[
					error.stack
				],
				questions:null
			});
		}
		else{
			res.json({
				status:true,
				code:200,
				messages:[
					'Questions show successfully'
				],
				questions:result
			});
		}
	});
}

exports.createQuestion = function(req, res){
	connection.query({
		sql:"INSERT INTO questions(question) VALUES(?)",
		values: [req.body.question]
	},
	function(error,result){
		if(error){
			res.json({
				status:false,
				code:500,
				messages:[
					error.stack
				],
				question:null
			});
		}
		else{
			res.json({
				status:true,
				code:201,
				messages:[
					'Question Inserted Successfully'
				],
				question:{
					id:result.insertId,
					question:req.body.question
				}
			});
		}
	}
	);
}