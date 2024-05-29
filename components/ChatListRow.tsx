"use client";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { Skeleton } from "./ui/skeleton";
import { limitedSortedMessagesref } from "@/lib/converters/Message";

function ChatListRow({ chatId }: { chatId: string }) {
  const [messages, loading, error] = useCollectionData<Message>(
    limitedSortedMessagesref(chatId)
  );
  return <div></div>;
}

export default ChatListRow;
