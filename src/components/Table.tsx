import { useMemo } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Country } from '../types/countries';

const columnHelper = createColumnHelper<Country>()
const columns = [
  columnHelper.accessor('name', {
    cell: info => info.getValue(),
    header: () => <span>Name</span>,
  }),
  columnHelper.accessor('code', {
    id: 'code',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Country code</span>,
    filterFn: 'includesString'
  }),
]

interface Props {
   filterValue: string
   countries: Country[]
}

const Table = ({ filterValue, countries }: Props) => {
  const data = useMemo(() => [...countries], [countries]);
  const filteredData = useMemo(() => {
    return data.filter((country) =>
      country.code.toLowerCase().includes(filterValue.toLowerCase())
    );
  }, [data, filterValue]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return(
    <div className="p-8 rounded-xl bg-container ">
      <table className='border w-full'>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className='border px-8 text-left w-1/2 py-1'>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className='px-4 text-left py-0.5'>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
    </table>
  </div>
  )
}

export default Table;