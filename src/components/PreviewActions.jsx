import { downloadProject, previewInNewTab } from "../utils/utils";
import ArrowIcon from "./icons/ArrowIcon";
import DownloadIcon from "./icons/DownloadIcon";
import LinkIcon from "./icons/LinkIcon";

export default function PreviewActions({ codeObj }) {
    return (
        <>
            <div className="flex gap-1 bg-[#030712] h-8 border-4 border-[#030712]">
                <button
                    className="px-2 py-1 rounded flex items-center gap-1 bg-white hover:bg-slate-100"
                >
                    <LinkIcon height="12" />
                    <span className="text-sm">Share</span>
                </button>
                <button
                    onClick={() => previewInNewTab(codeObj)}
                    title="Open in new tab"
                    className="px-2 py-1 rounded flex items-center gap-1 bg-white hover:bg-slate-100"
                >
                    <ArrowIcon height="12" />
                </button>
                <button
                    onClick={() => downloadProject(codeObj)}
                    title="Download zip"
                    className="px-2 py-1 rounded flex items-center gap-1 bg-white hover:bg-slate-100"
                >
                    <DownloadIcon height="12" />
                </button>
            </div>
        </>
    )
}