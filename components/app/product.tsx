import { ProductType } from "@/data/products";
import { cn } from "cn";
import { FadeOverlay } from "../shared/fade-overlay";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import Text, { TextProps } from "../shared/text";
import { STOREFRONT_ROUTE } from "@/lib/routes";
import { useRouter } from "next/navigation";
import { ShoppingCartPlus, Star } from "lucide-react";
import { calculateRating } from "@/lib/rating";
import { convertCurrency } from "@/app/action/currency";
import { convertCent } from "@/lib/current";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { ButtonImpl } from "../shared/button-impl";

export interface ProductProps {
    as: "default" | "popular" | "featured";
    product: ProductType;
    isWholesale?: boolean;
}

export default function Product({ as, product, isWholesale = true }: ProductProps) {
    if (!product) return null;

    const router = useRouter();

    const isDefault = as === "default";
    const isPopular = as === "popular";
    const isFeatured = as === "featured";

    const { badge, colors, name, wholesaleTiers, unitPrice, retailDiscount, isSale } = product;

    const retailPrice = convertCent({ amountInCents: unitPrice, currency: "NGN", discount: retailDiscount });
    const wholesalePrice = wholesaleTiers ? convertCent({ amountInCents: unitPrice, currency: "NGN", discount: wholesaleTiers[0].discountPercentage }) : undefined;

    return (
        <Card
            data-slot="product"
            onClick={
                isDefault ? () => router.push(STOREFRONT_ROUTE) : undefined
            }
            className={cn(
                "@container p-0! gap-0! group/product hover:shadow-2xl",
                isDefault && "relative min-w-60 sm:min-w-60 hover:cursor-pointer",
            )}
        >
            <CardHeader
                className={cn(
                    "p-0 overflow-hidden",
                    !isDefault && "relative",
                    isFeatured && "aspect-4/3",
                    isPopular && "aspect-4/2.5",
                )}
            >
                <Image
                    src={colors[0]?.image?.src ?? "/image/jacket.jpg"}
                    alt={colors[0]?.image?.alt ?? name ?? "Product image"}
                    fill
                    sizes="(max-width: 768px) 100vw, 340px"
                    className={cn(
                        "object-cover scale-101 group-hover/product:scale-105 transition-transform duration-300 ease-in-out",
                        isDefault &&
                        "object-top group-hover/product:scale-110 group-active/product:scale-100 duration-500",
                    )}
                />

                {(isSale || badge || (isFeatured && wholesaleTiers && isWholesale)) && (
                    <div className="absolute top-[5cqi] left-[5cqi] flex flex-col gap-[2cqi]">
                        {(isPopular && isSale) && (
                            <ProductTag value={"sale"} tag={'destructive'} />
                        )}

                        {badge && (
                            <ProductTag value={badge} />
                        )}

                        {(isFeatured && wholesaleTiers && isWholesale) && (
                            <ProductTag value={`Wholesale tier - ${wholesalePrice?.discount}%`} tag={'primary'} />
                        )}
                    </div>
                )}

            </CardHeader>

            <CardContent
                className={cn(
                    "z-10 p-[6cqi] flex flex-col gap-[1cqh] sm:gap-[1.5cqh]",
                    isDefault && "absolute bottom-0 text-white",
                )}
            >
                <ProductContentTop product={product} isFeatured={isFeatured} isPopular={isPopular} />
                <ProductTitleDescription product={product} isPopular={isPopular} />
                {isFeatured && <ProductContentRating product={product} />}
            </CardContent>

            <CardFooter className="mx-[6cqi] bg-transparent p-0 py-[6cqi]">
                <div className="flex justify-between items-center w-full">
                    <div>
                        <div className="flex gap-[4cqw]">
                            <Text
                                value={retailDiscount !== 0 ? retailPrice.unitPrice : "Retail"}
                                className={cn("text-[5cqi] sm:text-[3.5cqi] opacity-50",
                                    retailDiscount !== 0 && "line-through"
                                )}
                                weight={'medium'}
                                font={'mono'}
                                color={'gray'}
                                tracking={'wider'}
                                number
                            />

                            {retailDiscount !== 0 && (
                                <Text
                                    value={`${retailPrice.discount}%-off`}
                                    className={cn(
                                        "text-[5cqi] sm:text-[3.5cqi] opacity-50",
                                    )}
                                    weight={'medium'}
                                    font={'mono'}
                                    color={'gray'}
                                    tracking={'wider'}
                                    number
                                />
                            )}

                        </div>

                        <Text
                            value={retailPrice.discountPrice}
                            className="text-[7cqi] sm:text-[5cqi]"
                            weight={'semibold'}
                            font={'mono'}
                            tracking={'wider'}
                            number
                        />
                    </div>

                    {isPopular &&
                        <ButtonImpl
                            icon={<ShoppingCartPlus size={2} />}
                            text={"Add"}
                            showTextAt="sm"
                            className={cn("p-0! rounded-[2cqi] flex items-center",
                                "text-[5cqi] sm:text-[4cqi] px-[6cqi]! h-[14cqi] sm:h-[12cqi]",
                                "[&_svg]:size-[6cqi]!",
                            )}
                        />
                    }

                    {isFeatured &&
                        <ButtonImpl
                            text={"View"}
                            variant={'outline'}
                            className={cn("p-0! rounded-[2cqi] flex items-center",
                                "text-[5cqi] sm:text-[4cqi] px-[6cqi]! h-[14cqi] sm:h-[12cqi]",
                            )}
                        />
                    }
                </div>


            </CardFooter>

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

type ContentType = {
    product: ProductType;
    isFeatured?: boolean;
    isPopular?: boolean;
}

export function ProductTag({
    value,
    className,
    ...props
}: TextProps) {
    return (
        <Text
            tracking="wider"
            weight="semibold"
            value={value}
            variant={'tag'}
            tag="background"
            casing={'upper'}
            {...props}
        />
    )
}

function ProductContentRating({ product }: ContentType) {

    const { rating, gender } = product;
    const rate = calculateRating(rating)

    return (
        <div className="flex items-end gap-[6cqw]">
            <div className="flex items-start gap-[2cqw]">
                <Star className="size-[6cqw] sm:size-[5cqw] text-primary fill-primary" />

                <Text
                    value={rate.average}
                    casing={'upper'}
                    color={'gray'}
                    weight={'extrabold'}
                    tracking={'tighter'}
                    font={'mono'}
                    className="text-[5cqw] sm:text-[3.5cqw]"
                />

                <Text
                    value={`(${rate.total})`}
                    casing={'upper'}
                    color={'gray'}
                    tracking={'tighter'}
                    weight={'light'}
                    font={'mono'}
                    className="text-[5cqw] sm:text-[3.5cqw]"
                />
            </div>

            <Text
                value={gender}
                casing={'capitalize'}
                color={'gray'}
                weight={'medium'}
                tracking={'widest'}
                font={'mono'}
                className="text-[5cqw] sm:text-[3.5cqw]"
            />
        </div>
    )
}

function ProductContentTop({ product, isFeatured = false, isPopular = false }: ContentType) {

    const { style, stock } = product;

    return <>
        {isPopular &&
            <ProductContentRating product={product} />
        }

        {isFeatured && <div className="flex justify-between items-end">
            <Text
                value={style?.name}
                casing={'upper'}
                color={'gray'}
                weight={'semibold'}
                tracking={'widest'}
                className="text-[4.5cqw] sm:text-[3.2cqw]"
            />

            <Text
                value={`${stock} in stock`}
                casing={'upper'}
                color={'gray'}
                weight={'semibold'}
                tracking={'widest'}
                font={'mono'}
                className="text-[4.5cqw] sm:text-[3.2cqw]"
            />
        </div>}
    </>;
}

function ProductTitleDescription({ product, isPopular = false }: ContentType) {

    const { name, description } = product;

    return (
        <div className="flex flex-col items-start gap-[2cqi]">
            <Text
                value={name}
                render={{ as: 'tag', tag: "h3" }}
                font={'sans'}
                casing={'capitalize'}
                tracking={'wide'}
                weight={'semibold'}
                wrap={false}
                className="text-[7cqi]! sm:text-[5cqi]!"
            />

            <Text
                value={description}
                color={'gray'}
                tracking={'wide'}
                weight={'light'}
                font={'mono'}
                wrap={isPopular}
                className="text-[6cqw] sm:text-[4cqw] line-clamp-3 leading-[8cqi] sm:leading-[7cqi]"
            />
        </div>
    )
}