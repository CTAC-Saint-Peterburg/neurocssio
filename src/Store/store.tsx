import { create } from "zustand";

const useClient = create((set) => ({
  client: {
    name: localStorage.getItem("name") || null,
    rating: localStorage.getItem("rating") || null,
    achievement: localStorage.getItem("achievement") || null,
    token: null,
    login: localStorage.getItem("login") === "true" || null,
  },
  resetClient: () =>
    set((state: any) => {
      state.client.name = null;
      state.client.rating = null;
      state.client.achievement = null;
      state.client.token = null;
      state.client.login = null;
    }),
  login: (login: any) => {
    set((state: any) => {
      state.client.name = login;
    });
  },
}));

export default useClient;
