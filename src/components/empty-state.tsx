import Image from "next/image";

interface Props {
  title: string;
  description: string;
}

export const EmptyState = ({ title, description }: Props) => {
  // 5:57:33
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <Image src="/logo.svg" alt="Empty State" width={64} height={64} />
      <div className="flex flex-col gap-y-6 max-w-md mx-auto text-center">
        <h6 className="text-sm font-medium">{title}</h6>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
