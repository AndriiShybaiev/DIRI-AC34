import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsViewModel } from "../viewmodel/ProductsViewModel";
import { useProductsViewModel } from "../hooks/useProductsViewModel";
import { Modal } from "../components/Modal";

const vm = new ProductsViewModel();

export function ItemsPage() {
    // AC3.4-2b: Parámetro opcional; si no se recibe, se muestran todos
    const { id } = useParams<{ id?: string }>();

    const { products, selected, selectById, clearSelection } = useProductsViewModel(vm);

    const [search, setSearch] = useState("");
    const [notFoundOpen, setNotFoundOpen] = useState(false);

    useMemo(() => {
        if (id) selectById(id);
        else clearSelection();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const onSearch = () => {
        // AC3.4-7a/7b: Si se encuentra, se selecciona; si no, modal
        const ok = selectById(search.trim());
        if (!ok) setNotFoundOpen(true);
    };

    return (
        <div className="itemsGrid">
            <section className="itemsPanel">
                <h2>Items</h2>

                <div className="searchRow">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Buscar por ID (ej. 1,2,3...)"
                    />
                    <button onClick={onSearch}>Buscar</button>
                </div>

                <table className="itemsTable">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((p) => (
                        // AC3.4-6: Seleccionar item al pulsar
                        <tr
                            key={p.id}
                            className={selected?.id === p.id ? "rowSelected" : ""}
                            onClick={() => selectById(p.id)}
                        >
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price.toFixed(2)} €</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <aside className="detailsPanel">
                <h3>Seleccionado</h3>

                {/* AC3.4-6: Mostrar item seleccionado con todos los campos */}
                {selected ? (
                    <div className="detailsCard">
                        <div><b>id:</b> {selected.id}</div>
                        <div><b>name:</b> {selected.name}</div>
                        <div><b>price:</b> {selected.price.toFixed(2)} €</div>
                    </div>
                ) : (
                    <div className="detailsCard">No hay item seleccionado.</div>
                )}
            </aside>

            <Modal
                isOpen={notFoundOpen}
                title="No encontrado"
                content={<div>No se ha encontrado el item con ese ID.</div>}
                onClose={() => setNotFoundOpen(false)}
            />
        </div>
    );
}
