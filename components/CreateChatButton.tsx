"use client";

import { MessageSquarePlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useSubscriptionStore } from "@/store/store";
import LoadingSpinner from "./ui/LoadingSpinner";

function CreateChatButton({ isLarge }: { islarge?: boolean }) {
  const { data: session } = useSession();
  const router = useRouter();
  const { loading, setLoading } = useState(false);
  const { toast } = useToast();
  const subscription = useSubscriptionStore((state) => state.subscription);

  const createNewChat = async () => {
    if (!session?.user.id) return;
    setLoading(true);
    toast({
      title: "Creating New Chat...",
      description: "Hold tight while we create chat...",
      duration: 300,
    });
    const chatId = uuidv4();
    router.push(`/chat/abc`);
  };

  if (isLarge)
    return (
      <div>
        <Button variant={"default"} onClick={createNewChat}>
          {loading ? <LoadingSpinner /> : "Create a New Chat"}
        </Button>
      </div>
    );

  return (
    <Button className="" variant={"ghost"} onClick={createNewChat}>
      <MessageSquarePlusIcon />
    </Button>
  );
}

export default CreateChatButton;
