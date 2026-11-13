import { Container } from "../shared/container";
import { H1 } from "../shared/headings";
import { heroData } from "@/data/hero";
import { AppLayout } from "../shared/layout";
import { storeSettingsData } from "@/data/store-settings";
import Text from "../shared/text";
import { Tag, Tags } from "../shared/tag";
import CtaBtns from "../shared/app-btns";
import { Sparkle, Sparkles } from "lucide-react";
import { cn } from "cn";

export const HERO_ID = "hero";

export async function HeroSection() {
    const data = await heroData;
    if (!data) return null;

    return (
        <Container
            id={HERO_ID}
            height={'hero'}
        >
            <AppLayout
                className="gap-12 items-center justify-center"

                topClassName="gap-y-app-xs"
                top={
                    <>
                        <Tag title={data.badge} variant={'outline'} shape={'pill'} icon={<Sparkles />}
                            titleProps={{
                                color: "primary",
                                tracking: "wider",
                            }}
                            descriptionProps={{
                                tracking: "wide",
                                align: 'center',
                            }}
                            titleClassName="max-sm:text-3xs" iconClassName="max-sm:[&_svg]:size-2.5"
                        />

                        <H1 title={data.headline} align={'center'} size={"hero"}
                            rootClassName="max-w-9/10 md:max-w-200" />

                        <Text value={data.description} align={'center'} size={'sm'}
                            className="max-w-8/10 lg:max-w-200 sm:text-base md:text-lg" />

                        <CtaBtns />

                        <Tags tags={data.tags}
                            titleProps={{
                                color: "primary",
                                weight: "semibold",
                                tracking: "wider",
                                align: 'center',
                                wrap: false,
                                size: 'xs'
                            }}
                            descriptionProps={{
                                tracking: "wide",
                                wrap: true,
                                align: 'center',
                                size: 'xs'
                            }}
                            className={cn(
                                'lg:max-w-200 border-t pt-card mt-card grid grid-cols-2 md:grid-cols-4 ',
                            )}
                        />
                    </>
                }
            />

        </Container>
    );
};
