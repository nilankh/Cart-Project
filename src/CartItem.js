import React from 'react';

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
        // or we can bind in constructor too
        // this.increaseQuantity = this.increaseQuantity.bind(this)ye v kr skte jo hmne onclick me neeche kia h dono same h
        this.testing();
    }

    testing () {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('done');
            }, 5000);
        })
        promise.then(() => {
            // set state acts like a synchronous call
            this.setState({ qty: this.state.qty + 10 });
            
            this.setState({ qty: this.state.qty + 10 });
            
            this.setState({ qty: this.state.qty + 10 });
            console.log('state', this.state);
        });
    }
    increaseQuantity = () => {  //arrow function se directly bind ho jyga koi dikkat ni aayega
        // this.state.qty += 1 
        // console.log('this.state', this.state);
        // setState form1
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        // setState form2 - if previosu state required use this
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }
    decreaseQuantity = () => {

        const { qty } = this.state;
        if(qty === 0){
            return;
        }
        this.setState((prevState) => {
            return{
                qty: prevState.qty - 1
            }
        });
    }
    render () {
        const { price, title, qty } = this.state; //this is object restructuring isme jo property form above object
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
                            onClick= { this.increaseQuantity }
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1828/1828906.svg" 
                            onClick= { this.decreaseQuantity }
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg" 
                        />


                    </div>
                </div>
            </div>
        );
    }
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