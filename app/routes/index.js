var express = require('express');
var path = require('path');
var router = express.Router();
API   = require('../models/api.js');
myFunction  = require('../models/function.js');
var URL = require('url');

/* GET home page. */
module.exports = function(app) {
	app.get('/', function(req, res, next) {
		 res.render('index', 
			  { 
			 	title: '首页',
			 	"layout":"index.ejs"
			   }
		 );
	});
	app.get('/post.html', function(req, res, next) {
		  var type = req.query.type;
		  var url = URL.parse(req.url).query;
		  var nav = URL.parse(req.url).pathname;
		  var tag = '';
		  var page = 1;
		  if(type && type=='tag'){
			  tag = req.query.value;
		  }
		  if(req.query.page){
			  page = req.query.page;
		  }
		  API.find({tag:tag,page:page}, function(err, body) {
		      if (err) {
		          posts = [];
		      }else{
		    	  console.log(body);
		    	  //result = JSON.stringify(body);
		    	  //result = JSON.parse(result);
		    	  //posts = body.content;
				  posts = JSON.parse(body.content);
				  page = body.page;
				  page_count = body.page_count;
				  //posts = result.content; 
				  //posts = eval('('+body.content+')');  
		      }
		      //console.log(posts.tag);
			  res.render('post', 
				{ 
					title: '文章列表',
					posts: posts.post,
					hits: posts.hit,
					tags: posts.tag,
					page: page,
					page_count: page_count,
					url:url.replace(/\&page=[0-9]+/g, ''),
					nav:nav.replace(/\//g, ''),
					tag:tag
				}
			  );
		  });
	});
	app.get('/post_detail.html', function(req, res, next) {
		  var url = URL.parse(req.url).query;
		  var nav = URL.parse(req.url).pathname;
		  //console.log(nav);
		  var value = req.query.id;
		  API.get(value, function(err, body) {
		      if (err) {
		    	  posts = [];
		      }else{
		    	  posts = JSON.parse(body.content);
		      }
			  //console.log(post);
			  res.render('post_detail', 
				{ 
					title: posts.post[0].title,
					url:url,
					nav:nav.replace(/\//g, ''),
					post: posts.post[0],
					hits: posts.hit,
					tags: posts.tag,
					tag:''
				}
			  );
		  });
	});
	app.get('/about.html', function(req, res, next) {
		  var url = URL.parse(req.url).query;
		  var nav = URL.parse(req.url).pathname;
		  res.render('about', 
			{ 
			    title: '关于我的介绍',
				url:url,
				nav:nav.replace(/\//g, ''),
				tag:''
			}
		  );
	});
	app.get('/contact.html', function(req, res, next) {
		  var url = URL.parse(req.url).query;
		  var nav = URL.parse(req.url).pathname;
		  res.render('contact', 
			{ 
			    title: '我的联系方式',
				url:url,
				nav:nav.replace(/\//g, ''),
				tag:''
			}
		  );
	});
}
