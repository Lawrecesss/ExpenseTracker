import React, { SetStateAction } from "react";

interface Props {
  amount: number | undefined | "";
  description: string | undefined;
  onAmountChange: React.Dispatch<SetStateAction<number | undefined | "">>;
  onDescriptionChange: React.Dispatch<SetStateAction<string>>;
}
const Input = ({
  amount,
  description,
  onAmountChange,
  onDescriptionChange,
}: Props) => {
  return (
    <>
      <input
        id="amount"
        className="h-30 w-[300px] p-3 border rounded-xl border-black mb-1 bg-white"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(v) => onAmountChange(parseInt(v.target.value))}
      />
      <textarea
        id="description"
        className=" w-[300px] p-3 border rounded-xl border-black mb-1 bg-white"
        placeholder="Description"
        value={description}
        onChange={(v) => onDescriptionChange(v.target.value)}
      />
    </>
  );
};

export default Input;
