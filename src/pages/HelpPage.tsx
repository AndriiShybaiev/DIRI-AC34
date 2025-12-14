import { NavLink, Outlet } from "react-router-dom";

// AC3.4-4: Ayuda con rutas anidadas + Outlet
export function HelpPage() {
    return (
        <div>
            <h2>Ayuda</h2>

            <div style={{ display: "flex", gap: 12 }}>
                <NavLink to="faq" className={({ isActive }) => (isActive ? "active" : "")}>
                    Preguntas más frecuentes
                </NavLink>
                <NavLink to="referencia" className={({ isActive }) => (isActive ? "active" : "")}>
                    Referencia
                </NavLink>
            </div>

            <div style={{ marginTop: 12 }}>
                <Outlet />
            </div>
        </div>
    );
}
