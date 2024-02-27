import { performApiRequest } from "../utils/apiUtils";

export const getUsers = async () => {
  try {
    return await performApiRequest("/users");
  } catch (error) {
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    return await performApiRequest("/users", "POST", userData);
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userId, userData) => {
  try {
    return await performApiRequest(`/users/${userId}`, "PUT", userData);
  } catch (error) {
    throw error;
  }
};

export const uploadUsers = async (usersData) => {
  try {
    return await performApiRequest("/users/upload", "POST", usersData);
  } catch (error) {
    throw error;
  }
};
