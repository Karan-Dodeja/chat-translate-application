import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function UserAvatar({
  name,
  image,
  className,
}: {
  name?: string | null;
  image?: string | null;
  className?: string | null;
}) {
  return (
    <Avatar className={cn("bg-white text-clack", className)}>
      {image && (
        <Image
          src={image || ""}
          alt={name || "User name"}
          width={40}
          height={40}
          className="rounded-full"
        />
      )}

      <AvatarFallback
        className="dark:bg-white dark:text-black text-lg"
        delayMs={1000}
      >
        {name
          ?.split(" ")
          .map((n) => n[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  );
}
