
import Link from "next/link";
import { footerData } from "@/data/footer";
import { Container } from "../shared/container";
import { AppLayout } from "../shared/layout";
import { Logo } from "../shared/logo";
import { H2 } from "../shared/headings";
import { cn } from "@/lib/utils";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import { WhatsappIcon } from "../icon/cib-whatsapp";
import { AUTH_ROUTE } from "@/lib/routes";
import { Unauthenticated } from "convex/react";
import AuthRoute from "../shared/auth-route";
import { storeSettingsData } from "@/data/store-settings";
import { FacebookFillIcon } from "../icon/akar-icons-facebook-fill";
import { formatAddress, formatPhoneNumber } from "@/lib/format";
import Text from "../shared/text";
import Information from "../shared/infomation";
import { ReactNode } from "react";
import { formatToAmPm } from "@/lib/time";

export interface FooterSectionProps { }

export const FOOTER_ID = "sec-footer";

export default async function FooterSection(props: FooterSectionProps) {
    const data = await footerData;
    const store = await storeSettingsData;

    const defaultWhatsAppMessage = encodeURIComponent(
        `Hi ${store.brandName}, I came across your business website and would love to make a purchase!`
    );

    const whatsappHref = store.whatsapp
        ? store.whatsapp.startsWith("http")
            ? `${store.whatsapp}${store.whatsapp.includes("?") ? "&" : "?"}text=${defaultWhatsAppMessage}`
            : `https://wa.me/${store.whatsapp.replace(/\D/g, "")}?text=${defaultWhatsAppMessage}`
        : undefined;

    const socialLinks = [
        { name: "X", href: store.x, icon: <XIcon /> },
        { name: "Whatsapp", href: whatsappHref, icon: <WhatsappIcon /> },
        { name: "Facebook", href: store.facebook, icon: <FacebookFillIcon /> },
    ].filter((item) => Boolean(item.href));

    const textsizeXS = "xs";
    const textsizeSM = "sm";

    const TitleContent = ({ title, content, children, className }:
        { title: string, content: ReactNode, children?: ReactNode, className?: string }) => (
        <div className={cn("flex sm:justify-end grow md:min-w-60", className)}>
            <div className="flex flex-col gap-4">
                <Text
                    value={title}
                    size={textsizeXS}
                    casing={"upper"}
                    color={"primary"}
                    weight="semibold"
                    className="tracking-[0.15em]"
                />

                <div className="flex flex-col gap-3">
                    {content}
                </div>

                {children}
            </div>
        </div>
    )

    return (
        <Container
            id={FOOTER_ID}
            as="footer"
            bg={'footer'}
            containerClassName={cn()}
            rootClassName="mt-auto border-t border-t-border/10 dark:border-t-border"
        >
            <section className="grid grid-cols-1 sm:grid-cols-2 xl:flex gap-12 xl:gap-4 tracking-wider flex-wrap">
                <div className="xl:w-3/10 flex flex-col gap-4">
                    <Logo size={'footer'} />
                    <Text value={data.description} size={textsizeSM} />
                    <Information type="secure" text="Certified Lagos Commercial Entity" size={textsizeXS} />
                </div>

                <TitleContent
                    title="Lagos Island Flagship"
                    content={
                        <>
                            <Text size={textsizeXS} weight="bold" color={"white"} value={formatAddress({
                                address: store.address, operation: 'pick', options: { name: true }
                            })}
                            />

                            <Text size={textsizeXS} value={formatAddress({
                                address: store.address, operation: 'pick', options: { houseNumber: true, street: true }
                            })}
                            />

                            <Text size={textsizeXS} value={formatAddress({
                                address: store.address, operation: 'pick', options: { city: true, state: true, country: true }
                            })}
                            />
                        </>
                    }
                >
                    {store.days.map((d, i) => (
                        <Text key={i}
                            size={textsizeXS}
                            casing={'capitalize'}
                            color={'gray'}
                            value={`${d.from} - ${d.to}: ${formatToAmPm(d.openHour)} - ${formatToAmPm(d.closeHour)}`}
                        />
                    ))}
                </TitleContent>

                <TitleContent
                    title="Storefront"
                    className="sm:justify-start xl:justify-end"
                    content={
                        <>
                            {store.services.map((service, i) => (
                                <Text key={i}
                                    size={textsizeXS}
                                    value={service.service}
                                    render={{
                                        type: "page",
                                        href: service.href,
                                    }}
                                />
                            ))}
                        </>
                    }
                />

                <TitleContent
                    title="Client Concierge"
                    content={
                        <>
                            <Information
                                size={textsizeXS}
                                type="phone"
                                text={formatPhoneNumber({ phoneNumber: store.phoneNumber })}
                                textProps={{
                                    font: "mono"
                                }}
                            />

                            <Information
                                size={textsizeXS}
                                type="email"
                                text={store.email}
                                textProps={{
                                    font: "mono"
                                }}
                            />
                        </>
                    }
                />
            </section>

            <AppLayout
                maxSmAxis={"y"}
                className={cn("border-t border-t-border/10 dark:border-t-border pt-card mt-card")}
                top={
                    <Text size={textsizeXS} value={`© ${store.year} ${store.brandName}. All rights reserved.`} />
                }

                bottomClassName="gap-4 sm:flex-row sm:gap-6"
                bottom={(store.wholesale || store.retail) ?
                    <Text size={textsizeXS} value={
                        store.wholesale && store.retail ? "Wholesale & Retail" : (
                            store.wholesale ? "Wholesale" : store.retail ? "Retail" : ""
                        )
                    } /> : <></>
                }
            />
        </Container>
    );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}