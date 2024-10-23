import HtmlIcon from "./icons/HtmlIcon";
import CssIcon from "./icons/CssIcon";
import JavaScriptIcon from "./icons/JavaScriptIcon";

export default function CodeEditorMenu({ currentFile, setCurrentFile }) {
    return (
        <>
            <div className="flex gap-1 bg-[#030712] h-8 border-4 border-[#030712]">
                <button onClick={() => setCurrentFile("html")}
                    style={currentFile == "html" ? { backgroundColor: "#fff", color: "#000" } : {}}
                    className="p-1 md:px-2 rounded flex items-center gap-1 text-white hover:bg-slate-100 hover:text-black"
                >
                    <HtmlIcon height="18" />
                    <span className="text-sm">index.html</span>
                </button>
                <button onClick={() => setCurrentFile("css")}
                    className="p-1 md:px-2 rounded flex items-center gap-1 text-white hover:bg-slate-100 hover:text-black"
                    style={currentFile == "css" ? { backgroundColor: "#fff", color: "#000" } : {}}
                >
                    <CssIcon height="18" />
                    <span className="text-sm">style.css</span>
                </button>
                <button onClick={() => setCurrentFile("js")}
                    className="p-1 md:px-2 rounded flex items-center gap-1 text-white hover:bg-slate-100 hover:text-black"
                    style={currentFile == "js" ? { backgroundColor: "#fff", color: "#000" } : {}}
                >
                    <JavaScriptIcon height="18" />
                    <span className="text-sm">script.js</span>
                </button>
            </div>
        </>
    )
}