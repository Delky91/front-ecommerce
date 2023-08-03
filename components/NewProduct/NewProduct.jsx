import styles from "./NewProduct.module.css";

export default function NewProduct({ newProduct }) {
	return (
		<section className={styles.newProduct}>
			<div className={styles.grid}>
				<h2>New Product</h2>
			</div>
		</section>
	);
}
