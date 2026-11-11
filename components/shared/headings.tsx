import { cva, VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ElementType, ReactNode } from "react";
import Text, { textVariants } from "./text";

export const HeaderVariants = cva("", {
    variants: {
        titleSize: {
            hero: "text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase",
            h1: "text-4xl sm:text-5xl font-extrabold",
            h2: "text-3xl sm:text-4xl font-bold",
            h3: "text-2xl sm:text-3xl font-bold",
            h4: "text-xl sm:text-2xl font-bold",
            h5: "text-lg sm:text-xl font-bold",
            h6: "text-sm sm:text-base font-bold",
            h7: "text-xs sm:text-sm font-bold",
        },
        subtitleSize: {
            h1: "text-lg sm:text-xl text-muted-foreground",
            h2: "text-base sm:text-lg text-muted-foreground",
            h3: "text-base text-muted-foreground",
            h4: "text-sm sm:text-base text-muted-foreground",
            h5: "text-sm text-muted-foreground",
            h6: "text-xs sm:text-sm text-muted-foreground",
            h7: "text-[0.5rem] sm:text-xs text-muted-foreground",
        },
        gap: {
            hero: "gap-3 sm:gap-4",
            h1: "gap-4 sm:gap-5",
            h2: "gap-3.5 sm:gap-4",
            h3: "gap-3 sm:gap-3.5",
            h4: "gap-2.5 sm:gap-3",
            h5: "gap-2 sm:gap-2.5",
            h6: "gap-1 sm:gap-1.5",
            h7: "gap-0.5 sm:gap-1",
        },
    },
});

export type HeadingProps = VariantProps<typeof textVariants> & {
    id?: string;

    as?: ElementType;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    size?: "hero" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    titleSize?: "hero" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7";
    subtitleSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7";

    icon?: ReactNode;
    iconPosition?: "left" | "right";
    rootClassName?: string;

    title: ReactNode;
    titleProps?: VariantProps<typeof textVariants>
    titleClassName?: string;

    subtitle?: ReactNode;
    subtitleProps?: VariantProps<typeof textVariants>
    subtitleClassName?: string;

    children?: ReactNode;
    childrenClassName?: string;

    maxWidth?: boolean;
};

function Heading({
    id, as, level = 2, size, titleSize, subtitleSize, icon, iconPosition = "left",
    rootClassName, title, titleProps, titleClassName,
    subtitle, subtitleProps, subtitleClassName, children, childrenClassName, maxWidth,
    ...headingTextProps
}: HeadingProps) {
    const hasTitle = title !== undefined && title !== null && title !== "";

    if (!hasTitle) return null;
    const hasSubtitle = subtitle !== undefined && subtitle !== null && subtitle !== "";

    const Tag = (as ?? (`h${level}` as ElementType)) as ElementType;
    const visualSize = titleSize ?? size ?? (`h${level}` as const);
    const visualSubtitleSize =
        subtitleSize ?? (size === "hero" ? undefined : size) ?? (`h${level}` as const);

    return (
        <div className={cn("flex flex-col", HeaderVariants({ gap: visualSize }), rootClassName)}>
            <Text
                id={id}
                render={{ type: "tag", as: Tag }}
                className={cn(
                    "flex items-center gap-4 text-foreground capitalize tracking-tight truncate text-wrap",
                    HeaderVariants({
                        titleSize: visualSize,
                    }),
                    titleClassName,
                )}
                value={
                    <>
                        {icon && iconPosition === "left" && (
                            <span className="flex items-center justify-center">{icon}</span>
                        )}

                        {title}

                        {icon && iconPosition === "right" && (
                            <span className="flex items-center justify-center">{icon}</span>
                        )}
                    </>
                }
                {...headingTextProps}
                {...titleProps}
            />

            {hasSubtitle && (
                <Text render={{ type: "tag", as: "div" }} value={subtitle}
                    className={cn("leading-relaxed",
                        HeaderVariants({
                            subtitleSize: visualSubtitleSize,
                        }),
                        maxWidth && "max-w-8/10 sm:max-w-8/10 md:max-w-7/10 lg:max-w-8/10",
                        subtitleClassName)}
                    {...headingTextProps}
                    {...subtitleProps}
                />
            )}

            {children && (
                <div className={cn("mt-4 space-y-5", childrenClassName)}>{children}</div>
            )}
        </div>
    );
}

export function H1(props: HeadingProps) { return <Heading level={1} {...props} />; }
export function H2(props: HeadingProps) { return <Heading level={2} {...props} />; }
export function H3(props: HeadingProps) { return <Heading level={3} {...props} />; }
export function H4(props: HeadingProps) { return <Heading level={4} {...props} />; }
export function H5(props: HeadingProps) { return <Heading level={5} {...props} />; }
export function H6(props: HeadingProps) { return <Heading level={6} {...props} />; }