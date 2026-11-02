import Index from "./pages/Index";
import { Analytics } from "@vercel/analytics/react";
import { useDocumentLanguage } from "@/hooks/useDocumentLanguage";

const App = () => {
  useDocumentLanguage();

  return (
    <>
      <Index />
      <Analytics />
    </>
  );
};

export default App;
