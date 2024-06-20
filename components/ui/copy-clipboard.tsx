"use client";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { Button } from "./button";
import { Clipboard } from "lucide-react";

const CopyToClipboard = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="space-x-5"
            variant="default"
            onClick={handleCopyToClipboard}
          >
            {text}
            <Clipboard className="ml-2" height={15} width={15} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy to clipboard</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

    // <Tooltip content={copied ? "Copied!" : "Copy to Clipboard"}>
    //   <button onClick={handleCopyToClipboard} className="focus:outline-none">
    //     <Clipboard />
    //   </button>
    // </Tooltip>
  );
};

export default CopyToClipboard;
