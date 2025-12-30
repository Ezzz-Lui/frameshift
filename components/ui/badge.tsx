import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "h-5 gap-1 rounded-none border border-transparent px-2 py-0.5 text-xs font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-colors overflow-hidden group/badge",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive:
          "bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20",
        outline:
          "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
        //Frameworks variants
        vue: "bg-green-500/10 text-green-500 border-green-500/20 [a]:hover:bg-green-500/20",
        react:
          "bg-blue-500/10 text-blue-500 border-blue-500/20 [a]:hover:bg-blue-500/20",
        challenger:
          "bg-purple-500/10 text-purple-500 border-purple-500/20 [a]:hover:bg-purple-500/20",
        django:
          "bg-green-700/10 text-green-700 border-green-700/20 [a]:hover:bg-green-700/20",
        nextjs:
          "bg-black/10 text-black border-black/20 [a]:hover:bg-black/20 dark:bg-white/10 dark:text-white dark:border-white/20 dark:[a]:hover:bg-white/20",
        sveltekit:
          "bg-red-500/10 text-red-500 border-red-500/20 [a]:hover:bg-red-500/20",
        nuxtjs:
          "bg-teal-500/10 text-teal-500 border-teal-500/20 [a]:hover:bg-teal-500/20",
        remix:
          "bg-pink-500/10 text-pink-500 border-pink-500/20 [a]:hover:bg-pink-500/20",
        astro:
          "bg-indigo-500/10 text-indigo-500 border-indigo-500/20 [a]:hover:bg-indigo-500/20",
        // Difficulties variants
        hard: "bg-red-500/10 text-red-500 border-red-500/20 [a]:hover:bg-red-500/20",
        medium:
          "bg-yellow-500/10 text-yellow-500 border-yellow-500/20 [a]:hover:bg-yellow-500/20",
        easy: "bg-blue-500/10 text-blue-500 border-blue-500/20 [a]:hover:bg-blue-500/20",
        // Types variants
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
