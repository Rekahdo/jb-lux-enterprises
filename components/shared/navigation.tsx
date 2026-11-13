'use client'

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "cn";
import NextLink from "next/link";
import { ElementType, MouseEvent, ReactNode, useEffect, useState } from "react";
import { HEADER_ID } from "../section/header-section";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname, useRouter } from "next/navigation";
import Text, { scrollToId, ScrollToIdType } from "./text";

interface NavLinkBase {
    href: string;
    label: string;
    icon?: ReactNode;
    description?: string;
    disabled?: boolean;
}

interface NavPageLink extends NavLinkBase {
    type: "page";
}

interface NavScrollLink extends NavLinkBase {
    type: "scroll";
    path: string;
}

interface NavDownloadLink extends NavLinkBase {
    type: "download";
    filename: string;
}

interface NavExternalLink extends NavLinkBase {
    type: "external";
}

type NavLink =
    | NavPageLink
    | NavScrollLink
    | NavDownloadLink
    | NavExternalLink;

export interface NavItem {
    label?: string;
    link?: NavLink;
    links?: NavLink[];
}

interface NavigationProps {
    className?: string;
    linkClassName?: string;
    activeClassName?: string;
    side?: 'start' | 'center' | 'end';
    navItems: NavItem[];
    onNavigateAction?: () => void;
}

export const navigationVariants = cva(
    cn(),
    {
        variants: {
            textSize: {
                xxs: "text-[0.7rem]!",
                xs: "text-xs!",
                sm: "text-sm!",
                lg: "text-lg!",
            },
            textCase: {
                capitalize: "capitalize",
                lowercase: "lowercase",
                uppercase: "uppercase",
            },
            textAlign: {
                start: "text-start justify-start",
                center: "text-center justify-center",
                end: "text-end justify-end",
            },
            height: {
                none: "py-0!",
                xs: "py-3!",
                sm: "py-4!",
                default: "py-5!",
                lg: "py-6!",
            },
            width: {
                none: "px-0!",
                '2xs': "px-2.5!",
                xs: "px-3!",
                sm: "px-4!",
                lg: "px-5!",
                full: "w-full",
            },
            gap: {
                none: "gap-x-0 lg:gap-x-0 gap-y-0",
                xxs: "gap-x-0.5 lg:gap-x-1 gap-y-1",
                xs: "gap-x-1 lg:gap-x-2 gap-y-1",
                sm: "gap-x-2 lg:gap-x-3 gap-y-1",
                md: "gap-x-3 lg:gap-x-4 gap-y-1",
                lg: "gap-x-4 lg:gap-x-6 gap-y-1",
            },
            orientation: {
                vertical: "flex flex-col",
                horizontal: "flex flex-row items-center",
            },
            side: {
                start: "data-[orie=horizontal]:justify-start data-[orie=vertical]:items-start",
                center: "data-[orie=horizontal]:justify-center data-[orie=vertical]:items-center",
                end: "data-[orie=horizontal]:justify-end data-[orie=vertical]:items-end",
            },
        },
        defaultVariants: {
            height: "default"
        }
    }
);

export function Navigation({ className, linkClassName, activeClassName, side, navItems, onNavigateAction, ...variants }:
    NavigationProps & VariantProps<typeof navigationVariants>) {
    const pathname = usePathname();

    const [activeLabel, setActiveLabel] = useState<string | undefined>(undefined)

    useEffect(() => {
        const item = navItems.find(item => {
            const link = item.links?.find(link => link.href === pathname)
            return link ?? undefined
        })
        setActiveLabel(item?.label);
    }, [pathname])

    const noLabel = navItems.findIndex(item => Boolean(item.links) && !Boolean(item.label));
    if (noLabel !== -1) throw new Error(`NavItem with index '${noLabel}' must have a label`);

    const noLink = navItems.find(item => !Boolean(item.link) && !Boolean(item.links));
    if (noLink) throw new Error(`${noLink.label} NavItem has neither a link or links`);

    const styleLinkClassName = cn("py-! h-0!",
        "w-full bg-transparent! text-muted-foreground! transition-none!",
        "hover:bg-transparent! dark:hover:bg-transparent! hover:text-muted-foreground!",
        "focus:bg-transparent! dark:focus:bg-transparent! focus:text-muted-foreground!",
        "active:bg-transparent! active:hover:bg-transparent! active:text-muted-foreground!",
        linkClassName ?? cn(
            "hover:bg-foreground/5! dark:hover:bg-foreground/20! hover:text-foreground/70!",
        )
    )

    const styleActiveClassName = activeClassName ?? cn(
        "bg-primary! text-primary-foreground!",
        "hover:bg-primary! hover:text-primary-foreground!",
        "focus:bg-primary! focus:text-primary-foreground!",
        "active:bg-primary! active:text-primary-foreground!",
    )

    const NavMenuLink = ({ link, fromList }: { link: NavLink, fromList: boolean }) => (
        <NavigationMenuLink
            className={cn(
                styleLinkClassName,
                link?.href === pathname && styleActiveClassName,
                navigationVariants({
                    width: variants.width,
                    height: variants.height,
                }),
            )}
            render={
                <NavigationLink fromList={fromList} link={link!} onNavigateAction={onNavigateAction}
                    textCase={variants.textCase} textSize={variants.textSize}
                    textAlign={variants.textAlign} />
            }
        />
    )

    return (
        <NavigationMenu className={cn("w-full flex max-w-full bg-transparent! border-0!", className)}>
            <NavigationMenuList data-side={side} data-orie={variants.orientation}
                className={cn(
                    navigationVariants({
                        gap: variants.gap, orientation: variants.orientation, side
                    }),
                    "flex-wrap py-0!")}>

                {navItems.map((item, i) => (
                    <NavigationMenuItem key={i} className={cn(variants.width === 'full' ? "w-full" : "w-fit")}>

                        {Boolean(item.links) ?
                            <>
                                <NavigationMenuTrigger className={cn("font-medium",
                                    styleLinkClassName,
                                    activeLabel === item.label && styleActiveClassName,
                                    navigationVariants({
                                        width: variants.width,
                                        height: variants.height,
                                    }),
                                )}>
                                    <Text value={item.label} />
                                </NavigationMenuTrigger>

                                <NavigationMenuContent className={"p-2 shadow-xl backdrop-blur-md"}
                                    render={
                                        <ul className={"rounded-xl min-w-44 flex flex-col gap-2 p-4"}>
                                            {item.links?.map((link, i) => (
                                                <li key={i} onClick={() => setActiveLabel(item.label!)}>
                                                    <NavigationMenuLink
                                                        className={cn(
                                                            styleLinkClassName,
                                                            link?.href === pathname && styleActiveClassName,
                                                        )}
                                                        render={
                                                            <NavigationLink fromList={true} link={link!} onNavigateAction={onNavigateAction}
                                                                textCase={variants.textCase} textSize={variants.textSize}
                                                                textAlign={variants.textAlign} />
                                                        }
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    }
                                />
                            </> :

                            <NavigationMenuLink
                                className={cn(
                                    styleLinkClassName,
                                    item.link?.href === pathname && styleActiveClassName,
                                    navigationVariants({
                                        width: variants.width,
                                        height: variants.height,
                                    }),
                                )}
                                render={
                                    <NavigationLink fromList={false} link={item.link!} onNavigateAction={onNavigateAction}
                                        textCase={variants.textCase} textSize={variants.textSize}
                                        textAlign={variants.textAlign} />
                                }
                            />
                        }
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export function NavigationLink({ className, link, onNavigateAction, width, height, textAlign, fromList, }: {
    className?: string;
    fromList?: boolean;
    link: NavLink;
    onNavigateAction?: () => void;
    width?: VariantProps<typeof navigationVariants>['width'];
    height?: VariantProps<typeof navigationVariants>['height'];
    textCase?: VariantProps<typeof navigationVariants>['textCase'];
    textSize?: VariantProps<typeof navigationVariants>['textSize'];
    textAlign?: VariantProps<typeof navigationVariants>['textAlign'];
}) {

    const router = useRouter()
    const pathname = usePathname();

    const Tag = (link.type === "download" ? 'a' : NextLink) as ElementType;
    const downloadAttributes = link.type === "download" ? { download: link.filename } : {};
    const externalAttributes = link.type === "external" ? { target: "_blank", rel: "noopener noreferrer" } : {};
    const hrefAttributes = link.type === "scroll" ? { href: `#${link.href.replace(/^#/, "")}` } : { href: link.href };
    const scrollAttributes = link.type === "scroll"
        ? {
            onClick: (e: MouseEvent<HTMLAnchorElement>) => scrollToId({
                destinationPath: link.path, id: link.href, onNavigateAction, e,
                currentPath: pathname, router
            })
        }
        : { onClick: onNavigateAction };

    return (
        <Tag
            {...downloadAttributes}
            {...externalAttributes}
            {...hrefAttributes}
            {...scrollAttributes}
            className={cn(
                navigationVariants({ textAlign, width, height }),
                "flex flex-row items-center gap-2 transition-all",
                "hover:text-primary focus-visible:text-primary",
                className
            )}
        >
            {link.icon && (
                <span className="size-4 shrink-0">
                    {link.icon}
                </span>
            )}

            <div className="flex flex-col items-start text-start gap-0.5 text-xs sm:text-sm max-w-lg">
                <Text value={link.label} />

                {(fromList && link.description) && (
                    <Text
                        value={link.description}
                        size={'xs'}
                        color={'muted'}
                        weight={'normal'}
                        className="line-clamp-2"
                    />
                )}
            </div>
        </Tag>
    );
}




/*
DECLARATION SAMPLE

const navItems: NavItem[] = [
    { link: { type: "page", href: ROOT_ROUTE, label: "Collection" } },
    { link: { type: "page", href: STOREFRONT_ROUTE, label: "Storefront & Wholesale" } },
    { link: { type: "page", href: FLAGSHIP_ROUTE, label: "Lagos Flagship" } },
    { link: { type: "page", href: CONTACT_ROUTE, label: "Direct Contact" } },
];
*/