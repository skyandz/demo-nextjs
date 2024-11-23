import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { HiArrowNarrowLeft } from "react-icons/hi";

export default function ProductDetail({product}) {
    return(<>
        <Head>
            <title>Product Detail Page</title>
        </Head>
        <div style={{background: "linear-gradient(90deg, rgb(174 238 220) 0%, rgba(148, 187, 233, 1) 100%)"}}
        className="min-h-screen justify-items-center p-5">

                <Link href="/products" className="flex justify-self-start mb-10 text-4xl">
                    <HiArrowNarrowLeft />
                </Link>

                <div className="w-full md:w-1/2">
                        <p className="text-4xl text-center font-bold">{product.title}</p>
                        <Image src={product.image} alt={product.title}
                        className="mix-blend-multiply w-[220px] h-[220px] justify-self-center my-5" 
                        width={220}
                        height={220}></Image>

                        <div>
                           <p><b>id:</b> {product.id}</p>
                            <p><b>title:</b> {product.title}</p>
                            <p><b>price:</b> {product.price}</p>
                            <p><b>description:</b> {product.description}</p>
                            <p><b>category:</b> {product.category}</p>
                            <p><b>image:</b> {product.image}</p>
                            <p><b>rating:</b> {product.rating.count}</p>
                        </div>
                        
                </div>
        </div>
        
    
    </>)
}

export async function getServerSideProps(context) {
    const resp = await fetch(`https://fakestoreapi.com/products/${context.params.id}`)
    const product = await resp.json()
    return {
        props: {"product": product}
    }
}