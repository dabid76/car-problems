const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// const axios = require('axios');

// const router = express.Router();

// GET
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "issues" ORDER BY "id" ASC;`)
        .then((result) => {
            console.log('Result', result)
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error', error)
        res.sendStatus(500);
    });
}); // end router.GET

// GET
router.get('/solution/:id', (req, res) => {
    let movieId = req.params.id;
    console.log('/film/' + movieId);
    let queryText = 

    `SELECT "followupQuestions".solution 
    FROM "followupQuestions"
    WHERE "followupQuestions".id = $1;`;

    pool.query(queryText, [movieId])
        .then(results => {
            console.log(results.rows);
            res.send(results.rows)
        })
        .catch(error => {
            console.log('error with the answer', error);
            res.sendStatus(500);
        })
  });


// GET
router.get('/questions/:id', (req, res) => {
    let movieId = req.params.id;
    console.log('/film/' + movieId);
    let queryText = 

    `SELECT "issues".id, "followupQuestions".questions, "followupQuestions".solution 
    FROM "followupQuestions"
    JOIN "issues" ON "issues".id = "followupQuestions".issues_id
    WHERE "issues".id = $1;`;
    pool.query(queryText, [movieId])
        .then(results => {
            console.log(results.rows);
            res.send(results.rows)
        })
        .catch(error => {
            console.log('error with the answer', error);
            res.sendStatus(500);
        })
}); // end router.GET

module.exports = router
