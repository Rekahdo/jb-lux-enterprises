'use client'

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ReactNode } from "react";
import { justify } from "../shared/_css";
import { Infer } from "convex/values";
import { tagValidator } from "@/convex/schema";
import Text, { textVariants } from "./text";
import { Sparkles } from "lucide-react";

const tagVariant = cva("",
  {
    variants: {
      variant: {
        outline:
          "border-2 border-border bg-foreground dark:bg-background text-primary",
        filled:
          "border-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
        filledMuted: cn(
          "rounded-md border border-border/60 bg-muted/50",
          "px-2 py-0.5 hover:border-primary/30",
          "transition-colors duration-200",
          "text-[11px] font-medium text-muted-foreground",
        ),
        soft:
          "border-2 border-transparent bg-primary/10 text-primary hover:bg-primary/15",
        muted:
          "border-2 border-transparent bg-muted text-muted-foreground hover:bg-muted/70",
        ghost:
          "border-2 border-transparent bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        success:
          "border-2 border-transparent bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/15 dark:text-emerald-400",
        warning:
          "border-2 border-transparent bg-amber-500/10 text-amber-600 hover:bg-amber-500/15 dark:text-amber-400",
        danger:
          "border-2 border-transparent bg-destructive/10 text-destructive hover:bg-destructive/15",
        frontend:
          "border-2 border-transparent bg-sky-500/10 text-sky-600 hover:bg-sky-500/15 dark:text-sky-400",
        backend:
          "border-2 border-transparent bg-violet-500/10 text-violet-600 hover:bg-violet-500/15 dark:text-violet-400",
      },
      size: {
        '2xs': "[&_svg]:size-2.5 sm:[&_svg]:size-3",
        xs: "[&_svg]:size-3 sm:[&_svg]:size-3.5",
        sm: "[&_svg]:size-3.5 sm:[&_svg]:size-4",
        md: "[&_svg]:size-4 sm:[&_svg]:size-4.5",
        lg: "[&_svg]:size-4.5 sm:[&_svg]:size-5",
      },
      padding: {
        '2xs': "px-3 py-1 gap-0.5",
        xs: "px-4 py-1.5 gap-1",
        sm: "px-5 py-2 gap-1.5",
        md: "px-6 py-2.5 gap-2",
        lg: "px-7 py-3 gap-2.5",
      },
      gap: {
        '2xs': "gap-1.5",
        xs: "gap-2",
        sm: "gap-2.5",
        md: "gap-3",
        lg: "gap-3.5",
      },
      shape: {
        pill: "rounded-full",
        square: "rounded-md",
      },
    },
  }
);

export type TagType = Infer<typeof tagValidator> & {
  icon?: ReactNode;
};

type TagCompType = {
  className?: string;
  iconClassName?: string;
  titleProps?: VariantProps<typeof textVariants>
  titleClassName?: string;
  descriptionProps?: VariantProps<typeof textVariants>
  descriptionClassName?: string;
};

export function Tag({
  icon,
  iconClassName,
  title,
  titleProps,
  titleClassName,
  description,
  descriptionProps,
  descriptionClassName,
  variant,
  size = "xs",
  shape = "square",
  className
}: TagCompType & TagType & Omit<VariantProps<typeof tagVariant>, "padding" | "gap">) {
  return (
    <div className={cn("flex flex-col items-center font-medium",
      "transition-colors text-foreground select-none",
      tagVariant({ variant, size, shape, padding: size }),
      className)}>

      <span className={cn("flex items-center", tagVariant({ gap: size }))}>
        {icon &&
          <span
            className={cn(tagVariant({ size }), iconClassName)}>
            {icon}
          </span>
        }

        <Text
          value={title}
          casing={'upper'}
          className={cn(
            !description && "whitespace-nowrap",
            textVariants({
              ...titleProps,
            }),
            titleClassName,
          )}
        />
      </span>

      {description &&
        <Text
          value={description}
          className={cn(
            textVariants({ ...descriptionProps }),
            descriptionClassName,
          )}
        />
      }
    </div>
  );
}

type TagsCompType = Omit<TagCompType, "className"> & {
  tags: TagType[] | undefined;
  tagClassName?: string;
  className?: string;
};

export function Tags({
  tags,
  tagClassName,
  className,
  ...tagProps
}: TagsCompType & { title?: string }) {
  if (!tags?.length) return null;

  return (
    <div
      role="list"
      aria-label="Tags"
      className={cn("flex gap-4", className)}
    >
      {tags.map((tag, i) => (
        <Tag key={`${tag.title}-${i}`} {...tag} {...tagProps} className={tagClassName} />
      ))}
    </div>
  );
}