import { auth } from "@/lib/auth";
import HomeView from "@/modules/home/ui/views/home-view";
import { caller } from "@/trpc/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // https://youtu.be/gRseQH9EHjY
  // ^^ got this ad while watching something lol

  if (!session) {
    redirect("/sign-in");
  }

  return <HomeView />;
};

export default Page;
