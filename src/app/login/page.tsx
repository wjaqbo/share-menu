import { LoginForm } from "@/components/login/login-form";
import React from "react";

export default function LoginPage() {
  return (
    <section className="flex flex-col items-center justify-center">
      <header className="mb-10 mt-32">
        <h1 className="mb-3 animate-slideUp text-5xl font-bold">Login</h1>
      </header>
      <LoginForm />
    </section>
  );
}
