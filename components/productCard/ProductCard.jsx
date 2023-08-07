/* eslint-disable @next/next/no-img-element */
import styles from "./ProductCard.module.css";
import Image from "next/image";

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
			<div>{title}</div>
			<div>{description}</div>
			<div>{price}</div>
		</div>
	);
}
