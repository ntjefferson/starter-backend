import {
  Model, TransactionOrKnex, Constructor, QueryBuilderType,
} from 'objection';

import handleQueryResults from '../utils/handleQueryResults';
import db from '..';

Model.knex(db);

class BaseModel extends Model {
  static query<M extends Model>(
    this: Constructor<M>,
    logResponse?: boolean,
    trxOrKnex?: TransactionOrKnex,
  ): QueryBuilderType<M> {
    const query = super.query(trxOrKnex) as QueryBuilderType<M>;
    return query.onBuildKnex((knexQueryBuilder) => {
      if (logResponse) {
        knexQueryBuilder.on('query-response', (err: Error, queryData: any) => {
          handleQueryResults(queryData);
        });
      }
    });
  }
}

export default BaseModel;
