import { useEffect, useState } from 'react';
import { downloadProject, previewInNewTab } from "../utils/utils";
import ArrowIcon from "./icons/ArrowIcon";
import DownloadIcon from "./icons/DownloadIcon";
import LinkIcon from "./icons/LinkIcon";
import { getCurrentUser } from '../appwrite/authentication';
import { useNavigate } from 'react-router-dom';
import { useCode } from '../contexts/CodeContext';

export default function PreviewActions({ codeObj }) {

    const { canShare, setCanShare } = useCode();
    const navigate = useNavigate();

    useEffect(() => {
        isShareable();
    }, [codeObj]);

    function isShareable() {
        let flag = codeObj.html.length > 100
            && codeObj.html.length < 5000
            && codeObj.css.length < 1000
            && codeObj.js.length < 2000;
        setCanShare(flag);
    }

    async function handleShare() {
        const user = await getCurrentUser();
        if (user) {
            alert("Oops! Try again after sometime.");
        } else {
            navigate("/verify");
        }
    }

    return (
        <>
            <div className="flex gap-1 bg-[#030712] h-8 border-4 border-[#030712]">
                <button
                    onClick={handleShare}
                    disabled={!canShare}
                    className="px-2 py-1 rounded flex items-center gap-1 bg-white hover:bg-slate-100 disabled:bg-blue-200"
                    title="index.html length must be > 100"
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