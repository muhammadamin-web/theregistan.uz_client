import { create } from "zustand";
import { CategoryProps } from "./types";

interface CategoryStoreProps {
  categories?: CategoryProps[];
  setCategory: (data: CategoryProps[]) => void;
}

const useCategoryStore = create<CategoryStoreProps>((set) => ({
  categories: undefined,
  setCategory: (data: CategoryProps[]) => {
    set({ categories: data });
  },
}));

export default useCategoryStore;
