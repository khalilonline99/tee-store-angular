export interface ProductInterface {
    description: string,
    image: string,
    properties: { color: string, fabric: string, size: string, inStock: boolean }
    title: string,
    vendor: string,
    _id: string,
}