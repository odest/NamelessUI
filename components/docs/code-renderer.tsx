import {CodeBlock} from "@/components/docs/code-block";
import React from "react";

type CodeRenderer = {
  name: string;
  lang: string;
};

export default async function CodeRenderer({ name }: CodeRenderer) {
  return <CodeBlock filePath={`components/examples/${name}.tsx`} />
}
