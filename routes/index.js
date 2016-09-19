'use strict'

var express = require('express');
var router = express.Router();
const pg = require('../db/knex_config.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  pg('blogposts').select()
    .then((rows)=>{
      pg('comments').select()
      .then((commentRows) =>{
        // 2 for loops to attach the comments to each blogpost
        var results = {}
        for (var blogposts of rows){
          // console.log(blogposts)
          var thisid = blogposts.id
          results[thisid] = {
            blogId:blogposts.id,
            blogAuthor:blogposts['blog_author'],
            blogTitle: blogposts['blog_title'],
            blogContent: blogposts['blog_content'],
            blogComments:[]
          }
          for (var comments of commentRows){
            //console.log(comments['comment_on_blog_id'])
            if (blogposts.id == comments['comment_on_blog_id']){
              results[thisid].blogComments.push(comments)
            }
          }
        }
        res.render('index', {results:results})
      })
  })
    .catch((err)=>{
      console.error("Error getting from the database");
      next(err)
    })
});

module.exports = router;
