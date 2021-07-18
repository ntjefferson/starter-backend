import BadRequestError from '../errors/BadRequestError';

/**
 * Checks if value is undefined, null, or empty
 */
const isNotEmpty = (value: any) => (
  value !== '' && value !== null && value !== undefined
);

/**
 * Checks values (in an object) to see if they are empty.
 * ```
 * checkForEmptyValues({
 *     field1,
 *     field2
 * })
 * ```
 */
const checkForEmptyValues = (checkValuesObj: { [key: string]: any }) => {
  const missingFields: string[] = [];
  let noneEmpty = true;
  Object.entries(checkValuesObj).forEach((value) => {
    const missingField = isNotEmpty(value[1]);
    if (!missingField) {
      missingFields.push(value[0]);
      noneEmpty = false;
    }
  });
  if (!noneEmpty) {
    throw new BadRequestError('Missing required field(s).', {
      missing: missingFields,
    });
  }
};

/**
 * Checks the values in one object (dependent) to see if they are empty.
 * If the checkedValue argument is empty, and the dependent is populated,
 * this throws an error
 *
 * ```
 * checkDependentValues({ ownerName }, { ownerAddress, ownerPhoneNumber })
 * ```
 */
const checkDependentValues = (
  checkedValue: { [key: string]: any },
  dependentValues: { [key: string]: any },
) => {
  const checkedKeyValue = Object.entries(checkedValue)[0];
  Object.keys(dependentValues).forEach((key, index) => {
    const depKeyValue = Object.entries(dependentValues)[index];
    if (checkedKeyValue[1] && !isNotEmpty(depKeyValue[1])) {
      throw new Error(`Field "${depKeyValue[0]}" is required with "${checkedKeyValue[0]}".`);
    }
  });
};

export {
  checkForEmptyValues,
  checkDependentValues,
};
