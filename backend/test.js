
const request = require('supertest');
const express = require('express');

const app = express();

app.get('/user', (req, res) => {
  res.status(200).json({ name: 'john' });
});


request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end((err, res) => {
    if (err) throw err;
    console.log(res.body);
  });
