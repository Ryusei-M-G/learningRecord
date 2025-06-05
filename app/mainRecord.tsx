export default function MainRecord() {
  return (
    <>
      <textarea
        defaultValue="学習記録:"
        className="outline-none w-150 h-150 ml-4 mt-4 bg-zinc-800 rounded-2xl p-4 resize-none overflow-auto hover:cursor-pointer hover:bg-white/10"
      ></textarea>
      <textarea
        defaultValue="今後の課題:"
        className="outline-none w-150 h-150 ml-4 mt-4 bg-zinc-800 rounded-2xl p-4 resize-none overflow-auto hover:cursor-pointer hover:bg-white/10"
      ></textarea>
    </>
  );
}