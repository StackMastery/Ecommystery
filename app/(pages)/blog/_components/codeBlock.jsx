import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCopy, FiCheck } from "react-icons/fi";

const CodeBlock = ({ value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {}
  };

  return (
    <div className="rounded-md overflow-hidden shadow-xl backdrop-blur-2xl border border-white/20 max-w-full font-mono relative">
      {/* Terminal Header */}
      <div className="bg-white/10 backdrop-blur-3xl text-white px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-400 uppercase">
            {value.language}
          </span>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="text-xs cursor-pointer flex items-center gap-1 text-neutral-400 hover:text-white transition duration-200"
        >
          {copied ? (
            <>
              <FiCheck className="text-green-400" />
              Copied
            </>
          ) : (
            <>
              <FiCopy />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <SyntaxHighlighter
        language={value.language}
        style={coldarkDark}
        customStyle={{ margin: 0, padding: "1rem", background: "transparent" }}
      >
        {value.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
