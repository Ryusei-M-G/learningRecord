'use client';
import { useState, useEffect } from 'react';

type Props = {
  onDateChange: (date: string) => void;
};

export default function Button({ onDateChange }: Props) {
  const [currentDate, setCurrentDate] = useState(new Date());

  // 曜日付きの日付表示
  const formatDisplay = (date: Date) => {
    const weekday = ['日', '月', '火', '水', '木', '金', '土'];
    return `${date.getMonth() + 1}月${date.getDate()}日(${weekday[date.getDay()]})`;
  };

  // YYYY-MM-DD 形式（Supabase用）
  const formatValue = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const handlePrev = () => {
    const prev = new Date(currentDate);
    prev.setDate(prev.getDate() - 1);
    setCurrentDate(prev);
  };

  const handleNext = () => {
    const next = new Date(currentDate);
    next.setDate(next.getDate() + 1);
    setCurrentDate(next);
  };

  // 日付変更時に親へ通知
  useEffect(() => {
    onDateChange(formatValue(currentDate));
  }, [currentDate, onDateChange]);

  return (
    <div className="flex ml-4 mt-4 gap-5 items-center">
      <button onClick={handlePrev} className="bg-zinc-800 w-20 h-10 rounded-2xl text-white">
        ←
      </button>
      <div className="bg-zinc-800 w-40 h-10 rounded-2xl text-center p-2 text-white">
        {formatDisplay(currentDate)}
      </div>
      <button onClick={handleNext} className="bg-zinc-800 w-20 h-10 rounded-2xl text-white">
        →
      </button>
    </div>
  );
}
