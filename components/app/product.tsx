import { ProductType } from "@/data/products";
import { cn } from "cn";
import { FadeOverlay } from "../shared/fade-overlay";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import Text from "../shared/text";
import { STOREFRONT_ROUTE } from "@/lib/routes";
import { useRouter } from "next/navigation";

export interface ProductProps {
    as: "default" | "popular" | "featured";
    product: ProductType;
}

export default function Product({ as, product }: ProductProps) {
    if (!product) return null;
    
    const router = useRouter();

    const isDefault = as === "default";
    const isPopular = as === "popular";
    const isFeatured = as === "featured";

    const { badge, tagline, colors, name } = product;

    const primaryImage = colors[0]?.image;

    return (
        <Card
            data-slot="product"
            onClick={
                isDefault ? () => router.push(STOREFRONT_ROUTE) : undefined
            }
            className={cn(
                "@container p-0! gap-0! aspect-2/2.5 group/product shadow-sm md:shadow-md lg:shadow-lg",
                isDefault && "relative min-w-60 sm:min-w-60 hover:cursor-pointer",
            )}
        >
            <CardHeader
                className={cn(
                    "p-0 overflow-hidden",
                    !isDefault && "relative",
                    isFeatured && "h-6/10",
                    isPopular && "h-5/10",
                    isDefault && "h-full", // fallback so `fill` image has a box
                )}
            >
                <Image
                    src={primaryImage?.src ?? "/image/jacket.jpg"}
                    alt={primaryImage?.alt ?? name ?? "Product image"}
                    fill
                    sizes="(max-width: 768px) 100vw, 340px"
                    className={cn(
                        "object-cover scale-101 group-hover/product:scale-105 transition-all duration-300 ease-in-out",
                        isDefault &&
                        "object-top group-hover/product:scale-110 group-active/product:scale-100 duration-500",
                    )}
                />

                {badge && (
                    <Text
                        tracking="wider"
                        weight="semibold"
                        value={badge}
                        variant="outline"
                        className={cn(
                            "w-fit absolute z-10 p-0!",
                            isDefault
                                ? "inset-x-0 top-[10cqi] left-[10cqi]"
                                : "inset-x-0 top-[5cqi] left-[5cqi]",
                            "pb-[1.5cqh]! pt-[1.6cqh]! sm:py-[1.5cqh]! px-[6cqw]! sm:px-[8cqw]! border-[0.5cqi]",
                            "text-[4cqw] sm:text-[3.5cqw]",
                        )}
                    />
                )}
            </CardHeader>

            <CardContent
                className={cn(
                    "z-10 p-0",
                    isDefault && "absolute bottom-0 text-white",
                )}
            >
                {isDefault && <DefaultContent tagline={tagline} />}

                {isFeatured && <FeaturedContent product={product} />}
                {isPopular && <PopularContent product={product} />}
            </CardContent>

            {isDefault && (
                <FadeOverlay
                    height="h-full"
                    from="from-black"
                    via="via-black/50"
                    className=""
                />
            )}
        </Card>
    );
}

function DefaultContent({ tagline }: { tagline: string }) {
    return (
        <div className="space-y-[6cqw] overflow-hidden px-[10cqw] pb-[10cqw]">
            <Text
                tracking="wider"
                value={tagline}
                color="gray"
                className="text-[5cqw]!"
            />
        </div>
    );
}

function FeaturedContent({ product }: { product: ProductType }) {
    return null;
}

function PopularContent({ product }: { product: ProductType }) {
    return null;
}