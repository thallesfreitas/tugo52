import Manifest from "@/components/pages/about/about-manifest";
import Pillars from "@/components/pages/about/about-pillars";
import Faq from "@/components/pages/about/about-faq";
import Header from "@/components/ui/header";

export default function AboutPage() {
  return (
    <>
      <Header area="about" />
      <Manifest />
      <Pillars />
      <Faq />
    </>
  );
}
