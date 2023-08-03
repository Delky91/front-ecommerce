/* eslint-disable @next/next/no-img-element */
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
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
									className='icon'>
									<path d='M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z' />
								</svg>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
				<div className={styles.img_container}>
					<img
						src='https://lomb-next-ecommerce.s3.us-east-2.amazonaws.com/1688201401449.webp'
						alt='poner codigo del titulo producto destacado'
					/>
				</div>
			</div>
		</section>
	);
}
