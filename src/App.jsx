import ListarCategorias from "./components/ListarCategorias";
import VerCategoria from "./components/VerCategoria";

import "./styles.css";
import { QueryClient, QueryClientProvider } from "react-query";
import ProviderCategorias from "./context/ContextoCategorias";

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ProviderCategorias>
        <div className="App">
          <h1>Inventario Pokémon</h1>
          <div id="caixaDeEntrada">
            <ListarCategorias />
            <VerCategoria />
          </div>
        </div>
      </ProviderCategorias>
    </QueryClientProvider>
  );
}
