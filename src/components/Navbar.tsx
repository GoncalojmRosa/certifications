"use client";

import React from "react";
import { ScrollTextIcon } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Navbar() {
  const path = usePathname();
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const isAuthPage = path === "/auth";

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center">
        <ScrollTextIcon />
        <h1 className="ml-2">Certification&apos;s</h1>
      </div>
      {!isAuthPage && (
        <Button variant={"outline"} onClick={handleLogout}>
          Logout
        </Button>
      )}
    </div>
  );
}
