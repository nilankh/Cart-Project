import React from 'react';

const CartItem = (props) => {
    
    
        
    const { price, title, qty } = props.product; //this is object restructuring isme jo property form above object
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} />
            </div>
            <div className="right-block">
                <div style={ { fontSize: 25 } }>{title}</div>
                <div style= { { color: '#777' }}>&#8377; {price} </div>
                <div style= { { color: '#777' }}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}

                    <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/992/992651.svg" 
                        // onClick= { this.increaseQuantity.bind(this) }
                        onClick= {() => onIncreaseQuantity(product) }
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1828/1828906.svg" 
                        onClick= { () => onDecreaseQuantity(product) }
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1214/1214428.svg" 
                        
                        onClick = { () => onDeleteProduct(product.id)} 
                    />


                </div>
            </div>
        </div>
    );

}

// we are using comma bcz this is a javascript object
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;