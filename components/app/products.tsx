'use client';

import { ProductType } from "@/data/products";
import { titleType } from "@/data/sections";
import { H2 } from "../shared/headings";
import Product from "./product";
import { Category } from "./category";
import { cn } from "cn";
import { useEffect, useState } from "react";
import { CategoryType } from "@/data/categories";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Text from "../shared/text";
import { ButtonImpl } from "../shared/button-impl";
import { ArrowRightIcon } from "lucide-react";
import { STOREFRONT_ROUTE } from "@/lib/routes";
import { MultiToggle } from "../shared/toggle";

export interface ProductsProps extends titleType {
    as?: "popular" | "product" | "category";
    products: ProductType[] | CategoryType[] | undefined;
    className?: string;
}

export function Products({
    as = "product",
    products,
    overline,
    title,
    description,
    className,
}: ProductsProps) {
    if (!products || products.length === 0) return null;

    const [filtered, setFiltered] = useState<CategoryType[] | ProductType[] | undefined>(products);
    const [isWholesale, setIsWholesale] = useState(false);

    useEffect(() => {
        setFiltered(products);
    }, [products]);

    const isCategory = as === "category";
    const isPopular = as === "popular";
    const isProduct = as === "product";

    return (
        <section
            className={cn(
                "flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10",
                className,
            )}
        >
            <div className="flex justify-between items-end">
                <H2 overline={overline} title={title} subtitle={description} />

                {isCategory && (
                    <ButtonImpl
                        text={"View all collections"}
                        icon={<ArrowRightIcon />}
                        position="right"
                        variant={'outline'}
                        render={{ as: "page", href: STOREFRONT_ROUTE }}
                        height={'md'}
                        className="text-primary border-primary"
                    />
                )}

                {isProduct && (
                    <ProductRetailToggle onClickAction={setIsWholesale} className="sticky top-0 z-10" />
                )}
            </div>

            {isCategory && (
                <ShowAsCategory
                    products={filtered as CategoryType[]}
                />
            )}

            {(isPopular || isProduct) && (
                <ShowAsProducts
                    as={as}
                    isWholesale={isWholesale}
                    products={filtered as ProductType[]}
                />
            )}
        </section>
    );
}

export function ProductRetailToggle({
    onClickAction,
    className
}: {
    onClickAction: (isWholesale: boolean) => void,
    className?: string
}) {
    const [isWholesale, setIsWholesale] = useState(false);

    useEffect(() => {
        onClickAction(isWholesale)
    }, [isWholesale])

    return (
        <MultiToggle
            toggles={[
                { text: "retail catalog", onClick: () => setIsWholesale(false) },
                { text: "retail wholesale tiers (bulk rates)", onClick: () => setIsWholesale(true) },
            ]}
            height={'md'}
            rootToggle
            rootClassName={className}
        />
    )
}

function ShowAsCategory({
    products,
    className,
}: {
    products: CategoryType[];
    className?: string;
}) {
    if (!products?.length) return null;

    return (
        <div className={cn(
            "flex gap-2 sm:gap-8 overflow-x-auto rounded-lg scrollbar-none",
            className
        )}>
            {products.map((category) => (
                <Category key={category.id} category={category} />
            ))}
        </div>
    );
}

export function ShowAsProducts({
    as = "product",
    products,
    className,
    isWholesale,
}: {
    as?: "popular" | "product";
    products: ProductType[];
    className?: string;
    isWholesale?: boolean;
}) {
    if (!products?.length) return null;

    return (
        <div className={cn(
            "grid gap-4 md:gap-6",
            "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
            className
        )}>
            {products.map((product) => (
                <Product key={product.id} as={as} product={product} isWholesale={isWholesale} />
            ))}
        </div>
    );
}