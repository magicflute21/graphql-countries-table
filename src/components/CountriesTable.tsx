import useCountriesQuery from "../hooks/useCountriesQuery";
import Table from "./Table";

const CountriesTable = () => {
  useCountriesQuery();
  return (
    <Table />
  )
}

export default CountriesTable;