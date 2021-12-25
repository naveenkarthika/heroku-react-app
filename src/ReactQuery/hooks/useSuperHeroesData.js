import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
    return axios.get("http://localhost:3001/superheroes");
};

export const useSuperHeroesData = (onSuccess, onError, dataTransformation) => {
    return useQuery("super-heroes",
        fetchSuperHeros,
        {
          // cacheTime: 5000, || 5mins
          // staleTime: 30000, || 0
          // refetchOnMount: true, || 'alway'
          // refetchOnWindowFocus: true,
          // refetchInterval: 3000,
          // refetchIntervalInBackground: true
          // enabled: false,
          onSuccess,
          onError,
          // select: dataTransformation,
        }
      );
};