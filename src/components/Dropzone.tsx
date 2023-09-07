"use client";

import React, { useRef, useState } from "react";
import { Input } from "./ui/input";
import { FileCheck2Icon, FileUpIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Dropzone() {
  const [uploadedFiles, setuploadedFiles] = useState<any[]>([]);
  const inputFile = useRef<HTMLInputElement>(null);

  function checkFile(file: any) {
    const res = uploadedFiles.find((f) => f.name === file[0].name);
    return res ? true : false;
  }

  const handleDrop = (e: any) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
    if (files.length > 0 && !checkFile(files)) {
      setuploadedFiles([...uploadedFiles, ...files]);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDragStart = (e: any) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  };

  const handleInput = (e: any) => {
    const { files } = e.target;
    if (files.length > 0 && !checkFile(files)) {
      setuploadedFiles([...uploadedFiles, ...files]);
    }
  };

  // TODO: Fix UI
  return (
    <div
      className="bg-slate-50 border-dashed border border-gray-500 rounded p-5 flex items-center justify-center flex-col space-y-5"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragStart={handleDragStart}
    >
      <div className="text-center ">
        <div className="flex items-center gap-5 flex-col text-gray-500">
          <h1 className="text-xl">
            Drop your <b>Certificate</b> here
          </h1>
          <FileUpIcon size={64} />
          or
        </div>
        <input
          type="file"
          multiple={true}
          hidden={true}
          ref={inputFile}
          onChange={handleInput}
        />
        <Button
          variant={"link"}
          onClick={() => {
            if (inputFile.current) {
              inputFile.current.click();
            }
          }}
        >
          Browse
        </Button>
      </div>
      <div className="flex items-center justify-center gap-5 flex-wrap">
        {uploadedFiles &&
          uploadedFiles.map((file) => (
            <div
              key={file.name}
              className="flex flex-col items-center justify-center"
            >
              <FileCheck2Icon />
              <p>{file.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
