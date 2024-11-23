import Head from "next/head";
import Image from "next/image"
import product1 from "../../../public/assets/images/img1.jpg"
import Link from "next/link";

export default function Products({product}) {
    /* console.log("- product -",product) */
    return ( <>

        <div></div>
        <Head><title>Product Page</title></Head>
        <div style={{background: "linear-gradient(90deg, rgb(174 238 220) 0%, rgba(148, 187, 233, 1) 100%)"}}
        className="min-h-screen justify-items-center p-5">
        
            <p className="text-4xl font-bold mb-10">PRODUCTS</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-20">
                {product.map(item => (
                    <Link key={item.id} href={`/products/${item.id}`}
                    className="mix-blend-multiply">
                        <div>
                            <Image src={item.image} alt={item.title} 
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-[220px] h-[220px] mb-3 hover:scale-105" ></Image>
                            <p className="font-bold w-[250px]">{item.title}</p>
                            <p>${item.price}</p>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    </>)
}

export async function getServerSideProps() {
    const resp = await fetch(`https://fakestoreapi.com/products`)
    const product = await resp.json()
    return {
        props: {"product": product}
    }
}