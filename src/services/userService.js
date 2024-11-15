import axios from "axios";

const BASE_URL = "http://localhost:3001/api/users";

export const getAllUsers = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (userData, token) => {
  try {
    const formData = new FormData();
    formData.append("username", userData.username);
    formData.append("userId", userData.userId);
    formData.append("cognitoId", userData.cognitoId);

    const response = await axios.post(BASE_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, userData, token) => {
  try {
    const formData = new FormData();
    formData.append("username", userData.username);
    formData.append("userId", userData.userId);

    const response = await axios.put(`${BASE_URL}/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id, token) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw error;
  }
};