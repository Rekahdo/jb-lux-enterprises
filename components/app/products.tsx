'use client'

import { ProductType } from "@/data/products";
import { titleType } from "@/data/sections";
import { H2 } from "../shared/headings";
import Product from "./product";
import { cn } from "cn";
import { useEffect, useState } from "react";

export type ShowAsType = "category" | "popular" | "featured";

export interface ProductsProps extends titleType {
    products: ProductType[]
    showAs: ShowAsType;
    className?: string;
}

export function Products({
    products,
    showAs,
    overline,
    title,
    description,
    className,
}: ProductsProps) {
    const [filtered, setFiltered] = useState(products)

    const isCategory = showAs === "category";
    const isPopular = showAs === "popular";
    const isFeatured = showAs === "featured"

    useEffect(() => {
        setFiltered(products)
    }, [products])

    const excludeCategory = () => filtered.filter((product) => !product.isCategory)

    const layoutStyle = cn("grid gap-2 sm:gap-4 md:gap-6",
        "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
    )

    return (
        <section className={cn("flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 bg-red-300/", className)}>
            <div>
                <H2
                    overline={overline}
                    title={title}
                    subtitle={description}
                />
            </div>

            {isCategory && <ShowAsCategory products={filtered} className="flex gap-2 sm:gap-8 overflow-x-auto" />}
            {isPopular && <ShowAsPopular products={excludeCategory()} className={cn(layoutStyle)} />}
            {isFeatured && <ShowAsFeatured products={excludeCategory()} className={cn(layoutStyle)} />}
        </section>
    );
}

function ShowAsCategory({ products, className }: Omit<ProductsProps, "showAs">) {
    if (!products) return null;

    return (
        <div className={cn(className)}>
            {products.map((product, i) => (
                <Product
                    key={i}
                    render={{
                        as: "category",
                        product,
                        count: 0,
                    }}
                />
            ))}
        </div>
    );
}

function ShowAsFeatured({ products, className }: Omit<ProductsProps, "showAs">) {
    if (!products) return null;

    return (
        <div className={cn(className)}>
            {products.map((product, i) => (
                <Product
                    key={i}
                    render={{
                        as: "featured",
                        product,
                    }}
                />
            ))}
        </div>
    );
}

function ShowAsPopular({ products, className }: Omit<ProductsProps, "showAs">) {
    if (!products) return null;

    return (
        <div className={cn(className)}>
            {products.map((product, i) => (
                <Product
                    key={i}
                    render={{
                        as: "popular",
                        product,
                    }}
                />
            ))}
        </div>
    );
}