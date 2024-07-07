import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { API_URL, fetchData } from "../api/api";
import { QUERY } from "../util/constants";
import { CountriesResponse } from "../types/countries";

const useCountriesQuery = () => {
  const fetchCountries = async (): Promise<CountriesResponse> => {
    const query = `
      query {
        countries {
          code
          name
        }
      }
    `;
    const data = await fetchData<CountriesResponse>(API_URL, query);
    return data || { countries: [] };
  }

  const countriesQuery: UseQueryResult<CountriesResponse, Error> = useQuery({
    queryKey: [QUERY.countries],
    queryFn: fetchCountries,
    staleTime: Infinity,
    retry: 1,
  });

  return countriesQuery;
}

export default useCountriesQuery;