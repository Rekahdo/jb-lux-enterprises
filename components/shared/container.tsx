import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'
import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export const containerVariants = cva(
    cn(''),
    {
        variants: {
            sticky: {
                top: "sticky top-0 z-50"
            },
            bg: {
                background: "bg-background text-foreground",
                foreground: "bg-foreground text-background",
                secondary: "bg-secondary text-secondary-foreground",
                muted: "bg-muted text-muted-foreground",
                footer: "bg-foreground text-background dark:bg-background dark:text-foreground",
            },
            py: {
                none: "py-0",
                xs: "py-2",
                section: "py-section",
            },
            px: {
                none: "px-0",
                section: "px-section",
            },
            height: {
                header: "min-h-[8vh]",
                hero: "min-h-[85dvh] justify-center",
                full: 'h-dvh',
                fit: 'h-fit',
            },
            width: {
                default: "max-w-450",
            },
            direction: {
                row: "flex-row",
                col: "flex-col",
            },
            place: {
                center: "justify-center items-center",
                top: "justify-start items-center",
                bottom: "justify-end items-center",
                left: "justify-center items-start",
                right: "justify-center items-end",
                topLeft: "justify-start items-start",
                topRight: "justify-start items-end",
                bottomLeft: "justify-end items-start",
                bottomRight: "justify-end items-end",
            },
            bgAttach: {
                fixed: "bg-fixed"
            },
            bgImage: {
                hero: "bg-[url(/images/bg/hero.svg)] bg-no-repeat bg-bottom-left bg-scroll",
            },
        },
    }
)

type ContainerProps = VariantProps<typeof containerVariants> & {
    as?: ElementType;
    id?: string;

    rootClassName?: string;
    containerClassName?: string;
} & Omit<HTMLAttributes<HTMLElement>, "id">;

export function Container({
    id,
    as: Tag = "section",
    children,
    rootClassName,
    containerClassName,
    bg: bg = 'background',
    px = "section",
    py = "section",
    width = "default",
    height,
    sticky,
    direction = "col",
}: Omit<ContainerProps, "className">) {
    return (
        <Tag id={id}
            className={cn("flex rounded-none *:grow min-w-87.5 items-center justify-center relative",
                containerVariants({
                    bg, py, px, height, sticky,
                }),
                rootClassName,
            )}>

            <div className={cn("flex w-full",
                containerVariants({
                    width, direction
                }),
                containerClassName
            )}>
                {children}
            </div>
        </Tag>
    );
}