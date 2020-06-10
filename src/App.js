import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
        products: [
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                id: 1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
                id: 2
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 4,
                img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
                id: 3
            }
        ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this)ye v kr skte jo hmne onclick me neeche kia h dono same h
//     // this.testing();
  }

handleIncreaseQunatity = (product) => {
    console.log("Hey please inc the qty of", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
        products
    })
}

handleDecreaseQunatity = (product) => {
    console.log("Hey please inc the qty of", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
        return;
    }
    products[index].qty -= 1;
    this.setState({
        products
    })
}

handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id );
    this.setState({
        products: items
    })
}
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map(product => {
      if(product.qty > 0){
      cartTotal = cartTotal + product.qty * product.price;
      }
      return '';

    })

    return cartTotal;
  }

  render () {
    
    const { products } = this.state;

    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <Cart 
          products = { products}
          onIncreaseQuantity = {this.handleIncreaseQunatity}
          onDecreaseQuantity = {this.handleDecreaseQunatity}
          onDeleteProduct = {this.handleDeleteProduct}        
        />
      <div style= { {padding: 10, fontSize: 20}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
