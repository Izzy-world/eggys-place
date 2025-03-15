import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { burgers, drinks, salads, chickens, Combos, chips } from '../product';

const allProducts = { burgers, drinks, salads, chickens, Combos, chips };

const Product = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        let foundProduct = null;
        let foundCategory = null;

        Object.keys(allProducts).forEach((cat) => {
            const item = allProducts[cat].find((prod) => prod._id.toString() === id);
            if (item) {
                foundProduct = item;
                foundCategory = cat;
            }
        });

        setProduct(foundProduct);
        setCategory(foundCategory);
    }, [id]);

    if (!product) return <p className="text-center text-white">Loading...</p>;

    const relatedProducts = category 
        ? allProducts[category].filter((item) => item._id.toString() !== id).slice(0, 3) 
        : [];

    return (
        <main className='container mx-auto px-4 md:px-16 py-6 bg-[#2F2F2F] text-white'>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
                {/* Product Image */}
                <div>
                    <img src={product.image} alt={product.title} className='rounded-lg w-full max-w-md mx-auto' />
                </div>
                
                {/* Product Details */}
                <div>
                    <h1 className='text-3xl font-bold mb-4'>{product.title}</h1>
                    <p className='text-gray-300'>{product.description}</p>
                    <button className="bg-[#B67B0F] leading-[100%] w-full rounded-[31px] lg:whitespace-nowrap py-[15px] px-[56px] md:text-base">
                        Add to Cart
                    </button>
                </div>
            </section>

            {/* Related Products */}
            <section className='mt-12'>
                <h2 className='text-2xl font-semibold mb-6'>Others You Might Like</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {relatedProducts.map((item) => (
                        <div 
                            key={item._id} 
                            className='bg-[#222] p-4 rounded-lg text-center cursor-pointer'
                            onClick={() => navigate(`/product/${item._id}`)} // Fixed navigation
                        >
                            <img src={item.image} alt={item.title} className='rounded-lg mb-4' />
                            <h3 className='text-xl font-medium'>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Product;
