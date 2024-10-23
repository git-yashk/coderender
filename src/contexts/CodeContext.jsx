import { createContext, useContext, useState } from "react";
import example from "../assets/example.json";

const codeContext = createContext();

export default function CodeProvider({ children }) {

    const [codeObj, setCodeObj] = useState({ html: example.html, css: example.css, js: example.js });
    const [shareUrl, setShareUrl] = useState("");
    const [canShare, setCanShare] = useState(false);

    const contextObj = { codeObj, setCodeObj, shareUrl, setShareUrl, canShare, setCanShare };

    return (
        <codeContext.Provider value={contextObj}>
            {children}
        </codeContext.Provider>
    )

}

export function useCode() {
    return useContext(codeContext);
}