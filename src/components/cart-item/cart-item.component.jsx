import './cart-item.styles.scss';


const CartItem = ({cartItem}) => {
    
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className='cart-item'>
            <img src={imageUrl} alt={name}/>

            <div>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <span className='price'>{price * quantity}$</span>
            </div>
        </div>
    );

}

export default CartItem;