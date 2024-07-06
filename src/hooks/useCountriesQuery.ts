import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api/api";
import { QUERY } from "../util/constants";

const useCountriesQuery = () => {
  const fetchCountries = async () => {
    const url = 'https://countries.trevorblades.com/';
    const query = `
      query {
        countries {
          code
          name
          capital
        }
      }
    `;
    const data = await fetchData(url, query);
    return data || [];
  }

  const countriesQuery = useQuery({
    queryKey: [QUERY.countries],
    queryFn: fetchCountries,
    staleTime: Infinity,
    retry: 1,
  });

  return { 
    countries: countriesQuery.data,
  }
}

export default useCountriesQuery;