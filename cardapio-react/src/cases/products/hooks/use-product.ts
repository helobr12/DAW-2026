import {ProductService} from "../services/product-service";

export function  useProduct() {
    return ProductService.listAll();
}