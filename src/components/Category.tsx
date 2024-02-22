import { cn } from "@/lib/utils";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
const categories = [
  {
    value: "housing",
    label: "Housing",
  },
  {
    value: "food",
    label: "Food",
  },
  {
    value: "transportation",
    label: "Transportation",
  },
  {
    value: "health",
    label: "Health",
  },
  {
    value: "shopping",
    label: "Shopping",
  },
];
const Category = ({ open, setOpen, value, setValue }: Props) => {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between h-30 rounded-xl bg-white hover:bg-slate-200"
        >
          {value
            ? categories.find((category) => category.value === value)?.label
            : "Select Category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0 rounded-xl bg-slate-50">
        <Command>
          <CommandInput placeholder="Search Category..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {categories.map((category) => (
              <CommandItem
                key={category.value}
                value={category.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === category.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {category.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Category;
