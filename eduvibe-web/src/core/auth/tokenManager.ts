let inMemoryToken: string | null = null;

export const tokenManager = {
  getToken: () => inMemoryToken,
  setToken: (token: string) => {
    inMemoryToken = token;
  },
  clearToken: () => {
    inMemoryToken = null;
  },
};
