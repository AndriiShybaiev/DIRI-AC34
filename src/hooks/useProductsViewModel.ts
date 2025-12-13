import { useEffect, useState } from "react";
import type {Product} from "../model/Product";
import { ProductsViewModel } from "../viewmodel/ProductsViewModel";

// AC3.4 MVVM: hook propio para enlazar ViewModel con React (estado + subscribe)
export function useProductsViewModel(vm: ProductsViewModel) {
    const [products, setProducts] = useState<Product[]>(vm.getProducts());
    const [selected, setSelected] = useState<Product | null>(vm.getSelected());

    useEffect(() => {
        // AC3.4 MVVM: suscripción a cambios, y cleanup al desmontar
        const unsubscribe = vm.subscribe(() => {
            setProducts(vm.getProducts());
            setSelected(vm.getSelected());
        });

        // Carga inicial
        vm.load();

        return unsubscribe;
    }, [vm]);

    return {
        products,
        selected,
        selectById: (id: string) => vm.selectById(id),
        clearSelection: () => vm.clearSelection(),
    };
}
