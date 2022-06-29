/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import request from 'supertest';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import app from '../src/app';

describe('Root controller', () => {
  describe('GET /', () => {
    it('responds with alive message and status 200', async () => {
      const response = await request(app).get('/');
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(200);
      expect(response.body.data).to.be.a('string');
      expect(response.body.data).to.equal('Alive');
    });
  });
});
