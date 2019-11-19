import { ApiEndpointClient } from './basicApi';

/**
 * @classdesc A books API endpoint client.
 */
export class BookApi extends ApiEndpointClient {
  /**
   * Constructor initializing the endpoint URL for books.
   */
  constructor() {
    super(`${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/books`);
  }
}
