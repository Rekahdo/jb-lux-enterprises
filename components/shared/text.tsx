'use client'

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { ElementType, MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { HEADER_ID } from "../section/header-section";

export type ScrollToIdType = {
  id: string;
  destinationPath: string;
  currentPath?: string;
  router?: AppRouterInstance;
  onNavigateAction?: () => void;
  scrollType?: ScrollBehavior;
  e?: MouseEvent<HTMLElement>;
}

export function scrollToId({
  id,
  destinationPath,
  currentPath,
  router,
  onNavigateAction,
  scrollType = "smooth",
  e,
}: ScrollToIdType) {
  e?.preventDefault();
  onNavigateAction?.();

  const targetId = id.startsWith("#") ? id.slice(1) : id;

  const performScroll = () => {
    const element = document.getElementById(targetId);
    if (!element) return false;

    const OFFSET = document.getElementById(HEADER_ID)?.getBoundingClientRect().height ?? 0;
    const top = element.getBoundingClientRect().top + window.scrollY - OFFSET;

    window.scrollTo({ top, behavior: scrollType });
    return true;
  };

  // 1. If we are already on the same page, scroll immediately
  if (!router || !currentPath || currentPath === destinationPath) {
    performScroll();
    return;
  }

  // 2. If we are navigating, push the route
  router.push(destinationPath);

  // 3. Setup an observer to watch the DOM for when the new page mounts
  let observer: MutationObserver;

  const disconnectObserver = () => {
    if (observer) observer.disconnect();
  };

  observer = new MutationObserver(() => {
    // Try to scroll. If successful (returns true), clean up the observer.
    const success = performScroll();
    if (success) {
      disconnectObserver();
    }
  });

  // Start observing the document body for child additions (which happens when Next.js swaps pages)
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // 4. Safety fallback: Disconnect the observer after 3 seconds just in case the element never renders
  setTimeout(disconnectObserver, 3000);
}

export const textVariants = cva("", {
  variants: {
    variant: {
      outline: cn("leading-0!",
        "rounded-full bg-foreground text-primary border-2 border-background/20",
        "dark:border-foreground/20 dark:bg-background  transition-all",
        "backdrop-blur-xs supports-backdrop-filter:bg-foreground/10"
      )
    },
    size: {
      hero: "text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase",
      h1: "text-4xl sm:text-5xl font-extrabold",
      h2: "text-2xl sm:text-4xl font-bold",
      h3: "text-xl sm:text-3xl font-bold",
      h4: "text-lg sm:text-2xl font-bold",
      h5: "text-base sm:text-xl font-bold",
      h6: "text-sm sm:text-base font-bold",
      '5xs': "text-[4px]",
      '4xs': "text-[6px]",
      '3xs': "text-[8px]",
      '2xs': "text-[10px]",
      xs: "text-xs",
      sm: "text-sm",
      default: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      '2xl': "text-2xl",
      '3xl': "text-3xl",
      '4xl': "text-4xl",
      '5xl': "text-5xl",
      '6xl': "text-6xl",
      '7xl': "text-7xl",
      '8xl': "text-8xl",
      '9xl': "text-9xl",
      '10xl': "text-[10rem]",
      '11xl': "text-[12rem]",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
    color: {
      default: "text-foreground",
      white: "text-white",
      gray: "text-gray-400",
      foreground: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      destructive: "text-destructive",
    },
    casing: {
      lower: "lowercase",
      upper: "uppercase",
      capitalize: "capitalize",
    },
    width: {
      '10%': "w-1/10",
      '20%': "w-2/10",
      '30%': "w-3/10",
      '40%': "w-4/10",
      '50%': "w-5/10",
      '60%': "w-6/10",
      '70%': "w-7/10",
      '80%': "w-8/10",
      '90%': "w-9/10",
      '100%': "w-full",
      full: "w-full",
    },
    tracking: {
      tighter: "tracking-tighter",
      tight: "tracking-tight",
      normal: "tracking-normal",
      wide: "tracking-wide",
      wider: "tracking-wider",
      widest: "tracking-widest",
      '2xs': "tracking-[-0.03em]",
      '2xl': "tracking-[0.15em]",
      '3xl': "tracking-[0.2em]",
      '4xl': "tracking-[0.25em]",
      '5xl': "tracking-[0.3em]",
    },
    font: {
      sans: "font-sans",
      mono: "font-mono",
      serif: "font-serif",
    },
    wrap: {
      true: "whitespace-pre-wrap",
      false: "whitespace-nowrap",
    },
    truncate: {
      true: "truncate",
    },
    align: {
      start: "text-start justify-start me-auto",
      center: "text-center justify-center mx-auto",
      end: "text-end justify-end ms-auto",
    },
    smAlign: {
      start: "sm:text-start sm:justify-start sm:me-auto",
      center: "sm:text-center sm:justify-center sm:mx-auto",
      end: "sm:text-end sm:justify-end sm:ms-auto",
    },
    mdAlign: {
      start: "md:text-start md:justify-start md:me-auto",
      center: "md:text-center md:justify-center md:mx-auto",
      end: "md:text-end md:justify-end md:ms-auto",
    },
    lgAlign: {
      start: "lg:text-start lg:justify-start lg:me-auto",
      center: "lg:text-center lg:justify-center lg:mx-auto",
      end: "lg:text-end lg:justify-end lg:ms-auto",
    },
    xlAlign: {
      start: "xl:text-start xl:justify-start xl:me-auto",
      center: "xl:text-center xl:justify-center xl:mx-auto",
      end: "xl:text-end xl:justify-end xl:ms-auto",
    },
    maxSmAlign: {
      start: "max-sm:text-start max-sm:justify-start max-sm:me-auto",
      center: "max-sm:text-center max-sm:justify-center max-sm:mx-auto",
      end: "max-sm:text-end max-sm:justify-end max-sm:ms-auto",
    },
    maxMdAlign: {
      start: "max-md:text-start max-md:justify-start max-md:me-auto",
      center: "max-md:text-center max-md:justify-center max-md:mx-auto",
      end: "max-md:text-end max-md:justify-end max-md:ms-auto",
    },
    maxLgAlign: {
      start: "max-lg:text-start max-lg:justify-start max-lg:me-auto",
      center: "max-lg:text-center max-lg:justify-center max-lg:mx-auto",
      end: "max-lg:text-end max-lg:justify-end max-lg:ms-auto",
    },
    maxXlAlign: {
      start: "max-xl:text-start max-xl:justify-start max-xl:me-auto",
      center: "max-xl:text-center max-xl:justify-center max-xl:mx-auto",
      end: "max-xl:text-end max-xl:justify-end max-xl:ms-auto",
    },
  },
});

export type PageType = { type: "page"; href: string };
export type ScrollType = {
  type: "scroll";
  id: string;
  href?: ScrollToIdType["destinationPath"]
};
export type DownloadType = { type: "download"; href: string; filename: string };
export type ExternalType = { type: "external"; href: string; openTab?: boolean };
export type TagType = { type: "tag"; as: ElementType };
export type RenderLinkType = PageType | ScrollType | DownloadType | ExternalType | TagType;

export interface TextProps extends VariantProps<typeof textVariants> {
  value: ReactNode;
  id?: string;
  className?: string;
  render?: RenderLinkType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Text({
  id,
  value,
  className,
  render,
  onClick,
  ...props
}: TextProps) {
  const router = useRouter();
  const pathname = usePathname();

  const isTag = render?.type === "tag";
  const isLink = Boolean(render) && !isTag;

  let Tag: ElementType = isTag ? render.as : isLink ? Link : 'div';
  let tagAttributes: Record<string, unknown> = {};
  ''
  const scroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (render && render.type === "scroll") {
      scrollToId({ id: render.id, currentPath: pathname, destinationPath: (render.href ?? pathname), e, router });
    }
  };

  if (render) {
    if (render.type === "page") {
      tagAttributes = { href: render.href, type: undefined, onClick };
    } else if (render.type === "scroll") {
      Tag = "a";
      tagAttributes = { type: undefined, onClick: scroll };
    } else if (render.type === "download") {
      Tag = "a";
      tagAttributes = {
        href: render.href,
        download: render.filename,
        type: undefined,
        onClick,
      };
    } else if (render.type === "external") {
      const more = (render.openTab === undefined || render.openTab) ? {
        target: "_blank",
        rel: "noopener noreferrer",
      } : {}

      tagAttributes = {
        href: render.href,
        type: undefined,
        onClick,
        ...more
      };
    }
  }

  return (
    <Tag
      {...tagAttributes}
      id={id}
      className={cn(
        isLink && "hover:text-primary",
        textVariants({ ...props }),
        className,
      )}>
      {value}
    </Tag>
  )
}