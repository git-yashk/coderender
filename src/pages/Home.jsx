import { useEffect, useState } from "react";
import CodeEditor from "../components/CodeEditor";
import Header from "../components/Header";
import { useCode } from "../contexts/CodeContext";

export default function Home() {

    const { codeObj, setCodeObj } = useCode();
    const [currentFile, setCurrentFile] = useState("");

    useEffect(() => {
        setCurrentFile("html");
    }, []);

    return (
        <>
            <Header />
            <CodeEditor code={codeObj[currentFile]} setCodeObj={setCodeObj} currentFile={currentFile} setCurrentFile={setCurrentFile} />
        </>
    )
}