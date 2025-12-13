import type {Product} from "./Product";

// AC3.4-2: Diccionario (Record) de items en el Modelo
export const productDictionary: Record<string, Product> = {
    "1": { id: "1", name: "Keyboard", price: 39.99 },
    "2": { id: "2", name: "Mouse", price: 19.99 },
    "3": { id: "3", name: "Monitor", price: 149.99 },
    "4": { id: "4", name: "Webcam", price: 49.99 },
};

export function getAllProducts(): Product[] {
    return Object.values(productDictionary);
}

export function findProductById(id: string): Product | undefined {
    return productDictionary[id];
}
