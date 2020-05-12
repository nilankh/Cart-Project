import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
      constructor () {
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 10,
                    img: '',
                    id: 2
                },
                {
                    price: 999,
                    title: 'Laptop',
                    qty: 4,
                    img: '',
                    id: 3
                }
            ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this)ye v kr skte jo hmne onclick me neeche kia h dono same h
    //     // this.testing();
      }
    render () {
        // const arr = [1,2,3,4,5];

        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return ( 
                        <CartItem 
                            product= {product} 
                            key={product.id}
                            
                        />
                    )        
                })}
                </div>
        );
    }
}

export default Cart;