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

export interface ProductsProps extends titleType {
    as: "default" | "popular" | "featured" | "category";
    products: ProductType[] | CategoryType[] | undefined;
    className?: string;
}

export function Products({
    as,
    products,
    overline,
    title,
    description,
    className,
}: ProductsProps) {
    if (!products || products.length === 0) return null;

    const [filtered, setFiltered] = useState<CategoryType[] | ProductType[] | undefined>(products);

    useEffect(() => {
        setFiltered(products);
    }, [products]);

    const layoutStyle = cn(
        "grid gap-2 sm:gap-4 md:gap-6",
        "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
    );

    return (
        <section
            className={cn(
                "flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10",
                className,
            )}
        >
            <div>
                <H2 overline={overline} title={title} subtitle={description} />
            </div>

            {as === "category" && (
                <ShowAsCategory
                    products={filtered as CategoryType[]}
                    className="flex gap-2 sm:gap-8 overflow-x-auto rounded-lg scrollbar-none"
                />
            )}

            {as === "default" && (
                <ShowAsProducts
                    as="default"
                    products={filtered as ProductType[]}
                    className={layoutStyle}
                />
            )}

            {as === "popular" && (
                <ShowAsProducts
                    as="popular"
                    products={filtered as ProductType[]}
                    className={layoutStyle}
                />
            )}

            {as === "featured" && (
                <ShowAsProducts
                    as="featured"
                    products={filtered as ProductType[]}
                    className={layoutStyle}
                />
            )}
        </section>
    );
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
        <div className={cn(className)}>
            {products.map((category) => (
                <Category key={category.id} category={category} />
            ))}
        </div>
    );
}

function ShowAsProducts({
    as,
    products,
    className,
}: {
    as: "default" | "popular" | "featured";
    products: ProductType[];
    className?: string;
}) {
    if (!products?.length) return null;

    return (
        <div className={cn(className)}>
            {products.map((product) => (
                <Product key={product.id} as={as} product={product} />
            ))}
        </div>
    );
}