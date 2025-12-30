import { Badge } from "../ui/badge";
import type { VariantProps } from "class-variance-authority";

const frameworkVariants: Record<string, string> = {
  "vue 3": "vue",
  "react": "react",
  "next.js": "nextjs",
  "django": "django",
  "sveltekit": "sveltekit",
  "nuxt.js": "nuxtjs",
  "remix": "remix",
  "astro": "astro",
};

const difficultyVariants: Record<string, string> = {
  "challenger": "challenger",
  "hard": "hard",
  "medium": "medium",
  "easy": "easy",
};

const typeVariants: Record<string, string> = {
  "bug fix": "secondary",
  "feature addition": "outline",
  "refactor": "outline",
};

export function FrameworkBadge({ value }: { value: string }) {
  const variant = frameworkVariants[value.toLowerCase()] || "outline";
  return <Badge variant={variant as VariantProps<typeof Badge>["variant"]}>{value}</Badge>;
}

export function DifficultyBadge({ value }: { value: string }) {
  const variant = difficultyVariants[value.toLowerCase()] || "outline";
  return <Badge variant={variant as VariantProps<typeof Badge>["variant"]}>{value}</Badge>;
}

export function TypeBadge({ value }: { value: string }) {
  const variant = typeVariants[value.toLowerCase()] || "secondary";
  return <Badge variant={variant as VariantProps<typeof Badge>["variant"]}>{value.replace("-", " ")}</Badge>;
}