import { cn } from "cn";
import { FadeOverlay } from "../shared/fade-overlay";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import Text from "../shared/text";
import { STOREFRONT_ROUTE } from "@/lib/routes";
import { H3 } from "../shared/headings";
import { useRouter } from "next/navigation";
import { CategoryType } from "@/data/categories";
import { ProductTag } from "./product";

export function Category({ category }: { category: CategoryType }) {
    if (!category) return null;

    const router = useRouter();
    const { badge, title, description, count, imageId: image } = category;

    return (
        <Card
            data-slot="product-category"
            onClick={() => router.push(STOREFRONT_ROUTE)}
            className={cn(
                "@container p-0! gap-0! aspect-2/2.5 group/product-category shadow-sm",
                "relative min-w-60 sm:min-w-60 hover:cursor-pointer",
            )}
        >
            <CardHeader className="p-0 overflow-hidden">
                <Image
                    src={image?.src ?? "/image/jacket.jpg"}
                    alt={image?.alt ?? title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className={cn(
                        "object-cover object-top scale-101",
                        "group-hover/product-category:scale-110 group-active/product-category:scale-100",
                        "transition-transform duration-500 ease-in-out",
                    )}
                />

                <div className="absolute top-[5cqi] left-[5cqi] flex flex-col gap-[2cqi]">
                    <ProductTag value={badge} />
                </div>
            </CardHeader>

            <CardContent className="z-10 p-0 absolute bottom-0 text-white">
                <div className="space-y-[6cqw] overflow-hidden px-[10cqw] pb-[10cqw]">
                    <H3
                        title={title}
                        tracking="wide"
                        color="white"
                        className="group-hover/product-category:text-primary text-[12cqw]!"
                    />

                    <Text
                        tracking="wider"
                        value={description}
                        color="lightgray"
                        className="text-[5cqw]!"
                    />
                </div>
            </CardContent>

            <FadeOverlay
                height="h-full"
                from="from-black"
                via="via-black/50"
            />
        </Card>
    );
}