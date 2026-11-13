import { productsData } from "@/data/products";
import { Container } from "../shared/container";
import { Products } from "../app/products";
import { sectionData } from "@/data/sections";

export interface ShowcaseProps {

}

export default async function ShowcaseSection(props: ShowcaseProps) {
    const products = await productsData;
    const sec = await sectionData

    return (
        <Container
            containerClassName="gap-16 sm:gap-20"
        >
            <Products
                products={products.filter((product) => product.isCategory)}
                showAs="category"
                overline={sec.category.overline}
                title={sec.category.title}
                description={sec.category.description}
            />

            <Products
                products={products.filter((product) => product.isPopular).slice(0, 4)}
                showAs="popular"
                overline={sec.popular.overline}
                title={sec.popular.title}
                description={sec.popular.description}
            />

            <Products
                products={products.filter((product) => product.isFeatured).slice(0, 8)}
                showAs="featured"
                overline={sec.featured.overline}
                title={sec.featured.title}
                description={sec.featured.description}
            />
        </Container>
    );
}
