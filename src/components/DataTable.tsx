import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import TableRows from "./TableRows";
import Category from "./Category";
interface Props {
  selectedData: Date[];
  setSelectedData: React.Dispatch<React.SetStateAction<Date[]>>;
  handleDelete: () => void;
  data: {
    id: Date;
    date: string;
    description: string;
    category: string;
    amount: number | undefined | "";
  }[];
  selectedDate: Date | undefined;
}
const DataTable = ({
  data,
  selectedDate,
  selectedData,
  setSelectedData,
  handleDelete,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const dataOnSelectedDay = data
    .filter((d) => {
      return d.date === selectedDate?.toDateString();
    })
    .filter((d) => {
      return d.amount !== "";
    })
    .filter((d) => {
      return value === "" ? d.category : d.category === value;
    });
  const total = dataOnSelectedDay
    .reduce((acc, value) => (value.amount ? acc + value.amount : 0), 0)
    .toFixed(2);
  return (
    <>
      <Table className="rounded-xl  bg-white">
        <TableHeader>
          <TableRow>
            <TableHead className="w-10"></TableHead>
            <TableHead className="w-[150px]">Date</TableHead>
            <TableHead className="w-[200px]">Description</TableHead>
            <TableHead className="w-[200px]">
              {
                <Category
                  className=" bg-white hover:bg-white border-white"
                  defaultLabel="Categories"
                  open={open}
                  setOpen={setOpen}
                  value={value}
                  setValue={setValue}
                />
              }
            </TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        {dataOnSelectedDay.length > 0 && (
          <>
            <TableBody>
              {dataOnSelectedDay.map((d) => (
                <TableRows
                  key={d.id.toString()}
                  id={d.id}
                  date={d.date}
                  description={d.description}
                  category={d.category}
                  amount={d.amount}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                />
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell></TableCell>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">{"$" + total}</TableCell>
              </TableRow>
            </TableFooter>
          </>
        )}
        {dataOnSelectedDay.length === 0 && (
          <TableBody>
            <TableRow>
              <TableCell colSpan={5}>
                No Data is saved on {selectedDate?.toDateString()}.
              </TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
      {dataOnSelectedDay.length > 0 && (
        <button
          className="bg-white h-10 w-20 mt-5 rounded-xl border border-black"
          onClick={handleDelete}
        >
          Delete
        </button>
      )}
    </>
  );
};

export default DataTable;
