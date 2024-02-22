import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
interface Props {
  data: {
    date: string;
    description: string;
    category: string;
    amount: number | undefined | "";
  }[];
  selectedDate: Date | undefined;
}
const DataTable = ({ data, selectedDate }: Props) => {
  return (
    <Table className="rounded-xl  bg-white">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      {data
        .filter((d) => {
          return d.date === selectedDate?.toDateString();
        })
        .filter((d) => {
          return d.amount !== "";
        }).length > 0 && (
        <TableBody>
          {data
            .filter((d) => {
              return d.date === selectedDate?.toDateString();
            })
            .filter((d) => {
              return d.amount !== "";
            })
            .map((d) => (
              <TableRow>
                <TableCell className="font-medium">{d.date}</TableCell>
                <TableCell>{d.description}</TableCell>
                <TableCell>{d.category}</TableCell>
                <TableCell className="text-right">{"$" + d.amount}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      )}
      {data
        .filter((d) => {
          return d.date === selectedDate?.toDateString();
        })
        .filter((d) => {
          return d.amount !== "";
        }).length === 0 && (
        <TableBody>
          <TableRow>
            <TableCell>
              No Data is saved on {selectedDate?.toDateString()}.
            </TableCell>
          </TableRow>
        </TableBody>
      )}
    </Table>
  );
};

export default DataTable;
