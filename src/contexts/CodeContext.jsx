import { createContext, useContext, useState } from "react";
import example from "../assets/example.json";

const codeContext = createContext();

export default function CodeProvider({ children }) {

    const [codeObj, setCodeObj] = useState({ html: example.html, css: example.css, js: example.js });
    const [shareURL, setShareUrl] = useState("");

    const contextObj = { codeObj, setCodeObj, shareURL, setShareUrl };

    return (
        <codeContext.Provider value={contextObj}>
            {children}
        </codeContext.Provider>
    )

}

export function useCode() {
    return useContext(codeContext);
}