import { Dispatch, SetStateAction } from "react";

interface Props {
  filterValue: string
  setFilterValue: Dispatch<SetStateAction<string>>
}

const CountryCodeFilter = ({ filterValue, setFilterValue }: Props) => {

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterValue(value);
  }

  return (
    <div className="bg-container w-full p-4 rounded-full">
      <input 
      type="text" 
      value={filterValue} 
      onChange={handleOnChange} 
      placeholder="Filter by countrycode..."
      className="w-full bg-stone-900 rounded-full px-4 py-2 uppercase placeholder:normal-case text-indigo-300 font-bold placeholder:text-indigo-300
      focus-custom" 
      />
    </div>
  )
}

export default CountryCodeFilter;