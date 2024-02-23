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
      <TableCell className="font-medium w-[150px]">{date}</TableCell>
      <TableCell className="w-[200px]">{description}</TableCell>
      <TableCell className="w-[200px] pl-9">{category}</TableCell>
      <TableCell className="text-right">{"$" + amount + ".00"}</TableCell>
    </TableRow>
  );
};

export default TableRows;
