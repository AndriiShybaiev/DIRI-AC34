import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ItemsPage } from "./pages/ItemsPage";
import { HelpPage } from "./pages/HelpPage";
import { FaqPage } from "./pages/help/FaqPage";
import { ReferencePage } from "./pages/help/ReferencePage";
import { NotFoundPage } from "./pages/NotFoundPage";

// AC3.4: Rutas + nested routes + not found. [file:2]
export function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />

                {/* AC3.4-2b: parametro optional */}
                <Route path="items" element={<ItemsPage />} />
                <Route path="items/:id" element={<ItemsPage />} />

                {/* AC3.4-4: nested help routes */}
                <Route path="ayuda" element={<HelpPage />}>
                    <Route path="faq" element={<FaqPage />} />
                    <Route path="referencia" element={<ReferencePage />} />
                </Route>

                {/* AC3.4-3: not found */}
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}
