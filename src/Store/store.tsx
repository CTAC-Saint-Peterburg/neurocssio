import create from "zustand";

const useClient = create((set) => ({
  client: {
    name: localStorage.getItem("name") || null,
    rating: localStorage.getItem("rating") || null,
    achievement: localStorage.getItem("achievement") || null,
    token: null,
    login: localStorage.getItem("login") === "true" || false,
  },
  resetClient: () =>
    set(() => ({
      client: {
        name: null,
        rating: null,
        achievement: null,
        token: null,
        login: false,
      },
    })),
  setLogin: (name: any) => {
    set((state: { client: any }) => ({
      client: {
        ...state.client,
        name: name,
        login: true,
      },
    }));
    localStorage.setItem("login", "true");
  },
}));

export default useClient;
