// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// export default Highlight = ({ content }) => {
//   return (
//     <SyntaxHighlighter language="javascript" showLineNumbers style={oneDark}>
//       {content}
//     </SyntaxHighlighter>
//   );
// };

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Highlight = ({ content }: { content: string }) => {
  return (
    <SyntaxHighlighter language="javascript" showLineNumbers style={oneDark}>
      {String(content)}
    </SyntaxHighlighter>
  );
};

export default Highlight;
