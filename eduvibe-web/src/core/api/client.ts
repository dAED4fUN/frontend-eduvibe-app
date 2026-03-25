import { tokenManager } from '../auth/tokenManager';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';

export class ApiError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const headers = new Headers(options.headers);
  headers.set('Content-Type', 'application/json');

  const token = tokenManager.getToken();
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  let response = await fetch(`${BASE_URL}${url}`, { ...options, headers });

  if (response.status === 401 && token) {
    // Try to refresh token
    try {
      const refreshResponse = await fetch('/api/auth/refresh', { method: 'POST' });
      if (refreshResponse.ok) {
        const { accessToken } = await refreshResponse.json();
        tokenManager.setToken(accessToken);

        // Retry original request
        headers.set('Authorization', `Bearer ${accessToken}`);
        response = await fetch(`${BASE_URL}${url}`, { ...options, headers });
      } else {
        tokenManager.clearToken();
        window.location.href = '/login';
      }
    } catch {
      tokenManager.clearToken();
      window.location.href = '/login';
    }
  }

  if (!response.ok) {
    let errorMessage = 'An unexpected error occurred';
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch {
      errorMessage = response.statusText;
    }
    throw new ApiError(response.status, errorMessage);
  }

  // Handle 204 No Content
  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export const apiClient = {
  get: (url: string, options?: RequestInit) => fetchWithAuth(url, { ...options, method: 'GET' }),
  post: (url: string, body?: unknown, options?: RequestInit) => fetchWithAuth(url, { ...options, method: 'POST', body: JSON.stringify(body) }),
  put: (url: string, body?: unknown, options?: RequestInit) => fetchWithAuth(url, { ...options, method: 'PUT', body: JSON.stringify(body) }),
  delete: (url: string, options?: RequestInit) => fetchWithAuth(url, { ...options, method: 'DELETE' }),
};
