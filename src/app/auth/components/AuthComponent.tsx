"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";

export default function AuthComponent() {
  const supabase = createClientComponentClient();

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };
  return (
    <div className="py-5">
      <Navbar />
      <div className="flex items-center justify-center h-80vh">
        <div className="text-center space-y-5">
          <p>
            This is where you can store your certificates so that you don&apos;t
            lose them.
          </p>
          <Button variant={"outline"} onClick={handleLogin}>
            Login with Github
          </Button>
        </div>
      </div>
    </div>
  );
}
