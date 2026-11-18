import { ProductType } from "@/data/products";
import { cn } from "cn";
import { FadeOverlay } from "../shared/fade-overlay";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import Text from "../shared/text";
import { STOREFRONT_ROUTE } from "@/lib/routes";
import { useRouter } from "next/navigation";
import { Star } from "lucide-react";
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

export default function Product({ as, product, isWholesale }: ProductProps) {
    if (!product) return null;

    const router = useRouter();

    const isDefault = as === "default";
    const isPopular = as === "popular";
    const isFeatured = as === "featured";

    const { badge, colors, name, wholesaleTiers, unitPrice, retailDiscount } = product;

    const retailPrice = convertCent({ amountInCents: unitPrice, currency: "NGN", discount: retailDiscount });
    const wholesalePrice = wholesaleTiers ? convertCent({ amountInCents: unitPrice, currency: "NGN", discount: wholesaleTiers[0].discountPercentage }) : undefined;

    return (
        <Card
            data-slot="product"
            onClick={
                isDefault ? () => router.push(STOREFRONT_ROUTE) : undefined
            }
            className={cn(
                "@container p-0! gap-0! group/product hover:shadow-sm",
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

                {badge && (
                    <Tag value={badge} top="top-[5cqi]" left="left-[5cqi]" />
                )}

                {(isFeatured && wholesaleTiers && isWholesale) && (
                    <Tag value={`Wholesale tier - ${wholesaleTiers[0].discountPercentage}%`}
                        top="top-[17cqi]" left="left-[5cqi]" primary />
                )}
            </CardHeader>

            <CardContent
                className={cn(
                    "z-10 p-[6cqi] flex flex-col gap-[1cqh]",
                    isDefault && "absolute bottom-0 text-white",
                )}
            >
                <Content1 product={product} isFeatured={isFeatured} isPopular={isPopular} />
                <Content2 product={product} isPopular={isPopular} />
                <Content3 product={product} isFeatured={isFeatured} />
            </CardContent>

            <CardFooter className="mx-[6cqi] bg-transparent p-0 py-[6cqi]">
                {isFeatured &&
                    <div className="flex justify-between items-center w-full">
                        <div>
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

                            <Text
                                value={retailPrice.discountPrice}
                                className="text-[7cqi] sm:text-[5cqi]"
                                weight={'medium'}
                                font={'mono'}
                                tracking={'wider'}
                                number
                            />
                        </div>

                        <ButtonImpl
                            text={"View"}
                            variant={'outline'}
                            className={cn(" rounded-[2cqi]",
                                "text-[5cqi] sm:text-[4cqi] px-[6cqi]! h-[14cqi] sm:h-[12cqi]",
                            )}
                        />
                    </div>
                }


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

function Tag({
    top,
    bottom,
    right,
    left,
    primary = false,
    value,
}: Omit<ContentType, "product"> & {
    value: string,
    top?: string,
    bottom?: string,
    left?: string,
    right?: string,
    primary?: boolean,
}) {
    return (
        <Text
            tracking="wider"
            weight="semibold"
            value={value}
            tag="outline"
            casing={'upper'}
            className={cn(
                "w-fit absolute z-10 p-0! rounded-[2cqi]",
                "inset-x-0", top, bottom, left, right,
                "h-[2cqh] sm:h-[3cqh] px-[4cqw]! sm:px-[6cqw]!",
                "backdrop-blur-sm text-[4cqw] sm:text-[3.5cqw]",
                primary && cn(
                    "bg-primary! text-primary-foreground",
                ),
            )}
        />
    )
}

function Content1({ product, isFeatured = false, isPopular = false }: ContentType) {

    const { style, stock, rating, gender } = product;
    const rate = calculateRating(rating)

    return <>
        {isPopular &&
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
        }

        {isFeatured && <div className="flex justify-between items-end">
            <Text
                value={style?.name}
                casing={'upper'}
                color={'gray'}
                weight={'light'}
                tracking={'wider'}
                className="text-[4.5cqw] sm:text-[3.2cqw]"
            />

            <Text
                value={`${stock} in stock`}
                casing={'upper'}
                color={'gray'}
                weight={'medium'}
                tracking={'widest'}
                font={'mono'}
                className="text-[4cqw] sm:text-[3cqw]"
            />
        </div>}
    </>;
}

function Content2({ product, isPopular = false }: ContentType) {

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
                className="text-[6cqi]! sm:text-[5cqi]!"
            />

            <Text
                value={description}
                color={'gray'}
                tracking={'wide'}
                weight={'light'}
                font={'mono'}
                wrap={isPopular}
                className="text-[5cqw] sm:text-[4cqw] line-clamp-3 leading-[7cqi]"
            />
        </div>
    )
}

function Content3({ product, isFeatured = false }: ContentType) {

    const { rating, gender } = product;
    const rate = calculateRating(rating)

    return <>
        {isFeatured &&
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
        }
    </>;
}