import { cn } from "cn";
import { FadeOverlay } from "../shared/fade-overlay";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import Text from "../shared/text";
import { STOREFRONT_ROUTE } from "@/lib/routes";
import { H3 } from "../shared/headings";
import { useRouter } from "next/navigation";
import { CategoryType } from "@/data/categories";

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
                    sizes="(max-width: 768px) 10vw, 400px"
                    className={cn(
                        "object-cover object-top scale-101",
                        "group-hover/product-category:scale-110 group-active/product-category:scale-100",
                        "transition-transform duration-500 ease-in-out",
                    )}
                />

                <Text
                    tracking="wider"
                    weight="semibold"
                    value={badge}
                    tag="outline"
                    className={cn(
                        "w-fit absolute z-10 p-0!",
                        "inset-x-0 top-[10cqi] left-[10cqi]",
                        "pb-[1.5cqh]! pt-[1.6cqh]! sm:py-[1.5cqh]! px-[6cqw]! sm:px-[8cqw]! border-[0.5cqi]",
                        "text-[4cqw] sm:text-[3.5cqw]",
                    )}
                />
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