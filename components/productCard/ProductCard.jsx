import styles from "./ProductCard.module.css";
import Image from "next/image";
import CartIcon from "../icons/CartIcon";

export default function ProductCard({ product }) {
	const { title, _id, price, description, images } = product;
	return (
		<div className={styles.card}>
			<div className={styles.img_container}>
				<Image
					src={product.images[0]}
					alt=''
					width={300}
					height={200}
				/>
			</div>
			<h2 className={styles.title}>{title}</h2>
			<div>
				<button className={styles.toCart + " primary-btn"}>
					<CartIcon />
					Add to
				</button>
			</div>
			<div>{price}</div>
		</div>
	);
}
