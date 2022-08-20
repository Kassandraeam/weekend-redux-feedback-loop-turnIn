const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const { query } = require('express');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/', (req, res) => {
    // const queryText = 
    // `INSERT INTO "prime_feedback" ("feeling", "understanding, "support", "comments")
    // VALUES ($1, $2, $3, $4);`
    const queryText = 
    `INSERT INTO "prime_feedback" (Feeling, Understanding, Support, Comments)
    VALUES ($1, $2, $3, $4);`
    
    let feedback = req.body;
    let queryValues = [feedback.feeling, feedback.understanding, feedback.support, feedback.comments]

    pool.query(queryText, queryValues)
        .then((result) => {
            res.sendStatus(201);
        }).catch((err) => {
            console.log(`Error making query ${queryText}`, err)
            res.sendStatus(500);
        })
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});

// INSERT INTO "prime_feedback" ("feeling", "understanding", "support", "comments")
// VALUES (4, 4, 5, 'Doing Great!');