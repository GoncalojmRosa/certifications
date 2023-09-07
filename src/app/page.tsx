import Certificates from "@/components/Certificates";
import Dropzone from "@/components/Dropzone";
import Navbar from "@/components/Navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function page() {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getSession();

  if (!data.session) return redirect("/auth");

  return (
    <div className="py-5 space-y-5">
      <Navbar />
      <Dropzone />
      <Certificates />
    </div>
  );
}
