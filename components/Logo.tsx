import LogoImage from "@logos/black.svg";
import Link from "next/link";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" className="overflow-hidden" prefetch={false}>
      <div className="flex items-center w-72 h-14">
        <AspectRatio
          className="flex items-center justify-center"
          ratio={16 / 9}
        >
          <Image
            priority
            src={LogoImage}
            className="rounded-full dark:filter dark:invert"
            alt="Logo"
          />
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
