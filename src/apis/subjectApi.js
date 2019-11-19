import { ApiEndpointClient } from './basicApi';

/**
 * @classdesc A subjects API endpoint client.
 */
export class SubjectApi extends ApiEndpointClient {
  /**
   * Constructor initializing the endpoint URL for subjects.
   */
  constructor() {
    super(`${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/subjects`);
  }

  /**
   * NOT SUPPORTED!
   *
   * @throws {Error} Because function is not supported.
   * @override
   */
  get() { // eslint-disable-line class-methods-use-this
    throw new Error('GET (single subject) method not supported on subjects!');
  }

  /**
   * NOT SUPPORTED!
   *
   * @throws {Error} Because function is not supported.
   * @override
   */
  post() { // eslint-disable-line class-methods-use-this
    throw new Error('POST method not supported on subjects!');
  }

  /**
   * NOT SUPPORTED!
   *
   * @throws {Error} Because function is not supported.
   * @override
   */
  put() { // eslint-disable-line class-methods-use-this
    throw new Error('PUT method not supported on subjects!');
  }

  /**
   * NOT SUPPORTED!
   *
   * @throws {Error} Because function is not supported.
   * @override
   */
  patch() { // eslint-disable-line class-methods-use-this
    throw new Error('PATCH method not supported on subjects!');
  }

  /**
   * NOT SUPPORTED!
   *
   * @throws {Error} Because function is not supported.
   * @override
   */
  delete() { // eslint-disable-line class-methods-use-this
    throw new Error('DELETE method not supported on subjects!');
  }
}
