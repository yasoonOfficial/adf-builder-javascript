import * as Ajv from 'ajv';
import * as axios from 'axios';
import * as betterAjvErrors from 'better-ajv-errors';
import { Document } from '../index';

declare global {
  namespace Chai {
    interface Assertion {
      validADF(): Assertion;
    }
  }
}

// tslint:disable-next-line:max-line-length
const SCHEMA_URL = 'https://bitbucket.org/atlassian/atlaskit-mk-2/raw/master/packages/editor/editor-common/json-schema/v1/full.json';
const ajv = new Ajv({ jsonPointers: true });

type Validator = (doc: Document) => void;
let cachedValidator: Validator;

class ValidationError extends Error {
  constructor(
    message: string,
    private schema: object,
    private data: {},
    private errors: Ajv.ErrorObject[]) {
    super(message);
  }
  public toString() {
    return betterAjvErrors(this.schema, this.data, this.errors, { indent: 2 });
  }
}

export async function adfValidator() {
  const schemaValidator = await validator();
  return (chai: any, utils: any): void => {
    chai.Assertion.addMethod('validADF', function(this: any) {
      try {
        schemaValidator(this._obj);
        this.assert(true, '', 'expected document to not be valid');
      } catch (e) {
        this.assert(false, e.toString());
      }
    });
  };
}

async function validator(): Promise<Validator> {
  if (!cachedValidator) {
    const schema = await loadSchema();
    const validate = ajv.compile(schema);
    cachedValidator = (doc: Document) => {
      const data = doc.toJSON();
      if (validate(data) === false) {
        throw new ValidationError('Validation failed', schema, data, validate.errors || []);
      }
    };
  }
  return cachedValidator;
}

async function loadSchema(): Promise<object> {
  const response = await axios.default.get(SCHEMA_URL);
  return response.data;
}
