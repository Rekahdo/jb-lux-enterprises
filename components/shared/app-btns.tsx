'use client'

import { Authenticated, Unauthenticated } from "convex/react";
import { ButtonImpl, ButtonImplProps, ButtonVariantProps } from "./button-impl";
import { ArrowRight, LogOut } from "lucide-react";
import { useTransition } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { DialogLoginForm, DialogSignUpForm } from "./auth-forms";
import { ErrorType } from "@/convex/errors";
import { User } from "lucide-react";
import { buttonImplVariants } from "../shared/button-impl";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "../ui/button";
import { cn } from "cn";
import { PROFILE_ROUTE, STOREFRONT_ROUTE } from "@/lib/routes";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

const btnSize = "lg";
const iconSize = `icon-${btnSize}`;

export interface ClassName {
    className?: string
}

export interface ButtonsProps extends ButtonImplProps, ButtonVariantProps, ClassName {

}

export function ThemeBtn({ className, ...props }: ButtonsProps) {
    return (
        <AnimatedThemeToggler className={cn(
            buttonVariants({
                variant: 'outline',
                size: iconSize,
                ...props
            }),
            className
        )} />
    );
}

export function SignUpBtn({ className, ...props }: ButtonsProps) {
    return (
        <Unauthenticated>
            <DialogSignUpForm className={className} buttonProps={{
                showTextAt: "sm",
                size: btnSize,
                ...props
            }} />
        </Unauthenticated>
    )
}

export function LoginBtn({ className, ...props }: ButtonsProps) {
    return (
        <Unauthenticated>
            <DialogLoginForm className={className} buttonProps={{
                showTextAt: "md",
                size: btnSize,
                variant: 'outline',
                ...props
            }} />
        </Unauthenticated>
    )
}

export function LogoutBtn({ className, ...props }: ButtonsProps) {
    const [isPending, startTransition] = useTransition();

    function logout() {
        startTransition(async () => {
            await authClient.signOut({
                fetchOptions: {
                    onSuccess: () => {
                        toast.success("Logged out successfully");
                    },
                    onError: (error: ErrorType) => {
                        toast.error(error.error.message)
                    }
                }
            })
        })
    }

    return (
        <Authenticated>
            <ButtonImpl
                text="Logout"
                variant={'outline'}
                onClick={logout}
                isPending={isPending}
                icon={<LogOut />}
                showTextAt="sm"
                height={'md'}
                className={className}
                size={btnSize}
                {...props}
            />
        </Authenticated>
    )
}

export function ProfileBtn({ className, ...props }: ButtonsProps) {
    return (
        <Authenticated>
            <ButtonImpl
                text="Account"
                icon={<User />}
                size={btnSize}
                variant={'outline'}
                className={cn(className)}
                render={{
                    type: "page",
                    href: PROFILE_ROUTE
                }}
                {...props}
            />
        </Authenticated>
    );
}


export function ExploreCollectionBtn({ className, ...props }: ButtonsProps) {
    return (
        <ButtonImpl
            side="right"
            text="Explore Collections"
            icon={<ArrowRight />}
            height={'lg'}
            className={cn(className)}
            render={{
                type: "page",
                href: STOREFRONT_ROUTE
            }}
            {...props}
        />
    );
}

export function WholesaleBtn({ className, ...props }: ButtonsProps) {
    return (
        <ButtonImpl
            side="right"
            text="Wholesare"
            variant={'outline'}
            height={'lg'}
            className={cn(className)}
            render={{
                type: "page",
                href: STOREFRONT_ROUTE
            }}
            {...props}
        />
    );
}


export default function CtaBtns({ className }: ClassName) {
    return (
        <div className={cn("flex flex-wrap gap-4 items-center *:grow *:min-w-60 w-8/10 xs:w-7/10 sm:w-fit", className)}>
            <ExploreCollectionBtn />
            <WholesaleBtn />
        </div>
    );
}