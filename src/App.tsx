import { useState } from "react";
import CalendarDemo from "./components/Calander";
import Category from "./components/Category";
import Input from "./components/Input";
import { ScrollArea } from "@/components/ui/scroll-area";
import DataTable from "./components/DataTable";

const App = () => {
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(today);
  const [amount, setAmount] = useState<number | undefined | "">("");
  const [description, setDescription] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState<
    {
      id: Date;
      date: string;
      description: string;
      category: string;
      amount: number | "" | undefined;
    }[]
  >([
    {
      id: today,
      date: today.toDateString(),
      description: description,
      category: value,
      amount: amount,
    },
  ]);
  const [selectedData, setSelectedData] = useState<Date[]>([]);

  const handleClear = () => {
    setAmount(""), setDescription(""), setOpen(false), setValue("");
  };
  const handleSave = () => {
    if (amount !== "") {
      setData([
        ...data,
        {
          id: today,
          date: today.toDateString(),
          description: description,
          category: value,
          amount: amount,
        },
      ]);
      handleClear();
    }
  };
  const handleDelete = () => {
    setData(
      data.filter((d) => {
        return !selectedData.includes(d.id);
      })
    );
  };
  return (
    <ScrollArea>
      <div className="flex justify-center p-10 bg-blue-500 h-screen">
        <div className="flex  px-10  w-[800px] rounded-xl bg-blue-300 h-auto">
          <div className="flex flex-col items-center pb-5">
            <h1 className="font-bold text-xl m-10">Expense Tracker</h1>
            <div className="flex flex-row px-10 pb-5">
              <div>
                <Input
                  amount={amount}
                  onAmountChange={setAmount}
                  description={description}
                  onDescriptionChange={setDescription}
                />
                <Category
                  open={open}
                  setOpen={setOpen}
                  value={value}
                  setValue={setValue}
                />
                <div className="mt-[100px]">
                  <button
                    className="w-[140px] h-30 p-1  rounded-xl border border-black mt-5 bg-white"
                    type="reset"
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                  <button
                    className="w-[140px] h-30 p-1 ml-5 rounded-xl border border-black mt-5 bg-white"
                    type="submit"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </div>
              </div>
              <CalendarDemo date={selectedDay} onSelect={setSelectedDay} />
            </div>
            <DataTable
              data={data}
              selectedDate={selectedDay}
              selectedData={selectedData}
              setSelectedData={setSelectedData}
            />
            <button
              className="bg-white h-10 w-20 mt-5 rounded-xl border border-black"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default App;
