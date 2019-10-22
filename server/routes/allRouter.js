const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


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
                      VALUES ($1);`;
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

  // POST
router.post('/newQA', (req, res) => {
    const newQA = req.body;
    console.log('what id is this? ', newQA);

    const queryText = 
    `INSERT INTO "followupQuestions" ("questions", "issues_id", "solution")
    VALUES ($1, $2, $3);`;
    
    // `INSERT INTO "public"."followupQuestions"("questions", "issues_id", "solution")
    // VALUES ($1, $2, $3);`;
    const queryValues = [
        newQA.questions,
        newQA.issues_id,
        newQA.solution,
    ];
    pool.query(queryText, [queryValues])
      .then(() => { 
        console.log('what is this? ', result.rows);
        res.send(result.rows);
        })
      .catch((err) => {
        console.log('Error completing posting new questions and solutions in query', err);
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
    console.log('/issues/' + movieId);
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

// PUT
router.put('/newInfo', (req, res) => {
    let update = req.body;
    // let id = req.body.id
    console.log('what id is this? ', update);
    let queryText = 
    `UPDATE "followupQuestions" SET "questions"=$1, "solution"=$2 
    WHERE "id"=$3;`;
// `UPDATE "followupQuestions" 
// SET "questions" = $1, "issues_id" = $2, "solution" = $3
// FROM "issues"
// WHERE "followupQuestions".id = $4;`;
    pool.query(queryText, [update.questions, update.solution, update.id])
        .then(results => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(error);
            res.sendStatus(500);
        })
}); // end router.PUT

module.exports = router
