export default function Title() {
    return (
        <div>
            <div
                className="grid grid-cols-1 place-items-start text-left border border-zinc-900 rounded-2xl w-150 h-40 ml-4 mt-4 p-2 text-3xl bg-zinc-800">
                
                <textarea defaultValue="学習内容:" className="ml-4 mt-4 bg-zinc-800 rounded-2xl p-2 resize-none overflow-auto outline-none"></textarea>
            </div>
            <div className="flex ml-4 mt-4 gap-5">
                <div className="bg-zinc-800 w-20 h-10 rounded-2xl"></div>
                <div className="bg-zinc-800 w-100 h-10 rounded-2xl"></div>
                <div className="bg-zinc-800 w-20 h-10 rounded-2xl"></div>
            </div>

            <textarea defaultValue="学習記録:" className="outline-none w-150 h-150 ml-4 mt-4 bg-zinc-800 rounded-2xl p-2 resize-none overflow-auto">
            </textarea>
            <textarea defaultValue="今後の課題:" className="outline-none w-150 h-150 ml-4 mt-4 bg-zinc-800 rounded-2xl p-2 resize-none overflow-auto">
            </textarea>
        </div>
    );

}