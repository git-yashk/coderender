import { useEffect, useState } from "react";
import { useCode } from "../contexts/CodeContext"
import PreviewActions from "./PreviewActions";
export default function Preview() {

    const { codeObj } = useCode();
    const [document, setDocument] = useState(null);

    useEffect(() => {
        setDocument(`
<style>
    ${codeObj.css}
</style>
<body>
    ${codeObj.html}
    <script>
        ${codeObj.js}
    </script>
</body>
        `);
    }, [codeObj]);

    return (
        <>
            <div>
                <PreviewActions codeObj={codeObj} />
            </div>
            <div className="border border-[#000]">
                <iframe
                    className="w-full h-[80vh] bg-white"
                    srcDoc={document}
                ></iframe>
            </div>
        </>
    )
}