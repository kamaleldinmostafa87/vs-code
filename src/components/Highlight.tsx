import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Highlight = ({ content }: { content: string }) => {
  return (
    <SyntaxHighlighter language="javascript" showLineNumbers style={dracula}>
      {content}
    </SyntaxHighlighter>
  );
};

export default Highlight;
