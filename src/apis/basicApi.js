/**
 * @classdesc A basic API endpoint client.
 */
export class ApiEndpointClient {
  /**
   * The basic API endpoint URL.
   * @type {string}
   * @private
   */
  endpointUrl;

  /**
   * Constructor initializing the endpoint URL.
   *
   * @param {string} endpointUrl - The basic API endpoint URL.
   */
  constructor(endpointUrl) {
    this.endpointUrl = endpointUrl;
  }

  /**
   * TODO
   *
   * @param {Object} response - TODO
   * @throws {Error} If response is not OK.
   * @private
   */
  async checkOk(response) { // eslint-disable-line class-methods-use-this
    if (!response.ok) {
      const err = new Error(`received ${response.status}`);
      console.error(err); // TODO remove?
      err.response = await response.json();
      throw err;
    }
  }

  /**
   * Creates an object.
   *
   * @param {Object} object - The object to create.
   * @returns {number} The ID of the created object.
   */
  async post(object) {
    const response = await fetch(`${this.endpointUrl}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(object, null, 2),
    });
    await this.checkOk(response);
    const body = await response.json();
    return body.id;
  }

  /**
   * Gets an object by its ID.
   *
   * @param {number} id - The object ID.
   * @returns {Object} The wanted object.
   */
  async get(id) {
    const response = await fetch(`${this.endpointUrl}/${id}`);
    await this.checkOk(response);
    const body = await response.json();
    return body;
  }

  /**
   * Get all objects.
   *
   * @returns {Object[]} All objects.
   */
  async getAll() {
    const response = await fetch(this.endpointUrl);
    await this.checkOk(response);
    const body = await response.json();
    return body;
  }

  /**
   * Updates an object.
   *
   * @param {number} id     - The ID of the object.
   * @param {Object} object - The updated object.
   * @returns {number} id   - The ID of the object.
   */
  async put(id, object) {
    const response = await fetch(`${this.endpointUrl}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(object, null, 2),
    });
    await this.checkOk(response);
    return id;
  }

  /**
   * Patches an object of `id` with `patchObject`.
   *
   * @param {number} id          - The ID of the object to patch with `patchObject`.
   * @param {Object} patchObject - The patch object.
   * @returns {Object}           - The patched object.
   */
  async patch(id, patchObject) {
    const response = await fetch(`${this.endpointUrl}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify(patchObject, null, 2),
    });
    await this.checkOk(response);
    const patchedBody = await response.json();
    return patchedBody;
  }

  /**
   * Deletes an object by its ID.
   *
   * @param {number} id - The ID of the object.
   * @returns {number} id - The ID of the object.
   */
  async delete(id) {
    const response = await fetch(`${this.endpointUrl}/${id}`, { method: 'DELETE' });
    await this.checkOk(response);
    return id;
  }
}
