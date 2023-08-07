import ProductCard from "../productCard/ProductCard";
import styles from "./NewProduct.module.css";

export default function NewProduct({ products }) {
	return (
		<div className={styles.newProduct}>
			<div className={styles.grid}>
				{products?.length > 0 &&
					products.map((product) => (
						<ProductCard
							key={product._id}
							product={product}
						/>
					))}
			</div>
		</div>
	);
}
