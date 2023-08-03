import Featured from "@/components/Featured/Featured";
import Header from "@/components/Header";
import NewProduct from "@/components/NewProduct/NewProduct";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Head from "next/head";

export default function Home({ featuredProduct, newProduct }) {
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

			{/* main body of the app */}
			<Header />
			<Featured product={featuredProduct} />
			<NewProduct products={newProduct} />
		</>
	);
}

//get all the info of the product that we need
export async function getServerSideProps() {
	const featuredProductId = "649fe8ce31599395d459645c";
	await mongooseConnect();
	const featuredProduct = await Product.findById(featuredProductId);

	//this will return a array of the last products that have been added to the database
	const newProduct = await Product.find({}, null, {
		sort: { _id: -1 },
		limit: 10,
	});
	return {
		//the mongoDB object need to be parse for us to use so we need to parse it back when we get the object
		props: {
			featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
			newProduct: JSON.parse(JSON.stringify(newProduct)),
		},
	};
}
