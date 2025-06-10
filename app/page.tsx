'use client';
import { useState } from "react";
import Title from "./title";
import Button from "./button";
import MainRecord from "./mainRecord";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });

  return (
    <div>
      <Title />
      <Button onDateChange={setSelectedDate} />
      <MainRecord date={selectedDate} />
    </div>
  );
}
