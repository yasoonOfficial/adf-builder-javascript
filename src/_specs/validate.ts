import * as Ajv from 'ajv';
import * as axios from 'axios';
import { Document } from '../index';

// tslint:disable-next-line:max-line-length
const SCHEMA_URL = 'https://bitbucket.org/atlassian/atlaskit/raw/master/packages/editor-core/dist/json-schema/v1/full.json';
const ajv = new Ajv();

export type Validator = (doc: Document) => void;
let cachedValidator: Validator;

export class ValidationError extends Error {
  constructor(message: string, private errors: Ajv.ErrorObject[] | undefined) {
    super(message);
  }
  public toString() {
    return JSON.stringify(this.errors, null, 2);
  }
}

export async function validator(): Promise<Validator> {
  if (!cachedValidator) {
    const schema = await loadSchema();
    const validate = ajv.compile(schema);
    cachedValidator = (doc: Document) => {
      if (validate(doc.toJSON()) === false) {
        throw new ValidationError('Validation failed', validate.errors);
      }
    };
  }
  return cachedValidator;
}

async function loadSchema(): Promise<object> {
  const response = await axios.default.get(SCHEMA_URL);
  return response.data;
}
