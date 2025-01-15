import { SuggestionForm } from "@/components/pages/suggestions/suggestions-form";
import SuggestionsExamples from "@/components/pages/suggestions/suggestions-examples";
import Header from "@/components/ui/header";

export default function SuggestPage() {
  return (
    <>
      <Header area="suggest" />
      <SuggestionsExamples />
      <SuggestionsExamples />
      <SuggestionForm />
    </>
  );
}
