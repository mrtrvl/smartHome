/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import request from 'supertest';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import app from '../src/app';

describe('Places controller', () => {
  describe('GET /places', () => {
    it('responds with places array and status 200', async () => {
      const response = await request(app).get('/places');
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.have.property('success');
      expect(response.body.success).to.be.a('boolean');
      expect(response.body.success).to.equal(true);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.be.a('array');
      expect(response.body.data.length).to.be.greaterThan(0);
    });
  });
  describe('GET /places/:id', () => {
    it('responds with place data and status 200', async () => {
      const placeId = 1;
      const response = await request(app).get(`/places/${placeId}`);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.have.property('success');
      expect(response.body.success).to.be.a('boolean');
      expect(response.body.success).to.equal(true);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.be.a('object');
      expect(response.body.data).to.have.property('place');
      expect(response.body.data.place).to.be.a('object');
      expect(response.body.data.place).not.to.be.empty;
      expect(response.body.data.devices).to.be.a('array');
      expect(response.body.data.devices.length).to.be.greaterThan(0);
    });
  });
});
