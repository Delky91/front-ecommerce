import Featured from "@/components/Featured/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Head from "next/head";

export default function Home({ product }) {
	return (
		<>
			<Head>
				<title>E-Shop</title>
				<meta
					name='description'
					content='A e-shop generated with nextJs'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta
					name='author'
					content='Luis Miño bustos'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>

			<Header />
			<Featured />
		</>
	);
}

export async function getServerSideProps() {
	const featuredProductId = "649fe8ce31599395d459645c";
	await mongooseConnect();
	const featuredProduct = await Product.findById(featuredProductId);
	return {
		props: { product: JSON.stringify(featuredProduct) },
	};
}
