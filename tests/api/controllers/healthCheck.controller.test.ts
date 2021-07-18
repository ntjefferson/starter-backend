import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../server';

const { expect } = chai;

chai.use(chaiHttp);

describe('healthCheck.controller', () => {
  describe('GET /v1/healthCheck', () => {
    it('should return a 200 status', () => {
      chai.request(server)
        .get('/v1/healthCheck')
        .end((err: any, res: any) => {
          expect(res).to.have.status(200);
        });
    });
  });
});
