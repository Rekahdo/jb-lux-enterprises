import { Container } from "../shared/container";
import { sectionData } from "@/data/sections";
import { categoriesData } from "@/data/categories";
import { featuredData } from "@/data/featured";
import { popularData } from "@/data/popular";
import { Products } from "../app/products";
import { ProductType } from "@/data/products";

interface ShowcaseProps { }

function resolveProducts<T extends { product: ProductType | undefined }>(
    entries: T[],
): ProductType[] {
    return entries
        .map((entry) => entry.product)
        .filter((p): p is ProductType => Boolean(p));
}

export default async function ShowcaseSection(_props: ShowcaseProps) {
    const categories = await categoriesData;
    const featured = await featuredData;
    const popular = await popularData;
    const sec = await sectionData;

    return (
        <Container containerClassName="gap-16 sm:gap-20">
            <Products
                as="category"
                products={categories}
                overline={sec.category.overline}
                title={sec.category.title}
                description={sec.category.description}
            />

            <Products
                as="popular"
                products={resolveProducts(popular).slice(0, 4)}
                overline={sec.popular.overline}
                title={sec.popular.title}
                description={sec.popular.description}
            />

            <Products
                as="featured"
                products={resolveProducts(featured).slice(0, 8)}
                overline={sec.featured.overline}
                title={sec.featured.title}
                description={sec.featured.description}
            />
        </Container>
    );
}