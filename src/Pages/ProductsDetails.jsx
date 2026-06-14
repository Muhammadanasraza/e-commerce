import api from '@/api/axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductsDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true)
                setError("")
                const res = await api.get(`/products/${id}`)
                setProduct(res.data)
            } catch (err) {
                console.log(err)
                setError("Product detail load nahi ho rahi.")
            } finally {
                setLoading(false)
            }
        }

        fetchProduct()
    }, [id])

    if (loading) return <p>Loading.....</p>
    if (error) return <p className='text-red-500'>{error}</p>
    if (!product) return null

    return (
        <div className='grid grid-cols-2 gap-6'>

            <img src={product.thumbnail} alt={product.title} />

            <div>
                <h1 className='text-2xl font-bold'>{product.title}</h1>
                <p className='mt-2'>{product.description}</p>
                <h2 className='mt-4 text-xl font-semibold'>${product.price}</h2>
            </div>
        </div>
    )
}

export default ProductsDetails
