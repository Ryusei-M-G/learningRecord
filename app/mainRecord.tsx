"use client"
import { useEffect, useRef, useState } from "react";
import { supabase } from "./lib/supabaseClient"

export default function MainRecord() {
  const [studyNote, setStudyNote] = useState("学習記録:");
  const [futureTask, setFutureTask] = useState("今後の課題:");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const dummyUserId = "00000000-0000-0000-0000-000000000000";

  // 自動保存処理
  useEffect(() => {
    //debounce
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const today = new Date().toISOString().split("T")[0]; 
      supabase.from("daily_records").upsert(
        {
          user_id: dummyUserId,
          date: today,
          study_note: studyNote,
          future_task: futureTask,
        },
        {
          onConflict: "user_id,date",
        }
      ).then(({ error }) => {
        if (error) {
          console.error("保存エラー:", error.message);
        } else {
          console.log("自動保存成功");
        }
      });
    }, 2000);
  }, [studyNote, futureTask]);

  return (
    <>
      <textarea
        value={studyNote}
        onChange={(e) => setStudyNote(e.target.value)}
        className="outline-none w-150 h-150 ml-4 mt-4 bg-zinc-800 rounded-2xl p-4 resize-none overflow-auto hover:cursor-pointer hover:bg-white/30"
      ></textarea>
      <textarea
        value={futureTask}
        onChange={(e) => setFutureTask(e.target.value)}
        className="outline-none w-150 h-150 ml-4 mt-4 bg-zinc-800 rounded-2xl p-4 resize-none overflow-auto hover:cursor-pointer hover:bg-white/30"
      ></textarea>
    </>
  );
}