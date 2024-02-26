// frontend/src/services/api.js
import { performApiRequest } from '../utils/apiUtils';

export const getExamples = async () => {
  try {
    return await performApiRequest('examples/');
  } catch (error) {
    throw error;
  }
};

export const createExample = async (exampleData) => {
  try {
    return await performApiRequest('examples/', 'POST', exampleData);
  } catch (error) {
    throw error;
  }
};

export const updateExample = async (exampleId, exampleData) => {
  try {
    return await performApiRequest(`examples/${exampleId}/`, 'PUT', exampleData);
  } catch (error) {
    throw error;
  }
};

export const deleteExample = async (exampleId) => {
  try {
    return await performApiRequest(`examples/${exampleId}/`, 'DELETE');
  } catch (error) {
    throw error;
  }
};
