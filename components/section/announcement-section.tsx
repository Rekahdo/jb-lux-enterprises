import { Container } from "../shared/container";
import { cn } from "cn";
import { backDropBlur } from "../shared/_css";
import { announcementData } from "@/data/announcement";
import { MapPin } from "lucide-react";
import { storeSettingsData } from "@/data/store-settings";
import { formatAddress, formatPhoneNumber } from "@/lib/format";
import Information from "../shared/infomation";
import Text from "../shared/text";

export const AnnouncementSection = async () => {
  const announcement = await announcementData;
  const store = await storeSettingsData;

  return (
    <Container
      as={"header"}
      py={'none'}
      width={'lg'}
      sticky={'top'}
      direction="row"
      containerClassName="py-1 justify-between"
      rootClassName={cn("border-b border-border/50 bg-foreground text-background dark:bg-background dark:text-foreground")}
    >
      <Information
        size={"xs"}
        type="address"
        text={formatAddress({
          address: store.address,
          operation: "pick",
          options: { name: true, city: true }
        })}
        className="overflow-hidden min-w-0"
        textProps={{
          wrap: false,
          truncate: true,
        }}
      />

      {Boolean(announcement.messages) && (
        <div className="hidden gap-4 grow justify-center lg:flex">
          {announcement.messages.map((message, i) => (
            <Text key={i} value={message.text} size={"xs"} />
          ))}
        </div>
      )}

      <Information
        size={"xs"}
        type="phone"
        className="shrink-0 pl-4"
        text={formatPhoneNumber({ phoneNumber: store.phoneNumber })}
        textProps={{
          wrap: false
        }}
      />
    </Container>
  );
};
