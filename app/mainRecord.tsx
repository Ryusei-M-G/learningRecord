'use client'
import { useEffect, useRef, useState } from 'react';
import { supabase } from './lib/supabaseClient'

type Props = {
  date: string;
};

export default function MainRecord({ date }: Props) {
  const [studyNote, setStudyNote] = useState('');
  const [futureTask, setFutureTask] = useState('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // const today = new Date().toISOString().split("T")[0];
  const dummyUserId = "12345678-1234-5678-1234-567812345678";

  //ページ読み込み時にデータ取得
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("daily_records")
        .select("*")
        .eq("user_id", dummyUserId)
        .eq("date", date
        )
        .maybeSingle();

      if (data) {
        setStudyNote(data.study_note || '');
        setFutureTask(data.future_task || '');
      } else {
        // データなしの場合も初期化
        setStudyNote('');
        setFutureTask('');
      }

      if (error) {
        console.error("読み込みエラー:", error.message);
      } else if (data) {
        setStudyNote(data.study_note || "");
        setFutureTask(data.future_task || "");
      }
    };

    fetchData();
  }, [date]);

  // debounce処理
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(async () => {
      const { error } = await supabase.from("daily_records").upsert(
        {
          user_id: dummyUserId,
          date: date,
          study_note: studyNote,
          future_task: futureTask,
        },
        { onConflict: "user_id,date" } 
      );

      if (error) {
        console.error("保存エラー:", error.message);
      } else {
        console.log("保存成功");
      }
    }, 1000);
  }, [studyNote, futureTask,date]);

  return (
    <>
      <div className="ml-4 mt-4">
        <div>
          <div className="mb-2 text-lg font-semibold">学習記録</div>
          <textarea
            value={studyNote}
            onChange={(e) => setStudyNote(e.target.value)}
            className="outline-none w-150 h-40 bg-zinc-800 rounded-2xl p-4 resize-none overflow-auto hover:cursor-pointer hover:bg-white/30"
          ></textarea>
        </div>
        <div className="">
          <div className="mb-2 text-lg font-semibold">今後の課題</div>
          <textarea
            value={futureTask}
            onChange={(e) => setFutureTask(e.target.value)}
            className="outline-none w-150 h-40 bg-zinc-800 rounded-2xl p-4 resize-none overflow-auto hover:cursor-pointer hover:bg-white/30"
          ></textarea>
        </div>
      </div>
    </>
  );
}