import { Loader2Icon } from "lucide-react";

interface Props {
  title: string;
  description: string;
}

export const LoadingState = ({ title, description }: Props) => {
  return (
    <div className="py-4 px-8 flex flex-1 items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-background rouded-lg p-6 shadow-sm rounded-lg gap-4">
        <Loader2Icon className="size-6 animate-spin text-primary" />
        <div className="flex flex-col gap-y-2 text-center">
          <h6 className="text-sm font-medium">{title}</h6>
          <p className="text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
};
