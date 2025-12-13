import type {Product} from "../model/Product";
import { findProductById, getAllProducts } from "../model/productStore";

// AC3.4 MVVM: ViewModel sin hooks de React; usa suscripción para notificar cambios
type Subscriber = () => void;

export class ProductsViewModel {
    private products: Product[] = [];
    private selected: Product | null = null;

    private subscribers: Subscriber[] = [];

    public load(): void {
        // AC3.4-2: Cargar todos los items para mostrarlos
        this.products = getAllProducts();
        this.notify();
    }

    public getProducts(): Product[] {
        return this.products;
    }

    public getSelected(): Product | null {
        return this.selected;
    }

    public selectById(id: string): boolean {
        // AC3.4-6: Al seleccionar item, se muestra con todos los campos
        const found = findProductById(id);
        if (!found) return false;

        this.selected = found;
        this.notify();
        return true;
    }

    public clearSelection(): void {
        this.selected = null;
        this.notify();
    }

    public subscribe(callback: Subscriber): () => void {
        this.subscribers.push(callback);
        return () => {
            this.subscribers = this.subscribers.filter((cb) => cb !== callback);
        };
    }

    private notify(): void {
        this.subscribers.forEach((cb) => cb());
    }
}
