import ProductItem from "./ProductItem";
import type { IProduct } from "../../interfaces/product.interface";
import { useAppSelector } from "../../hook/useRedux";

export default function ListProducts() {
  const products = useAppSelector((state) => state.productReducer);

  console.log(products);

  return (
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            {products.map((p: IProduct) => (
              <ProductItem product={p} key={p.id}></ProductItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
