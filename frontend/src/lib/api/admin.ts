import api from './axios';

export const adminApi = {
  getUsers: async () => {
    const response = await api.get('/api/admin/users');
    return response.data;
  },
  deleteUser: async (id: string) => {
    const response = await api.delete(`/api/admin/users/${id}`);
    return response.data;
  },
  getEvents: async () => {
    const response = await api.get('/api/admin/events');
    return response.data;
  },
  getStats: async () => {
    const response = await api.get('/api/admin/stats');
    return response.data;
  },
};