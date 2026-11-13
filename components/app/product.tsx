import { ProductType } from "@/data/products";
import { ShowAsType as ShowAsType } from "./products";
import { cn } from "cn";
import { FadeOverlay } from "../shared/fade-overlay";
import { Tag } from "../shared/tag";
import AppImage from "../shared/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import Text from "../shared/text";
import { STOREFRONT_ROUTE } from "@/lib/routes";
import { H3 } from "../shared/headings";
import { ArrowUpRight } from "lucide-react";
import { ElementType } from "react";
import { useRouter } from "next/navigation";

type ShowAsCategory = {
    as: Extract<ShowAsType, "category">
    product: ProductType;
    count: number;
}

type ShowAsFeaturePopular = {
    as: Extract<ShowAsType, "featured" | "popular">
    product: ProductType;
}

export interface ProductProps {
    render: ShowAsCategory | ShowAsFeaturePopular;
}

export default function Product({ render }: ProductProps) {
    const router = useRouter();

    const isCategory = render.as === "category";
    const isPopular = render.as === "popular";
    const isFeatured = render.as === "featured"

    const {
        name,
        slug,
        badge,
        tagline,
        category,
        subCategory,
        gender,
        description,
        fullDescription,
        unitPrice,
        isSale,
        stock,
        isActive,
        sizes,
        colors,
        wholesaleTiers,
        details,
        rating,
    } = render.product;

    const tagAttribute = isCategory ? {
        onClick: () => router.push(STOREFRONT_ROUTE)
    } : {}

    return (
        <Card data-slot="product"
            className={cn("@container p-0! gap-0! aspect-2/2.5 group/product shadow-sm md:shadow-md lg:shadow-lg",
                isCategory && "relative min-w-60  sm:min-w-60 hover:cursor-pointer",
            )}
            {...tagAttribute}
        >
            <CardHeader className={cn("p-0 overflow-hidden",
                !isCategory && "relative",
                isFeatured ? "h-6/10" : isPopular && "h-5/10"
            )}>
                <Image
                    src={"/image/jacket.jpg"}
                    alt={colors[0].image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 340px"
                    className={cn("object-cover scale-101 group-hover/product:scale-105 transition-all duration-300 ease-in-out",
                        isCategory && ["object-top group-hover/product:scale-110 group-active/product:scale-100 duration-500"],
                    )}
                />

                <Text
                    tracking={'wider'}
                    weight={'semibold'}
                    value={badge}
                    variant={"outline"}
                    className={cn("w-fit absolute z-10 p-0!",
                        isCategory && "inset-x-0 top-[10cqi] left-[10cqi]",
                        !isCategory && "inset-x-0 top-[5cqi] left-[5cqi]",
                        "pb-[1cqh]! pt-[1.1cqh]! sm:py-[1.5cqh]! px-[6cqw]! sm:px-[8cqw]! border-[0.5cqi]",
                        "text-[4cqw] sm:text-[3.5cqw]",
                    )}
                />

            </CardHeader>

            <CardContent className={cn("z-10 p-0",
                isCategory && "absolute bottom-0 text-white",
            )}>

                {isCategory && <CategoryContent product={render.product} />}

                {isFeatured || isPopular && (
                    <>

                    </>
                )}
            </CardContent>

            {isCategory && <FadeOverlay
                height="h-full"
                from="from-black"
                via="via-black/50"
                className=""
            />}
        </Card>
    );
}

function CategoryContent({ product }: { product: ProductType }) {
    const { category, tagline } = product;
    return (
        <div className="space-y-[6cqw] overflow-hidden px-[10cqw] pb-[10cqw]">
            <H3 title={category}
                tracking={'wide'}
                color={'white'}
                className="group-hover/product:text-primary text-[12cqw]!"
            />

            <Text
                tracking={'wider'}
                value={tagline}
                color={'gray'}
                className="text-[5cqw]!"
            />
        </div>
    );
}
