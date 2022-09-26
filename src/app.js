const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './view');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// ================== VARIABLE GLOBAL POUR COMPTER LE NOMBRE D'ESSAIE =================
var competeur1 = 0;
var competeur2 = 0;
var competeur3 = 0;
var competeur4 = 0;
var competeur5 = 0;

// ================== FOR LOADING VIEW ===================
app.get('/', (req, res) => {
    res.render('question1');
});

app.get('/question1', (req, res) => {
    res.render('question1');
});

app.get('/question2', (req, res) => {
    res.render('question2');
});

app.get('/question3', (req, res) => {
    res.render('question3');
});

app.get('/question4', (req, res) => {
    res.render('question4');
});

app.get('/question5', (req, res) => {
    res.render('question5');
});

app.get('/reponse', (req, res) => {
    res.render('reponse');
});

// =================== FOR RECEIVING POST ==================
app.post('/req_1', (req, res)=> {
    if(competeur1 > 1) return res.redirect('/question2');
    if(req.body.choix === '1') return res.redirect('/question2');
    else {
        competeur1++;
        return res.redirect('/question1');
    }
});

app.post('/req_2', (req, res)=> {
    if(competeur2 > 1) return res.redirect('/question3');
    if(req.body.choix === '2') return res.redirect('/question3');
    else {
        competeur2++;
        return res.redirect('/question2');
    }
});

app.post('/req_3', (req, res)=> {
    if(competeur3 > 1) return res.redirect('/question4');
    if(req.body.choix === '3') return res.redirect('/question4');
    else {
        competeur3++;
        return res.redirect('/question3');
    }
});

app.post('/req_4', (req, res)=> {
    if(competeur4 > 1) return res.redirect('/question5');
    if(req.body.choix === '1') return res.redirect('/question5');
    else {
        competeur4++;
        return res.redirect('/question4');
    }
});

app.post('/req_5', (req, res)=> {
    if(competeur5 > 1) return res.redirect('/reponse');
    if(req.body.choix === '3') return res.redirect('/reponse');
    else {
        competeur5++;
        return res.redirect('/question5');
    }
});

module.exports = app;
