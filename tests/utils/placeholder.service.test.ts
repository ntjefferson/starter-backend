import { expect } from 'chai';
import { squareId } from '../../api/services/placeholder.service';

describe('placeholder.service', () => {
  describe('squareId', () => {
    it('should square the number', () => {
      const res = squareId(3);
      expect(res).to.equal(9);
    });
  });
});
