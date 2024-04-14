import { signOut } from "@/lib/auth/auth";
import Button from "../ui/button";
export default function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button noBackground className="text-xs">
        Log Out
      </Button>
    </form>
  );
}
