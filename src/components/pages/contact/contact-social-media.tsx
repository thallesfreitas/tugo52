import { Twitter, Github, Linkedin, Mail } from "lucide-react";
import { Title } from "@/components/ui/Title";
import { Text } from "@/components/ui/text";
import { useTranslations } from "next-intl";
import ContactCardSocial from "./components/contact-card-social";

export default function ContactSocialMedia() {
  const t = useTranslations("contact.social");
  return (
    <div className="grid gap-4 md:grid-cols-2 mb-12">
      <ContactCardSocial href="https://twitter.com/tugo52">
        <Twitter className="h-5 w-5 mr-3 text-[#1DA1F2]" />
        <div>
          <Title>{t("media1.title")}</Title>
          <Text>{t("media1.text")}</Text>
        </div>
      </ContactCardSocial>

      <ContactCardSocial href="https://github.com/thallesfreitas">
        <Github className="h-5 w-5 mr-3" />
        <div>
          <Title>{t("media2.title")}</Title>
          <Text>{t("media2.text")}</Text>
        </div>
      </ContactCardSocial>

      <ContactCardSocial href="https://github.com/thallesfreitas">
        <Linkedin className="h-5 w-5 mr-3 text-[#0077B5]" />
        <div>
          <Title>{t("media3.title")}</Title>
          <Text>{t("media3.text")}</Text>
        </div>
      </ContactCardSocial>

      <ContactCardSocial href="mailto:letsgo@tugo52.com">
        <Mail className="h-5 w-5 mr-3 text-primary" />
        <div>
          <Title>{t("media4.title")}</Title>
          <Text>{t("media4.text")}</Text>
        </div>
      </ContactCardSocial>
    </div>
  );
}
