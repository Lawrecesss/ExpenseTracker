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
interface Props {
  selectedData: Date[];
  setSelectedData: React.Dispatch<React.SetStateAction<Date[]>>;
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
}: Props) => {
  const dataOnSelectedDay = data
    .filter((d) => {
      return d.date === selectedDate?.toDateString();
    })
    .filter((d) => {
      return d.amount !== "";
    });
  const total = dataOnSelectedDay.reduce(
    (acc, value) => (value.amount ? acc + value.amount : 0),
    0
  );
  return (
    <Table className="rounded-xl  bg-white">
      <TableHeader>
        <TableRow>
          <TableHead className="flex items-center"></TableHead>
          <TableHead className="w-[200px]">Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
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
  );
};

export default DataTable;
