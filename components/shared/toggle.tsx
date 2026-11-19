'use client'

import { useEffect, useState } from "react";
import { cn, getRootDocument, themeIsDark, windowTheme } from "@/lib/utils";
import { Switch } from "../ui/switch";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Button, buttonVariants } from "../ui/button";
import { ButtonImpl, ButtonImplProps } from "./button-impl";
import { VariantProps } from "class-variance-authority";

export function AppToggle({ className }: { className?: string }) {

    const [checked, setChecked] = useState<boolean>(false)

    useEffect(() => {
        applyTheme(themeIsDark());
        const system = windowTheme()!;

        function setToSystemTheme() {
            if (localStorage.dark === undefined) {
                localStorage.removeItem("dark");
                const isDark = themeIsDark();
                applyTheme(isDark); setChecked(isDark)
            }
        }

        if (localStorage.dark === undefined)
            system.addEventListener("change", setToSystemTheme)

        return () => {
            system.removeEventListener("change", setToSystemTheme)
        }
    }, []);

    useEffect(() => {
        applyTheme(checked)
        localStorage.dark = checked;
    }, [checked])

    function handleToggle(checked: boolean) {
        setChecked(checked)
    }

    function applyTheme(isDark: boolean) {
        isDark
            ? getRootDocument()?.classList.add("dark")
            : getRootDocument()?.classList.remove("dark")
    }

    return (
        <Switch checked={checked} onCheckedChange={handleToggle}
            className={className} />
    )
}

export function ModeToggle({ className }: { className?: string }) {
    const { setTheme } = useTheme()

    return (
        <div className={cn(className)}>
            <DropdownMenu>
                <DropdownMenuTrigger render={
                    <Button variant="outline" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                } />

                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export function ThemeToggle({ className }: { className?: string }) {
    const { resolvedTheme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className={cn("relative", className)}
            aria-label="Toggle theme"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

type SingleToggleProps = Omit<ButtonImplProps, "variant" | "onClick"> & {
    onClick?: () => void;
}

type MultiToggleProps = ButtonImplProps & {
    rootToggle?: boolean;
    toggles: SingleToggleProps[]
    selected?: VariantProps<typeof buttonVariants>["variant"];
    unselected?: VariantProps<typeof buttonVariants>["variant"];
    initialIndex?: number;
    rootClassName?: string;
    onChangeAction?: (index: number) => void;
}

export function MultiToggle({
    rootToggle = false,
    rootClassName,
    initialIndex = 0,
    toggles,
    selected = "default",
    unselected = "ghost",
    onChangeAction,
    ...btnProps
}: MultiToggleProps) {
    const [selectIndex, setSelectIndex] = useState<number>(initialIndex);

    useEffect(() => {
        onChangeAction?.(selectIndex);
    }, [selectIndex]);

    function handleToggle(index: number) {
        let nextIndex: number;

        if (rootToggle) {
            nextIndex = index + 1 < toggles.length ? index + 1 : 0;
        } else {
            nextIndex = index;
        }

        setSelectIndex(nextIndex);

        const next = toggles[nextIndex];
        next?.onClick?.();
    }

    return (
        <div
            onClick={
                rootToggle
                    ? () => handleToggle(selectIndex)
                    : undefined
            }
            className={cn(
                "inline-flex items-center gap-1.5 rounded-lg",
                "border border-border/60 bg-secondary text-secondary-foreground p-1.5",
                rootClassName,
            )}
        >
            {toggles.map((toggle, index) => {
                const { onClick, ...rest } = toggle;

                return (
                    <div
                        key={`${toggle.text}-${index}`}
                        onClick={
                            rootToggle
                                ? undefined
                                : () => {
                                    setSelectIndex(index);
                                    onClick?.();
                                }
                        }>

                        <ButtonImpl
                            aria-selected={index === selectIndex}
                            variant={index === selectIndex ? selected : unselected}
                            className={cn(index === selectIndex && "shadow-sm")}
                            {...btnProps}
                            {...rest}
                        />
                    </div>
                );
            })}
        </div>
    );
}