"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

const SubscriptionProvider = () => {
  const { data: session } = useSession();
  useEffect(() => {}, []);
  return <div></div>;
};

export default SubscriptionProvider;
