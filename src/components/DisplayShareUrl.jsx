import { useEffect, useRef } from "react";
import { useCode } from "../contexts/CodeContext"
import CopyIcon from "./icons/CopyIcon";

export default function DisplayShareUrl() {

    const { shareUrl, setShareUrl } = useCode();
    const urlRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setShareUrl("");
        }, 20000);
    }, []);

    function copyUrl() {
        navigator.clipboard.writeText(shareUrl);
        urlRef.current.select();
    }

    return (
        <>
            {shareUrl ? (
                <div onClick={copyUrl} className="m-5 border-2 cursor-pointer border-slate-500 rounded-md">
                    <div className="flex py-1 px-4">
                        <input
                            ref={urlRef}
                            className="text-sm w-full outline-none"
                            type="text"
                            value={shareUrl}
                            readOnly />
                        <CopyIcon height="18" />
                    </div>
                    <div className="bg-amber-400 h-1 rounded-3xl mx-1 animate-timeout"></div>
                </div>
            ) : null
            }
        </>
    )
}