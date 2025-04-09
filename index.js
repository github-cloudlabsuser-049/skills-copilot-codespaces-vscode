vimport { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState("type markdown here");

    // Example data array
    const data = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 35 },
    ];

    // Extract names from the data array
    const names = data.map(item => item.name).join(", ");

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
            <h1>Markdown Editor</h1>
            <textarea
                style={{ width: '100%', height: '200px', marginBottom: '20px', fontSize: '16px' }}
                value={markdown}
                onChange={handleChange}
            />
            <h2>Preview</h2>
            <div
                style={{
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '5px',
                    backgroundColor: '#f9f9f9',
                }}
            >
                {/* Display the markdown content */}
                <ReactMarkdown>{markdown}</ReactMarkdown>
                {/* Display the extracted names */}
                <p><strong>Names:</strong> {names}</p>
            </div>
        </div>
    );
}