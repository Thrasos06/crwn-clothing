import { createContext, useState, useEffect } from "react";

const addCartItem = ( cartItems, productToAdd ) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        );
    }
    // const newTotalPrice = calculateTotalPrice([...cartItems, {...productToAdd, quantity: 1}]);
    // setTotalPrice(newTotalPrice);

    
    return [...cartItems, {...productToAdd, quantity: 1}];

}

const removeCartItem = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(  cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
    );
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    totalPrice: 0,
    setTotalPrice: () => {},
    cartCount: 0,
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartCount, setCartCount] = useState(0);


    useEffect(() => {
        // setTotalPrice(calculateTotalPrice(cartItems));

        const newCartCount = cartItems.reduce(
            ( total, cartItem ) => total + cartItem.quantity,
            0
        );

        setCartCount(newCartCount);

    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
  
        setCartItems(addCartItem(cartItems, productToAdd));
        // setTotalPrice(calculateTotalPrice(cartItems));
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
        // setTotalPrice(calculateTotalPrice(cartItems));
    }


    const value = { isCartOpen, setIsCartOpen, addItemToCart,removeItemFromCart, cartItems, cartCount};


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}