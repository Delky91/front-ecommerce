import Featured from "@/components/Featured/Featured";
import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
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
			<body>
				<Header />

				<Featured />
			</body>
		</>
	);
}
