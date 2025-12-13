import { NavLink, Outlet, useNavigate } from "react-router-dom";

// AC3.4-1: Menú siempre visible con página activa usando NavLink
// AC3.4-5: Botón en el menú que navega a Ayuda (useNavigate)
export function Layout() {
    const navigate = useNavigate();

    return (
        <div className="appShell">
            <header className="topNav">
                <nav className="navLinks">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                        Home
                    </NavLink>
                    <NavLink to="/items" className={({ isActive }) => (isActive ? "active" : "")}>
                        Items
                    </NavLink>
                    <button className="helpButton" onClick={() => navigate("/ayuda")}>
                        Ayuda
                    </button>
                </nav>
            </header>

            <main className="mainContent">
                <Outlet />
            </main>
        </div>
    );
}
