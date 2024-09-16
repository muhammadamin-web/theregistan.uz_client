import { useEffect, useState } from "react";
import axios from "axios";
import useCategoryStore from "../store/category.store";

export const useGetCategories = () => {
  const { categories, setCategory } = useCategoryStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/category/get");

        setCategory(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    !categories && fetchData();
  }, [categories, setCategory]);

  return { categories, categoryLoading: loading, categoryError: error };
};
