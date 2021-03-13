const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');

const { getAllTriggers, postOneTrigger, deleteTrigger, editTrigger } = require('./API/triggers');

const { loginUser, signUpUser, getUserDetails, updateUserDetails } = require('./API/users');

// Triggers
app.get('/triggers', auth, getAllTriggers);
app.post('/trigger', auth, postOneTrigger);
app.delete('/triggers/:triggerId', auth, deleteTrigger);
app.put('/trigger/:triggerId', auth, editTrigger);
// Users
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.get('/user', auth, getUserDetails);
app.post('/user', auth, updateUserDetails);

exports.api = functions.https.onRequest(app);
