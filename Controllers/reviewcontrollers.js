const express = require('express');
const app = express();
const db = require('../config')

exports.get= function(req,res){
    const sqlGet = "SELECT * FROM movie_reviews";
    db.query(sqlGet,(err,result)=>{
        if(err) throw err;
        return res.json({result: result})
    })
}

exports.insert = function(req, res){
    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;
    console.log(req.body.movieName);
    const sqlInsert = "INSERT INTO movie_reviews (movie_name,movie_reviews) VALUES (?,?)"
    db.query(sqlInsert,[movieName, movieReview],(err,result)=>{ 
        if(err) console.log(err);
       return res.json({movieName:movieName,movieReview:movieReview,results:result})
       
    })
}
exports.delete= function(req,res){
    const name = req.body.movieName;
   
    const sqldelete = "DELETE FROM movie_reviews WHERE movie_name = ?"
    db.query(sqldelete , [name],(err,result)=>{
        return res.json({results:result})
    })
}
exports.update= function(req,res){
    const name = req.body.movieName;
    const review = req.body.movieReview;
   console.log(name)
    const sqlUpdate = `UPDATE movie_reviews SET movie_reviews = ? WHERE movie_name = '${name}'`;
    db.query(sqlUpdate ,[review],(err,result)=>{
        if(err) console.log(err);
        return res.json({results:result})
    })
}