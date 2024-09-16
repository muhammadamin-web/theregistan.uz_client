import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Localdagi API uchun URL ni yangilang
const BASE_URL = "https://api.theregistan.uz/v1/api"; // 5000 portda ishlayotgan server uchun misol keltirilgan

const useFetch = (url: string) => {
  return useQuery({
    queryKey: [BASE_URL + url],
    queryFn: () => axios.get(BASE_URL + url).then((res) => res.data),
  });
};

export default useFetch;
