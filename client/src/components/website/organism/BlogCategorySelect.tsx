"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const CATEGORIES = [
  { value: "news", headerKey: "news" },
  { value: "visa", headerKey: "visa" },
  { value: "work_permit", headerKey: "work-permit" },
] as const;

export default function BlogCategorySelect({
  lng,
  currentCategory,
}: {
  lng: string;
  currentCategory: string;
}) {
  const router = useRouter();
  const t = useTranslations("header");

  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map(({ value, headerKey }) => {
        const isActive = currentCategory === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => router.push(`/${lng}/blog?category=${value}`)}
            className={`rounded-lg px-4 py-2 font-medium transition-colors ${
              isActive
                ? "bg-[#3562AE] text-white"
                : "border border-gray-300 text-[#3562AE] hover:bg-[#3562AE]/10"
            }`}
          >
            {t(headerKey)}
          </button>
        );
      })}
    </div>
  );
}
