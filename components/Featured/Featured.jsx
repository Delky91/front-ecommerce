/* eslint-disable @next/next/no-img-element */
import CartIcon from "../icons/CartIcon";
import styles from "./Featured.module.css";
import Link from "next/link";

export default function Featured({ product }) {
	return (
		<section className={styles.featured}>
			<div className={styles.feat_grid}>
				<div className={styles.col_a}>
					<div className={styles.text_container}>
						<h1>{product.title}</h1>
						<p>
							{product.description} Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Iure sequi ipsum voluptas quidem, tempore, quisquam eius mollitia
							aliquid similique quae neque sit laborum at facilis. Eius minima
							repellendus temporibus sit?
						</p>
						<div className={styles.button_container}>
							{/* need to put the code to the route of the object */}
							<Link href={"/product/" + product._id}>Read More</Link>
							<button className={styles.toCart + " primary-btn"}>
								<CartIcon />
								Add to Cart
							</button>
						</div>
					</div>
				</div>
				<div className={styles.img_container}>
					<img
						src={product.images[0]}
						alt='poner codigo del titulo producto destacado'
					/>
				</div>
			</div>
		</section>
	);
}
