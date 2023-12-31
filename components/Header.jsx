import Link from "next/link";

export default function Header() {
	return (
		<header>
			<div className='container'>
				<Link
					href={"/"}
					className='logo'>
					E-Commerce
				</Link>
				<nav>
					<Link href={"/"}>Home</Link>
					<Link href={"/products"}>All products</Link>
					<Link href={"/categories"}>Categories</Link>
					<Link href={"account"}>Account</Link>
					<Link href={"cart"}>Cart (0)</Link>
				</nav>
			</div>
		</header>
	);
}
