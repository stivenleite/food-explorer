import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({});

function CartProvider({children}){
    const [ cart, setCart ] = useState(JSON.parse(localStorage.getItem(`@foodexplorer:cart`)) || []);

    function handleAddToCart (item) {
        const userCart = cart.filter(itemInCart => itemInCart.user_id == item.user_id)

        const itemExistsInUserCart = userCart.filter(itemInUserCart => itemInUserCart.product_id == item.product_id)
        if(itemExistsInUserCart.length > 0){
            return alert("Este item já está no carrinho. Para atualizá-lo, remova-o do carrinho e adicione-o novamente com a quantidade desejada.")
        }

        item.id = cart.length + 1;
        
        setCart(prevState => [...prevState, item]);
        window.location.reload();
        alert("Item adicionado ao carrinho.");
    }

    function handleRemoveFromCart (idItemDeleted) {
        setCart(prevState => prevState.filter(item => item.id !== idItemDeleted));
        window.location.reload();
    }
    
    useEffect(() => {
        localStorage.setItem(`@foodexplorer:cart`, JSON.stringify(cart));
    }, [cart])

    return(
        <CartContext.Provider value={{handleAddToCart, handleRemoveFromCart, cart}}>
            {children}
        </CartContext.Provider>
    )
};

function useCart(){
    const context = useContext(CartContext);
    return context;
}

export { CartProvider, useCart };