import { extractCodeFromFilePath } from "@/lib/code";
import { CodePreview } from "@/components/docs/code-preview";

type CodeBlockProps = {
  filePath: string;
  className?: string;
};

export function CodeBlock({ filePath }: CodeBlockProps) {
  const code = extractCodeFromFilePath(filePath);

  return <CodePreview code={code} lang={"tsx"} />;
}
