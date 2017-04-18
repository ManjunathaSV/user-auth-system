const request = require('supertest');
const express = require('express');

const app = require('../app');

describe('GET /users', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /checkpermission', function() {
  it('repsond true if user and permission is valid', function(done) {
    request(app)
      .get('/checkpermission?userId=user1&permId=perm1')
      .set('Accept', 'text')
      .expect('true')
      .expect(200, done);
  });
  it('repsond false if user and permission is invalid', function(done) {
    request(app)
      .get('/checkpermission?userId=user1&permId=perm8')
      .set('Accept', 'text')
      .expect('false')
      .expect(200, done);
  });
});