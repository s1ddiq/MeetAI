"use client";
import { authClient } from "@/lib/auth-client";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  ChevronDownIcon,
  CircleUserRound,
  CreditCardIcon,
  LogOutIcon,
  Router,
} from "lucide-react";
import GeneratedAvatar from "@/components/generated-avatar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const DashboardUserButton = () => {
  const router = useRouter();
  const { data, isPending } = authClient.useSession() as any;

  if (isPending || !data.user.name) {
    return null;
  }

  const onLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        },
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-lg border border-border/10 p-2 w-full flex items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden">
        {data.user.image ? (
          <Avatar>
            <AvatarImage
              src={data.user.image}
              alt={data.user.name}
              className="size-8"
            />
          </Avatar>
        ) : (
          <GeneratedAvatar
            seed={data.user.name}
            variant="initials"
            className="size-8 mr-3"
          />
        )}

        <div className="flex flex-col gap.06 text-left overvflow-hidden flex-1 min-w-0">
          <p className="text-sm truncate w-full">{data.user.name}</p>

          <p className="text-sm truncate w-full">{data.user.email}</p>
        </div>
        <ChevronDownIcon className="size-4 shrink-0" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" side="right" className="w-72">
        <DropdownMenuLabel>
          <div className="flex flex-col gap-1">
            <span className="font-medium truncate">{data.user.name}</span>
            <span className="text-sm font-normal text-muted-foreground truncate">
              {data.user.email}
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer flex items-center justify-between hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5d6b68]/50 from-sidebar-accent from-50% via-90% via-sidebar/50 to-sidebar/50 hover:text-white">
          Billing
          <CreditCardIcon className="size-4" />
        </DropdownMenuItem>

        <DropdownMenuItem
          className="cursor-pointer flex items-center justify-between hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5d6b68]/50 from-sidebar-accent from-50% via-90% via-sidebar/50 to-sidebar/50 hover:text-white"
          onClick={onLogout}
        >
          Logout
          <LogOutIcon className="size-4 " />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DashboardUserButton;
