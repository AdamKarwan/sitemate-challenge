import { QueryClient, QueryClientProvider } from "react-query";
import "tailwindcss/tailwind.css";
import Issues from "./components/Issues/Issues";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Issues />
    </QueryClientProvider>
  );
}

export default App;
