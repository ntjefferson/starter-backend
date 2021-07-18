import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../server';

const { expect } = chai;

chai.use(chaiHttp);

describe('placeholder.controller', () => {
  describe('GET /v1/square/:id', () => {
    it('should return a 200 status with the number squared', () => {
      chai.request(server)
        .get('/v1/square/3')
        .end((err: any, res: any) => {
          expect(res).to.have.status(200);
        });
    });

    it('should return a 400 error with a non-number id', () => {
      chai.request(server)
        .get('/v1/square/abc')
        .end((err: any, res: { body: { message: any; }; }) => {
          expect(res).to.have.status(400);
          expect(res).to.have.property('body');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Field "id" must be a number.');
        });
    });
  });
});
