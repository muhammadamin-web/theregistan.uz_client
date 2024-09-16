import { create } from "zustand";
import { TData, TOrganization, TToken, TUser } from "./types";

interface AuthStore {
  user: TUser | null;
  isAuthenticated: boolean;
  token: TToken;
  organization: TOrganization | null;
  setUser: (data: TData) => void;
  setOrganization: (data: TOrganization) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  token: localStorage.getItem("token") as TToken | undefined,
  organization: null,
  setUser: (data: TData) => {
    data?.token && localStorage.setItem("token", data.token as string);

    set({
      user: data.user,
      isAuthenticated: true,
      ...(data?.token && { token: data.token }),
      ...(data?.organization && { organization: data.organization }),
    });
  },

  setOrganization: (data: TOrganization) => {
    set({ organization: data });
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: undefined, isAuthenticated: false, token: undefined });
  },
}));

export default useAuthStore;
