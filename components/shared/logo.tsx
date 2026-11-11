import { cva, VariantProps } from "class-variance-authority";
import AppImage, { ImageProps } from "./image";
import { cn } from "cn";
import { ROOT_ROUTE } from "@/lib/routes";
import Text from "./text";

const logoVariants = cva(cn(), {
    variants: {
        size: {
            header: "w-10 sm:w-12 md:w-14",
            "side-sheet": "",
            footer: "w-10 sm:w-12 md:w-14",
        },
    }
})

export function Logo({ width = 100, height = 100, eager = true, size, ...props }
    : Omit<ImageProps, "src" | "alt" | "variant"> & VariantProps<typeof logoVariants>) {
    const light = "/image/logo.svg";
    const alt = "Rekahdo.dev Logo";

    return (
        <a href={ROOT_ROUTE} className="flex items-center gap-2 group/logo">
            <AppImage
                src={light}
                alt={alt}
                width={width}
                height={height}
                eager
                rootClassName={cn(logoVariants({ size: size }))}
                {...props}
            />

            <div className="uppercase text-nowrap *:transition-colors">
                <Text
                    value={"JB LUX"}
                    size={"sm"} 
                    weight={"extrabold"}
                    font={'serif'}
                    className={cn(
                        "tracking-[0.15em] sm:text-xl md:text-2xl",
                        size === "header" && "text-foreground group-hover/logo:text-primary",
                        size === "footer" && "text-white"
                    )}
                />

                <Text
                    value={"Enterprises"}
                    size={"3xs"} 
                    color={"primary"}
                    weight={"semibold"}
                    className="tracking-[0.16em] sm:text-[10px] md:text-xs"
                />
            </div>
        </a>
    );
}
