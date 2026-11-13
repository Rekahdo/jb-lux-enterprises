'use client'

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ElementType, ReactNode } from "react";
import Text, { textVariants } from "./text";

export const HeaderVariants = cva("", {
    variants: {
        gap: {
            hero: "gap-3 sm:gap-4",
            h1: "gap-0 sm:gap-1",
            h2: "gap-0 sm:gap-1",
            h3: "gap-0 sm:gap-1",
            h4: "gap-0 sm:gap-1",
            h5: "gap-0 sm:gap-1",
            h6: "gap-0 sm:gap-1",
            h7: "gap-0 sm:gap-1",
        },
    },
});

export type HeadingProps = VariantProps<typeof textVariants> & {
    id?: string;

    as?: ElementType;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    rootClassName?: string;

    icon?: ReactNode;
    iconPosition?: "left" | "right";

    overline?: ReactNode;
    overlineProps?: VariantProps<typeof textVariants>
    overlineClassName?: string;

    title: ReactNode;
    className?: string;

    subtitle?: ReactNode;
    subtitleProps?: VariantProps<typeof textVariants>
    subtitleClassName?: string;

    children?: ReactNode;
    childrenClassName?: string;

    maxWidth?: boolean;
};

function Heading({
    id, as, level = 2, icon, iconPosition = "left",
    rootClassName,
    overline, overlineProps, overlineClassName,
    title, className,
    subtitle, subtitleProps, subtitleClassName,
    children, childrenClassName, maxWidth,
    size = `h${level}`,
    tracking = "tight",
    wrap = true,
    truncate = false,
    ...variantProps
}: HeadingProps) {
    const hasTitle = title !== undefined && title !== null && title !== "";

    if (!hasTitle) return null;

    const Tag = (as ?? (`h${level}` as ElementType)) as ElementType;

    return (
        <div className={cn("flex flex-col", rootClassName)}>
            {overline && (
                <Text
                    value={overline}
                    casing={'upper'}
                    color={'primary'}
                    font={'mono'}
                    className={cn(
                        overlineClassName
                    )}
                    {...overlineProps}
                />
            )}

            <Text
                id={id}
                render={{ type: "tag", as: Tag }}
                font={'serif'}
                size={size}
                wrap={wrap}
                truncate={truncate}
                tracking={tracking}
                className={cn(
                    "flex items-center gap-4",
                    className,
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
                {...variantProps}
            />

            {subtitle && (
                <Text value={subtitle}
                    render={{ type: "tag", as: "div" }}
                    font={'sans'}
                    className={cn("leading-relaxed", subtitleClassName)}
                    {...subtitleProps}
                />
            )}

            {children && (
                <div className={cn("mt-4 space-y-5", childrenClassName)}>{children}</div>
            )}
        </div>
    );
}

export function H1(props: HeadingProps) {
    return <Heading
        level={1}
        {...props}
    />;
}

export function H2(props: HeadingProps) {
    return <Heading
        level={2}
        rootClassName="gap-1"
        overlineClassName="text-xs sm:text-sm"
        subtitleClassName="text-sm sm:text-base max-w-150"
        {...props}
    />;
}

export function H3(props: HeadingProps) {
    return <Heading
        level={3}
        {...props}
    />;
}

export function H4(props: HeadingProps) {
    return <Heading
        level={4}
        {...props}
    />;
}

export function H5(props: HeadingProps) {
    return <Heading
        level={5}
        {...props}
    />;
}

export function H6(props: HeadingProps) {
    return <Heading
        level={6}
        {...props}
    />;
}