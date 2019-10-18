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

// POST
router.post('/newIssue', (req, res) => {
    const newIssue = req.body;
    const queryText = `INSERT INTO "issues" ("issues")
                      VALUES ($1)`;
    const queryValues = [
    newIssue.issues,
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((err) => {
        console.log('Error completing posting new issue in query', err);
        res.sendStatus(500);
      });
  });

router.delete('/delete/:id', (req, res) => {
    const queryText = `DELETE FROM "issues" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error delete SELECT issue query', err);
        res.sendStatus(500);
      });
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
