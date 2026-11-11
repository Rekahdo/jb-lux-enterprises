import { SideSheet } from "../shared/side-sheet";
import { Header } from "../shared/header";
import { Logo } from "../shared/logo";
import { Navigation, NavItem } from "../shared/navigation";
import { buttonVariants } from "../ui/button";
import { cn } from "cn";
import { backDropBlur } from "../shared/_css";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { LoginBtn, LogoutBtn, ProfileBtn, SignUpBtn, ThemeBtn } from "../shared/app-btns";
import { ButtonImpl, buttonImplVariants, DownloadExternalBtn } from "../shared/button-impl";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { headerData } from "@/data/header";
import { CART_ROUTE, CONTACT_ROUTE, FLAGSHIP_ROUTE, ORDERS_ROUTE, POLICY_ROUTE, PRODUCTS_ROUTE, ROOT_ROUTE, STOREFRONT_ROUTE } from "@/lib/routes";
import { AppIcon } from "../shared/icon";
import { User } from "lucide-react";
import { Container } from "../shared/container";

export const HEADER_ID = "header";

export const navItems: NavItem[] = [
    { link: { type: "page", href: ROOT_ROUTE, label: "Collection" } },
    { link: { type: "page", href: STOREFRONT_ROUTE, label: "Storefront & Wholesale" } },
    { link: { type: "page", href: FLAGSHIP_ROUTE, label: "Lagos Flagship" } },
    { link: { type: "page", href: CONTACT_ROUTE, label: "Direct Contact" } },
];

export async function HeaderSection() {
    const cv = await headerData;


    return (
        <Container
            id={HEADER_ID}
            as={"header"}
            py={'xs'}
            height={'header'}
            sticky={'top'}
            containerClassName="px-base"
            rootClassName={cn("border-b border-border/50", backDropBlur.background)}
        >
            <Header
                headerLeft={
                    <Logo size={'header'} />
                }

                headerCenter={
                    <Navigation
                        navItems={navItems}
                        width={"none"}
                        height={'sm'}
                        gap={"lg"}
                        className="max-lg:hidden"
                        linkClassName="border-y-2! border-transparent rounded-none! hover:border-b-primary/50"
                        activeClassName="text-primary! border-b-primary hover:border-b-primary hover:text-primary!"
                    />
                }

                headerRight={
                    <div className="flex items-center gap-2.5 sm:gap-3">
                        <ThemeBtn className="max-lg:hidden" />
                        <SignUpBtn />
                        <LoginBtn />
                        <ProfileBtn />
                        <LogoutBtn />

                        <SideSheet
                            navItems={navItems}
                        />
                    </div>
                }
            />

        </Container>
    );
};
