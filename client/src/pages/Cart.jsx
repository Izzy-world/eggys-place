import React, { useContext } from "react";
import deleteIcon from "../assets/delete-icon.svg";
import CartContext from "../context/CartContext";
import { burgers, drinks, salads, chickens, Combos, chips } from '../product';

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);

    function handleRemove(cartId) {
        let remove = cart.filter(cartItx => cartItx._id !== cartId);
        setCart(remove);
    }

    const handleInc = (productId) => {
        const incQty = cart.map(cartItx => cartItx._id === productId ? { ...cartItx, quantity: cartItx.quantity + 1 } : cartItx);
        setCart(incQty);
    };

    const handleDec = (itemId) => {
        const decQty = cart.map(cartItx => {
            if (cartItx._id === itemId) {
                const qty = cartItx.quantity > 1 ? cartItx.quantity - 1 : 1;
                return { ...cartItx, quantity: qty };
            }
            return cartItx;
        });
        setCart(decQty);
    };

    const totalPrice = cart.reduce((total, product) => total + parseFloat(product.price) * product.quantity, 0);

    // Extract categories of items in the cart
    const cartCategories = [...new Set(cart.map(item => item.category))];

    // Get all products
    const allProducts = [...burgers, ...drinks, ...salads, ...chickens, ...Combos, ...chips];

    // Get similar products that are NOT in the cart
    const similarProducts = allProducts.filter(
        product => cartCategories.includes(product.category) && !cart.some(cartItem => cartItem._id === product._id)
    ).slice(0, 4); // Limit to 4 items for clean UI

    return (
        <main className="bg-[#1E1E1E] text-white min-h-screen p-10">
            {cart.length === 0 ? (
                <h1 className="text-center text-xl font-bold">😞 Oops! Looks like you haven’t ordered yet. How about you search for something? 🙂‍↔️</h1>
            ) : (
                <>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <section className="col-span-2 bg-[#2F2F2F] p-6 rounded-lg shadow-lg">
                            <h1 className="text-xl font-bold mb-4">Carts ({cart.length})</h1>
                            <div>
                                {cart.map(({ _id, image, title, price, quantity }) => (
                                    <div key={_id} className="flex justify-between items-center p-4 bg-[#252422] rounded-lg mb-4">
                                        <div className="flex items-center gap-4">
                                            <img src={image} alt={title} className="w-20 h-20 rounded-lg" />
                                            <div>
                                                <h2 className="font-semibold">{title}</h2>
                                                <p className="text-gray-400 text-sm">{new Date().toLocaleDateString("en-GB")}</p>
                                                <h3 className="text-yellow-400">₦{price.toLocaleString()}</h3>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <button className="bg-yellow-500 text-black px-3 py-1 rounded-full cursor-pointer" onClick={() => handleInc(_id)}>+</button>
                                            <p className="font-bold">{quantity}</p>
                                            <button className="bg-yellow-500 text-black px-3 py-1 rounded-full cursor-pointer" onClick={() => handleDec(_id)}>-</button>
                                            <img src={deleteIcon} alt="Delete" className="cursor-pointer w-6 ml-auto" onClick={() => handleRemove(_id)} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Summary Section */}
                        <section className="bg-[#252422] p-6 rounded-lg shadow-lg">
                            <h1 className="text-xl font-bold mb-4">Summary</h1>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <h3>Product Total ({cart.length})</h3>
                                    <h3>₦{totalPrice.toLocaleString()}</h3>
                                </div>
                                <div className="flex justify-between">
                                    <h3>VAT</h3>
                                    <h3 className="text-yellow-500">₦1,000</h3>
                                </div>
                                <div className="flex justify-between">
                                    <h3>Delivery</h3>
                                    <h3 className="text-yellow-500">₦1,500</h3>
                                </div>
                                <hr className="border-gray-600 my-2" />
                                <div className="flex justify-between font-bold text-lg">
                                    <h1>Total</h1>
                                    <h1 className="text-green-500">₦{(totalPrice + 2500).toLocaleString()}</h1>
                                </div>
                            </div>
                            <button className="w-full bg-yellow-500 text-black py-3 mt-4 rounded-lg font-bold cursor-pointer">Check Out</button>
                        </section>
                    </div>

                    {/* Similar Products Section */}
                    {similarProducts.length > 0 && (
                        <section className="mt-12">
                            <h2 className='text-2xl font-semibold mb-6'>Similar Products You Might Like</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {similarProducts.map(({ _id, image, title, price }) => (
                                    <div key={_id} className="border rounded-lg p-4 bg-[#2F2F2F] shadow-md">
                                        <img src={image} alt={title} className="w-full h-32 object-cover rounded" />
                                        <h3 className="text-lg font-medium mt-2">{title}</h3>
                                        <p className="text-sm text-gray-400">₦{price.toLocaleString()}</p>
                                        <button
                                            className="mt-2 bg-yellow-500 text-black px-3 py-1 rounded cursor-pointer"
                                            onClick={() => setCart([...cart, { _id, image, title, price, quantity: 1 }])}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </>
            )}
        </main>
    );
};

export default Cart;
