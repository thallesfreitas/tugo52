import Home from "./home";
import { GoogleAnalytics } from "@next/third-parties/google";

export default async function LocaleLayout() {
  return (
    <>
      <Home />

      <GoogleAnalytics gaId={process.env.GA ?? ""} />
    </>
  );
}
