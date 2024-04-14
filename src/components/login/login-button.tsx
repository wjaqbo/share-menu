import { useFormStatus } from "react-dom";

import Button from "@/components/ui/button";

export default function LoginButton() {
  const { pending } = useFormStatus();

  return <Button aria-disabled={pending}>Log In</Button>;
}
