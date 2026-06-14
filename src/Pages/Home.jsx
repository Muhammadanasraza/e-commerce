import api from "@/api/axios";
import { Button } from "@base-ui/react";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Home() {

    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                setError("")
                const response = await api.get("/products")
                setProducts(response.data.products)
            }
            catch (err) {
                console.log(err)
                setError("Products load nahi ho rahe. Please thori der baad try karein.")
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div>

            <input
                className="border p-2 w-full mb-4"
                placeholder="Search Product..."
                value={search}
                onChange={((e) => setSearch(e.target.value))}
            />


            <div className="flex gap-2 mb-4">
                <Button className='border px-2'>
                    All
                </Button>
                <Button className='border px-2'>
                    Beauty
                </Button>
                <Button className='border px-2'>
                    Fragrance
                </Button>
            </div>


            {loading && <p>Loading products...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <div className="grid grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="border p-3 rounded">

                        <img src={product.thumbnail} alt=""
                            className="h-40 mx-auto" />

                        <h2 className="font-bold">
                            {product.title}
                        </h2>
                        <p>${product.price}</p>

                        <Link to={`/products/${product.id}`}>View</Link>

                    </div>
                ))}
            </div>
        </div>
    )
}
