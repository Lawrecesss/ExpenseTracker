import { Calendar } from "@/components/ui/calendar";

interface Props {
  date: Date | undefined;
  onSelect: React.Dispatch<React.SetStateAction<Date | undefined>>;
}
export default function CalendarDemo({ date, onSelect }: Props) {
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={(v) => onSelect(v)}
      className="rounded-xl border bg-slate-50 border-black "
      classNames={{
        day_selected: "bg-blue-300 rounded-xl",
        head: "text-blue-500",
        button: "hover:bg-blue-500 rounded-xl",
      }}
      disableNavigation
    />
  );
}
