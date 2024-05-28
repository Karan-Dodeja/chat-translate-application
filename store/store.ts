import { Subscription } from "@/types/Subscription";
import { create } from "zustand";

export type LanguagesSupported =
  | "en"
  | "de"
  | "fr"
  | "es"
  | "hi"
  | "ja"
  | "la"
  | "ru"
  | "zh"
  | "ar";

export const LanguageSupportedMap: Record<LanguagesSupported, string> = {
  en: "English",
  de: "German",
  fr: "French",
  es: "Spanish",
  hi: "Hindi",
  ja: "Japanese",
  la: "Latin",
  ru: "Russian",
  zh: "Mandarin",
  ar: "Arabic",
};

interface SubscriptionState {
  subscription: Subscription | null | undefined;
  setSubscription: (subscription: Subscription | null) => void;
}
export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: undefined,
  setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));
