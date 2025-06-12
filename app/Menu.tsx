import { supabase } from './lib/supabaseClient'
import { useEffect, useState } from 'react';

type Record = {
  date: string;
  study_note: string;
  future_task: string;
};

export default function Menu() {
  const dummyUserId = "12345678-1234-5678-1234-567812345678";
  const [records, setRecords] = useState<Record[]>([]);

  // データベースから直近10日分の学習記録を取得
  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const fiveDaysAgo = new Date();
      fiveDaysAgo.setDate(today.getDate() - 9);

      const todayStr = today.toISOString().split('T')[0];
      const fiveDaysAgoStr = fiveDaysAgo.toISOString().split('T')[0];

      const { data, error } = await supabase
        .from("daily_records")
        .select("*")
        .eq("user_id", dummyUserId)
        .gte("date", fiveDaysAgoStr)
        .lte("date", todayStr)
        .order("date", { ascending: false });

      if (error) {
        console.error("読み込みエラー:", error.message);
        setRecords([]);
      } else if (data) {
        setRecords(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="ml-4 mt-4 min-w-[20rem]">
      <div className="mb-2 text-lg font-semibold">直近10日分の記録</div>
      <ul>
        {records.map((rec) => (
          <li key={rec.date} className="mb-2">
            <div className="text-sm text-zinc-400">{rec.date}</div>
            <div className="text-base">学習記録: {rec.study_note}</div>
            <div className="text-base">今後の課題: {rec.future_task}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}