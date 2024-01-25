import {
  afterEach, beforeEach, describe, expect, jest,
} from '@jest/globals';
import supertest from 'supertest';
import app from '../../app.js';

let server;
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('GET in editoras', () => {
  it('should return an editoras list', async () => {
    const returned = await supertest(app)
      .get('/editoras')
      .set('Accept', 'application.json')
      .expect('content-type', /json/)
      .expect(200);
    expect(returned.body[0].email).toEqual('e@e.com');
  });
});

let idResponse;
describe('POST in editoras', () => {
  it('should add a new editora', async () => {
    const returned = await supertest(app)
      .post('/editoras')
      .send({
        nome: 'CDC',
        cidade: 'Salvador',
        email: 'c@c.com',
      })
      .expect(201);

    idResponse = returned.body.content.id;
  });

  it('should not add an editora if body is empty', async () => {
    await supertest(app).post('/editoras').send({}).expect(400);
  });
});

describe('GET from editoras/id', () => {
  it('should return an editora by id', async () => {
    await supertest(app).get(`/editoras/${idResponse}`).expect(200);
  });
});

describe('PUT from editoras/id', () => {
  it.each([
    ['nome', { nome: 'Code House' }],
    ['cidade', { cidade: 'Rio' }],
    ['email', { email: 'CD@CD.com' }],
  ])('should update field %s in an editora by id', async (keys, params) => {
    const request = { supertest };
    const spy = jest.spyOn(request, 'supertest');

    await request.supertest(app)
      .put(`/editoras/${idResponse}`)
      .send(params)
      .expect(204);

    expect(spy).toHaveBeenCalled();
  });
});

describe('DELETE from editoras/id', () => {
  it('should delete an editora by id', async () => {
    await supertest(app).delete(`/editoras/${idResponse}`).expect(200);
  });
});
