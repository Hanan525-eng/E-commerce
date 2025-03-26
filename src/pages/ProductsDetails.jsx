import { ShoppingCart } from "lucide-react"
import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { addCart } from "../featchers/products/cart/Cartslice";
const ProductsDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const product = useSelector((state) =>
        state.product.items.find((p) => p.id === parseInt(id))
    );
    if (!product) {
        return <div className="container mx-auto px-4 py-8">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
                <Link to='/' className="text-blue-500 hover:text-blue-700">Return To Home</Link>
                </div>
        </div>
    }
    return (
        <div className="container mx-auto px-4 py-8">
            <div >
                <Link to='/' className="mb-8 inline-block">
                    Back to Products
                </Link>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="shadow-md p-4 rounded w-2/2">
                        <img className="h-72 w-72 mx-auto" src={product.image} alt={product.title} />
                    </div>
                    <div>
                        <h1 className=" font-bold mb-4">{ product.title}</h1>
                        <p className="text-gray-600 mb-6">{product.description }</p>
                        <div className="mb-6">
                            <span className="text-3xl font-bold">${ product.price}</span>
                        </div>
                        <div className="mb-6">
                            <h3 className="font-semibold mb-2">Category</h3>
                            <span className=" inline-block bg-emerald-200 rounded-full px-3 py-1 text-sm  ">{product.category}</span>
                        </div>
                        <button  className="w-full md:w-auto bg-emerald-400 px-8 py-2 
                            rounded-md flex items-center justify-center gap-2 hover:bg-emerald-500" onClick={() => dispatch(addCart(product))}>
                            <ShoppingCart />
                            Add to cart
                        </button>
                    </div>
                   
                </div>
            </div>
        </div>
       
    )
}
export default ProductsDetails