'use client';
import { useState } from "react";
import Title from "./title";
import Button from "./button";
import MainRecord from "./mainRecord";
import Menu from "./Menu";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });

  return (
    <div className="flex min-h-screen">
      {/* サイドバー */}
      <div className="w-160 bg-zinc-900 text-white p-4">
        <Menu />
      </div>

      {/* メインエリア */}
      <div className="flex-1 p-6">
        <Title />
        <Button onDateChange={setSelectedDate} />
        <MainRecord date={selectedDate} />
      </div>
    </div>
  );
}
