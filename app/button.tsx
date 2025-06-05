export default function Button() {
  const today = new Date();
  const weekday = ["日", "月", "火", "水", "木", "金", "土"];
  const t_today = `${today.getMonth() + 1}月${today.getDate()}日(${weekday[today.getDay()]})`
  return (
    <div className="flex ml-4 mt-4 gap-5">
      <div className="bg-zinc-800 w-20 h-10 rounded-2xl"></div>
      <div className="bg-zinc-800 w-100 h-10 rounded-2xl text-center p-2">{t_today}</div>
      <div className="bg-zinc-800 w-20 h-10 rounded-2xl"></div>
    </div>
  );
}