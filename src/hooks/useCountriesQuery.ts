import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchData } from "../api/api";
import { QUERY } from "../util/constants";
import { CountriesResponse } from "../types/countries";

const useCountriesQuery = () => {
  const fetchCountries = async (): Promise<CountriesResponse> => {
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
    const data = await fetchData<CountriesResponse>(url, query);
    return data || { countries: [] };
  }

  const countriesQuery: UseQueryResult<CountriesResponse, Error> = useQuery({
    queryKey: [QUERY.countries],
    queryFn: fetchCountries,
    staleTime: Infinity,
    retry: 1,
  });

  return { 
    countries: countriesQuery.data?.countries || [],
    isLoading: countriesQuery.isLoading,
  }
}

export default useCountriesQuery;