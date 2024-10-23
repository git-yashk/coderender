import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import CodeEditor from "../components/CodeEditor";
import Header from "../components/Header";
import { useCode } from "../contexts/CodeContext";
import Preview from "../components/Preview";
import { useParams } from "react-router-dom";
import db from '../appwrite/databases';
import DisplayShareUrl from '../components/DisplayShareUrl';

export default function Home() {

    const { codeObj, setCodeObj } = useCode();
    const [currentFile, setCurrentFile] = useState("html");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            if (id) {
                const idRegex = /^[0-9a-z]{20}$/;
                if (!idRegex.test(id)) {
                    navigate("/");
                    return;
                }
                const response = await db.shareCode.getDocument(id);
                if (!response) {
                    navigate("/");
                } else {
                    setCodeObj(response);
                }
            }
        })();
    }, []);

    return (
        <>
            <Header />
            <DisplayShareUrl />
            <div className="grid grid-cols-2 m-5 gap-5">
                <div className="border-4 border-black rounded-md border-t-2">
                    <CodeEditor
                        code={codeObj[currentFile]}
                        setCodeObj={setCodeObj}
                        currentFile={currentFile}
                        setCurrentFile={setCurrentFile}
                    />
                </div>
                <div className="border-4 border-black rounded-md border-t-2">
                    <Preview />
                </div>
            </div>
        </>
    )
}