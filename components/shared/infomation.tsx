import { cva, VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { ElementType, ReactNode } from "react";
import Text, { textVariants } from "./text";

const informationVariants = cva("", {
  variants: {
    size: {
      xs: "*:size-3.5 text-xs",
      sm: "*:size-4 text-sm",
      default: "*:size-5 text-base",
    },
    direction: {
      x: "flex",
      y: "flex flex-col",
    },
  },
});

export interface InformationProps {
  text: string;
  textProps?: VariantProps<typeof textVariants>;
  type?: "phone" | "email" | "address" | "secure" | "any";
  icon?: ReactNode;
  description?: string;
  descriptionProps?: VariantProps<typeof textVariants>;
  size?: VariantProps<typeof informationVariants>["size"];
  direction?: VariantProps<typeof informationVariants>["direction"];
  className?: string;
}

export default function Information({
  type = "any",
  icon,
  text,
  textProps,
  description,
  descriptionProps,
  size = "default",
  direction = "x",
  className,
}: InformationProps) {

  const contact = {
    phone: { href: `tel:${text}`, icon: icon ?? <Phone /> },
    email: { href: `mailto:${text}`, icon: icon ?? <Mail /> },
    address: { icon: icon ?? <MapPin /> },
    secure: { icon: icon ?? <ShieldCheck /> },
    any: { icon: icon },
  }

  const isLink = ["phone", "email"].includes(type);
  const data = contact[type as keyof typeof contact];

  const linkProps = (isLink && "href" in data) ? {
    render: { type: "external" as const, href: data.href, openTab: false }
  } : {};

  return (
    <div
      className={cn("flex items-center gap-2", className)}>
        
      {contact[type].icon &&
        <span className={cn("text-primary", informationVariants({ size }))}>
          {contact[type].icon}
        </span>
      }

      <div className={cn("gap-2", informationVariants({ direction }))}>
        <Text {...linkProps} value={text}
          size={size} className={cn(isLink && "hover:text-primary")} {...textProps} />

        {description && (<Text value={description} size={size} {...descriptionProps} />)}
      </div>
    </div>
  );
}