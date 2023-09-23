import { ChangeEvent, useState } from "react";
import Button from "../children/Button";

interface Props {}

export const States: React.FC<Props> = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    if (text === "digite algo bacaninha") {
      alert("Nice cara vc é bobo!");
      setValue('')
      return;
    }
    setValue(text);
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <h2>{value}</h2>
      <input
        type="text"
        placeholder="Digite algo bacaninha"
        onChange={(e) => handleChange(e)}
        className="text-zinc-900 p-1 rounded-md"
      />
      <Button onClick={() => setValue("")}>Great!</Button>
    </div>
  );
};

export default States;
