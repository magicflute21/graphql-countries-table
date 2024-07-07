import { useState } from "react";
import useCountriesQuery from "../hooks/useCountriesQuery";
import CountryCodeFilter from "./CountryCodeFilter";
import Table from "./Table";

const CountriesTable = () => {
  const { isLoading, data } = useCountriesQuery();
  const [filterValue, setFilterValue] = useState('');

  return (
    <div className="flex flex-col gap-8 min-w-[700px]">
      <CountryCodeFilter {...{ filterValue, setFilterValue }} />
      {isLoading || !data ? (
        <div>loading...</div>
      ): (
        <Table filterValue={filterValue} countries={data?.countries} />
      )}
    </div>
  )
}

export default CountriesTable;