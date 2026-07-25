import api from './axios';

export interface Event {
  _id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  fee: number;
  maxParticipants: number;
  organizer: string;
  organizerEmail: string;
  contactNumber: string;
  imageUrl: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface EventsResponse {
  success: boolean;
  data: Event[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface EventFilters {
  search?: string;
  category?: string;
  location?: string;
  sort?: string;
  page?: number;
  limit?: number;
}

export const eventsApi = {
  getEvents: async (filters?: EventFilters): Promise<EventsResponse> => {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== '') {
          params.append(key, String(value));
        }
      });
    }
    const response = await api.get<EventsResponse>(`/api/events?${params.toString()}`);
    return response.data;
  },

  getEvent: async (id: string): Promise<{ success: boolean; data: Event }> => {
    const response = await api.get<{ success: boolean; data: Event }>(`/api/events/${id}`);
    return response.data;
  },

  createEvent: async (
    eventData: Omit<Event, '_id' | 'userId' | 'createdAt' | 'updatedAt'>
  ): Promise<{ success: boolean; data: Event }> => {
    const response = await api.post<{ success: boolean; data: Event }>('/api/events', eventData);
    return response.data;
  },

  updateEvent: async (
    id: string,
    eventData: Partial<Event>
  ): Promise<{ success: boolean; data: Event }> => {
    const response = await api.put<{ success: boolean; data: Event }>(
      `/api/events/${id}`,
      eventData
    );
    return response.data;
  },

  deleteEvent: async (id: string): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete<{ success: boolean; message: string }>(`/api/events/${id}`);
    return response.data;
  },

  getUserEvents: async (): Promise<{ success: boolean; data: Event[] }> => {
    const response = await api.get<{ success: boolean; data: Event[] }>('/api/events/user/me');
    return response.data;
  },
};
