import styles from "./ProductCard.module.css";
import Image from "next/image";
import CartIcon from "../icons/CartIcon";

export default function ProductCard({ product }) {
	const { title, _id, price, description, images } = product;
	return (
		<div className={styles.card}>
			<div className={styles.img_container}>
				<Image
					src={images[0]}
					alt={title}
					width={1200}
					height={800}
					style={{
						maxWidth: "100%",
						height: "auto",
					}}
				/>
			</div>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.productInfo}>
				<p className={styles.priceTag}>$ {price}</p>
				<button className={styles.toCart + " primary-btn-outline"}>
					<CartIcon />
					<p className={styles.btnText}>Add</p>
				</button>
			</div>
		</div>
	);
}
