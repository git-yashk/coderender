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
            <div className="grid grid-cols-2 m-5 gap-5">
                <div className="border-4 border-black rounded-md border-t-2">
                    <CodeEditor
                        code={codeObj[currentFile]}
                        setCodeObj={setCodeObj}
                        currentFile={currentFile}
                        setCurrentFile={setCurrentFile}
                    />
                </div>
            </div>
        </>
    )
}