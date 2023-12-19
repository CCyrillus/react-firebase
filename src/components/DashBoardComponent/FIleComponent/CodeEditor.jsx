import "./CodeEditor.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";


const CodeEditor = ({ fileName, data, setData }) => {

    const codes = {
        html: "xml",
        php: "php",
        js: "javascript",
        jsx: "jsx",
        txt: "textile",
        xml: "xml",
        css: "css",
        c: "clike",
        cpp: "clike",
        java: "java",
        cs: "clike",
        py: "python",
        json: "javascript",
    };

    return (
        <div className="row px-5 mt-3">

            <div className="col-md-12 mx-auto code-edit-container p-3">

                <textarea
                    value={data}
                    className="code-input w-100"
                    onChange={(e) => setData(e.target.value)}
                />

                <pre className="code-output">
                    <SyntaxHighlighter
                        language={codes[fileName.split(".")[1]]}
                        showLineNumbers
                        style={coldarkCold}
                        wrapLines
                        startingLineNumber={1}
                    >
                        {data}
                    </SyntaxHighlighter>
                </pre>

            </div>

        </div>
    )
}

export default CodeEditor