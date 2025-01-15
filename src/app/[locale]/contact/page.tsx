import { ContactForm } from "@/components/pages/contact/contact-form";
import ContactSocialMedia from "@/components/pages/contact/contact-social-media";
import Header from "@/components/ui/header";

export default function ContactPage() {
  return (
    <>
      <Header area="contact" />
      <ContactSocialMedia />
      <ContactForm />
    </>
  );
}
