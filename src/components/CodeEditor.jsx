import ReactCodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import CodeEditorMenu from "./CodeEditorMenu";

export default function CodeEditor({ code, setCodeObj, currentFile, setCurrentFile }) {

    const extensions = {
        "html": [html()],
        "css": [css()],
        "js": [javascript()],
    }

    return (
        <div>
            <div>
                <CodeEditorMenu currentFile={currentFile} setCurrentFile={setCurrentFile} />
            </div>
            <div className="border border-[#000]">
                <ReactCodeMirror
                    value={code}
                    onChange={value => setCodeObj(prev => ({ ...prev, [currentFile]: value }))}
                    extensions={extensions[currentFile]}
                    theme="dark"
                    autoFocus
                    height="80vh"
                    basicSetup={{
                        lineNumbers: true,
                        foldGutter: false,
                        highlightActiveLineGutter: false,
                        highlightSelectionMatches: true,
                        indentOnInput: true,
                        tabSize: 4,
                        closeBrackets: true
                    }}
                />
            </div>
        </div>
    )
}