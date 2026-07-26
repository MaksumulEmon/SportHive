import api from './axios';

export interface Purchase {
  _id: string;
  userId: string;
  eventId: string;
  amount: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export const purchasesApi = {
  purchaseEvent: async (eventId: string) => {
    const response = await api.post('/api/purchases', { eventId });
    return response.data;
  },
  getUserPurchases: async () => {
    const response = await api.get('/api/purchases/my');
    return response.data;
  },
  checkPurchase: async (eventId: string) => {
    const response = await api.get(`/api/purchases/check/${eventId}`);
    return response.data;
  },
  cancelPurchase: async (id: string) => {
    const response = await api.delete(`/api/purchases/${id}`);
    return response.data;
  },
};