import { expect } from 'chai';
import RedisHelper from '../../utils/RedisStore';

describe('RedisStore', () => {
  beforeEach(() => {
    RedisHelper.client.select(15);
  });

  afterEach(() => {
    RedisHelper.client.flushdb();
  });

  describe('set/get', () => {
    it('should set and retrieve the correct value based on key and field', async () => {
      const ttl = 60;

      const key1 = 'fakeKey1';
      const value1 = 'fakeValue1';

      const key2 = 'fakeKey2';
      const value2 = 'fakeValue2';

      await RedisHelper.set(key1, value1);
      await RedisHelper.set(key2, value2, ttl);

      const res1 = await RedisHelper.get(key1);
      const res2 = await RedisHelper.get(key2);

      RedisHelper.client.ttl(key1, (error, time) => {
        expect(res1).to.equal(value1);
        expect(time).to.equal(-1);
      });

      RedisHelper.client.ttl(key2, (error, time) => {
        expect(res2).to.equal(value2);
        expect(time).to.be.greaterThanOrEqual(50);
      });
    });
  });

  describe('hset/hget', () => {
    it('should set and retrieve the correct value based on key and field', async () => {
      const ttl = 60;

      const hash1 = 'fakeHash1';
      const field1 = 'fakeField1';
      const value1 = 'fakeValue1';

      const hash2 = 'fakeHash2';
      const field2 = 'fakeField2';
      const value2 = 'fakeValue2';

      await RedisHelper.hset(hash1, field1, value1);
      await RedisHelper.hset(hash2, field2, value2, ttl);

      const res1 = await RedisHelper.hget(hash1, field1);
      const res2 = await RedisHelper.hget(hash2, field2);

      RedisHelper.client.ttl(hash1, (error, time) => {
        expect(res1).to.equal(value1);
        expect(time).to.equal(-1);
      });

      RedisHelper.client.ttl(hash2, (error, time) => {
        expect(res2).to.equal(value2);
        expect(time).to.be.greaterThanOrEqual(50);
      });
    });
  });
});
