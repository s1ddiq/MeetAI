"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { LoaderPinwheel } from "lucide-react";
import { useRouter } from "next/navigation";

const HomeView = () => {
  const router = useRouter();
  // @ts-ignore
  const { data: session } = authClient.useSession();
  //   console.log("Session data:", session);

  if (!session) {
    return (
      <LoaderPinwheel
        size={32}
        className="animate-spin absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2"
      />
    );
  }
  return (
    <div className="flex flex-col p-4 gap-y-4">
      <p>Logged in as {session?.user.name}</p>
      <Button
        onClick={() =>
          authClient.signOut({
            fetchOptions: { onSuccess: () => router.push("/sign-in") },
          })
        }
      >
        Sign Out
      </Button>
    </div>
  );
};

export default HomeView;
