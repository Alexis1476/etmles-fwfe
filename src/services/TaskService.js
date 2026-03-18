import axios from 'axios';

class TaskService {
  apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })

  fetchTasks = async () => {
    try {
      const response = await this.apiClient.get('')
      return response.data
    } catch (error) {
      throw new Error(`Erreur HTTP ${error.response.status}: ${error.response.data}`)
    }
  }

  deleteTask = async (id) => {
    try {
      await this.apiClient.delete(`/${id}`);
      return true; // Succès simulé
    } catch (error) {
      throw new Error(`Erreur HTTP ${error.response.status}: ${error.response.data}`)
    }
  }

  createTask = async (task) => {
    try {
      const response = await this.apiClient.post('', task);
      return response.data;
    } catch (error) {
      throw new Error(`Erreur HTTP ${error.response.status}: ${error.response.data}`);
    }
  }
  updateTask = async (id, task) => {
    try {
      const response = await this.apiClient.put(`/${id}`, task);
      return response.data;
    } catch (error) {
      throw new Error(`Erreur HTTP ${error.response.status}: ${error.response.data}`);
    }
  }
}

export default new TaskService()
