'use strict'

const express = require('express');
let router = express.Router();
const pg = require('../db/knex_config.js');

router.post('/v1/items',(req, res, next) => {
  //console.log(pg)
  pg('blogposts').insert(req.body)
  .then(() =>{
    res.redirect('/')
  })
  .catch((err)=>{
    console.log('there was an error')
    next(err)
  })
});

router.get('/v1/items/delete/:id', (req, res, next) => {
   console.log("the id is: ", req.params.id);
  // res.json(req.params)
  pg('blogposts').where('id', req.params.id).del()
  .then((something)=>{
    console.log(something)
  res.redirect('/')
})
  .catch((err) => {
  console.error("error deleting from db");
  next(err);
  });
});

router.get('/v1/items/:id/editPost', (req, res, next) =>{
  pg('blogposts').where('id', req.params.id)
  .then((blogData)=>{
    res.render('editPost', {blogData: blogData})
  })
  .catch((err) => {
  console.error("error updating from db");
  next(err);
  })
})

router.post('/v1/items/id/addComment',(req, res, next) => {
  res.json(req.body)
  pg('comments').insert(req.body)
  .then(() =>{
    res.redirect('/')
  })
  .catch((err)=>{
    console.log('there was an error')
    next(err)
  })
});

router.post('/v1/items/:id', (req, res, next) =>{
  pg('blogposts').where('id', req.params.id)
    .update({
      blog_author: req.body.blog_author,
      blog_title: req.body.blog_title,
      blog_content: req.body.blog_content
    })
    .then(()=>{
      res.redirect('/')
    })
})

module.exports = router;
