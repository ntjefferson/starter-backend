import * as redis from 'redis';
import util from 'util';

import type { RedisClient } from 'redis';

import { REDIS_PORT, REDIS_URL } from '../config';

class RedisHelper {
    public client: RedisClient
    private expireAsync: Function
    private getAsync: Function
    private setAsync: Function
    private hgetAsync: Function
    private hsetAsync: Function

    constructor() {
      this.client = redis.createClient(Number(REDIS_PORT), REDIS_URL);
      this.expireAsync = util.promisify(this.client.expire).bind(this.client);
      this.getAsync = util.promisify(this.client.get).bind(this.client);
      this.setAsync = util.promisify(this.client.set).bind(this.client);
      this.hgetAsync = util.promisify(this.client.hget).bind(this.client);
      this.hsetAsync = util.promisify(this.client.hset).bind(this.client);
    }

    /**
     * Sets a key (hash) in Redis, stores a single value
     */
    public async set(key: string, field: string, expire?: number): Promise<void> {
      if (expire) return this.setAsync(key, field, 'EX', expire);
      return this.setAsync(key, field);
    }

    /**
     * Retrieves a value from a key (hash)
     */
    public async get(key: string): Promise<any> {
      return this.getAsync(key);
    }

    /**
     * Sets a key (hash) in Redis, stored in field/value pair
     */
    public async hset(key: string, field: string, value: any, expire?: number): Promise<void> {
      await this.hsetAsync(key, field, value);
      if (expire) await this.expireAsync(key, expire);
    }

    /**
     * Retrieves a value from a key (hash) and field
     */
    public async hget(key: string, field: string): Promise<any> {
      return this.hgetAsync(key, field);
    }
}

export default new RedisHelper();
