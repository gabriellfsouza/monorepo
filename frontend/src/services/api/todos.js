/** @typedef {import('axios').AxiosResponse} AxiosResponse */

import api from '.';

const basePATH = 'v1/api/todos';

/**
 * Export functions to abstract all back-end endpoints.
 * This approach can make toward an easy Redux implementation for example.
 */

/**
 * Returns all to-dos
 * @returns {Promise<AxiosResponse>}
 */
export async function listTodos() {
  return api.get(basePATH);
}

/**
 * Returns a single to-do task
 * @param {String} _id
 * @returns {Promise}
 */
export async function getTodo(_id) {
  return api.get(`${basePATH}/${_id}`);
}

/**
 * Send a new task to back-end and returns that new one as a result.
 * @param {{text:String,checked:Boolean}} todo
 * @returns {Promise<AxiosResponse>}
 */
export async function addTodo({ text, checked }) {
  return api.post(basePATH, { checked, text });
}

/**
 * Update a previously created to-do task
 * @param {String} _id
 * @param {{text:String,checked:Boolean}} todo
 * @returns {Promise<AxiosResponse>}
 */
export async function updateTodo(_id, { text, checked }) {
  return api.put(`${basePATH}/${_id}`, { text, checked });
}
/**
 * Remove a to-do task
 * @param {String} _id
 * @returns {Promise<AxiosResponse>}
 */
export async function removeTodo(_id) {
  return api.delete(`${basePATH}/${_id}`);
}
