import logger from '../../logger';

const handleQueryResults = (obj: any) => {
  let results = {};
  const modifiedObj = obj.response;
  results = {
    __knexUid: obj.__knexUid,
    method: obj.method,
    options: obj.options,
    timeout: obj.timeout,
    cancelOnTimeout: obj.cancelOnTimeout,
    bindings: obj.bindings,
    __knexQueryUid: obj.__knexQueryUid,
    sql: obj.sql,
    response: {
      command: modifiedObj.command,
      rowCount: modifiedObj.rowCount,
    },
  };

  logger.info('DB Success', results);
};

export default handleQueryResults;
