import { useState } from "react";
import "./App.css";

function App() {
    const [fileName, setFileName] = useState("");
    const [content, setContent] = useState("");
    const [result, setResult] = useState("");

    async function handleOperation(operation) {
        if (!fileName.trim()) {
            setResult("Enter file name");
            return;
        }

        if ((operation === "write" || operation === "append") && !content) {
            setResult("Enter content");
            return;
        }

        try {
            const params = new URLSearchParams();
            params.set("fname", fileName.trim());

            if (operation === "write" || operation === "append") {
                params.set("content", content);
            }

            const method = {
                write: "POST",
                read: "GET",
                append: "PUT",
                delete: "DELETE"
            };

            const response = await fetch(
                `/${operation}?${params.toString()}`,
                { method: method[operation] }
            );

            const data = await response.text();
            const message = data
                .replace(/^<pre>/i, "")
                .replace(/<\/pre>$/i, "");

            setResult(message);

            if (response.ok && operation === "delete") {
                setFileName("");
                setContent("");
            }
        } catch (error) {
            setResult("Unable to connect to server");
        }
    }

    return (
        <div className="container">
            <h1>File Management System</h1>

            <label>File Name</label>
            <input
                type="text"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                placeholder="Enter file name"
            />

            <label>Content</label>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter content"
            />

            <div className="buttons">
                <button onClick={() => handleOperation("write")}>
                    Create
                </button>

                <button onClick={() => handleOperation("read")}>
                    Read
                </button>

                <button onClick={() => handleOperation("append")}>
                    Append
                </button>

                <button onClick={() => handleOperation("delete")}>
                    Delete
                </button>
            </div>

            <h3>Result</h3>
            <pre>{result || "Result will appear here"}</pre>
        </div>
    );
}

export default App;