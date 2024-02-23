import { TableCell, TableRow } from "@/components/ui/table";
import { Checkbox } from "./ui/checkbox";
import { useEffect, useState } from "react";
interface Props {
  id: Date;
  date: string;
  description: string;
  category: string;
  amount: number | undefined | "";
  selectedData: Date[];
  setSelectedData: React.Dispatch<React.SetStateAction<Date[]>>;
}
const TableRows = ({
  id,
  date,
  description,
  category,
  amount,
  selectedData,
  setSelectedData,
}: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const checkData = () => {
    if (isChecked) {
      setSelectedData([...selectedData, id]);
    } else {
      setSelectedData(
        selectedData.filter((d) => {
          return d !== id;
        })
      );
    }
  };
  useEffect(() => {
    checkData();
  }, [isChecked]);
  return (
    <TableRow>
      <TableCell className="flex items-center">
        <Checkbox
          className="rounded"
          checked={isChecked}
          onCheckedChange={() => setIsChecked(!isChecked)}
        />
      </TableCell>
      <TableCell className="font-medium">{date}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{category}</TableCell>
      <TableCell className="text-right">{"$" + amount}</TableCell>
    </TableRow>
  );
};

export default TableRows;
