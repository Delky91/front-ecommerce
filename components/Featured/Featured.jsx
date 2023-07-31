import styles from "./Featured.module.css";

export default function Featured() {
	return (
		<section className={styles.featured}>
			<div className={"container " + styles.feat_grid}>
				<div className={styles.col_a}>
					<div className={styles.text_container}>
						<h1>Pro anywhere</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum atque
							consectetur, reprehenderit laudantium quod doloribus asperiores eaque
							maiores exercitationem vitae. Voluptatibus reiciendis hic quibusdam ipsum
							modi laudantium commodi eos sed.
						</p>
						<div className={styles.button_container}>
							<button>Read more</button>
							<button>Add to Cart</button>
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
