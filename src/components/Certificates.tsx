import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { DownloadIcon } from "lucide-react";
export default function Certificates() {
  return (
    <Table>
      <TableCaption>List of Certifications.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/2">Date</TableHead>
          <TableHead className="w-1/2">Note</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>2002-20-2</TableCell>
          <TableCell>C</TableCell>
          <TableCell>
            <Button variant={"link"}>
              <DownloadIcon />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
