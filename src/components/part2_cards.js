import React, { Component } from 'react';
import CollapseMain from './CollapseMain';
import * as axios from 'axios';
import { Container, Row, Col} from 'reactstrap';
import { Page } from '@shopify/polaris';
import Loading from './Loading';
const QRCode = require('qrcode.react');

class Part2Cards extends Component {
    constructor() {
        super();
        this.state = {
            orders: [],
            products: {},
            isOrderListLoading: true
        };
    }



    componentDidMount() {
        axios.get('https://tracified-local-test.herokuapp.com/shopify/shop-api/products')
            .then(response => {
                const products = response.data.products;
                this.setState({ products: response.data.products });
            });
        axios.get('https://tracified-local-test.herokuapp.com/shopify/shop-api/orders')
            .then(response => {
                this.setState({ 
                    orders: response.data.orders,
                    isOrderListLoading: false
                });
            });
    }


    render() {

        if(this.state.isOrderListLoading){
            return <Loading/> ;
        }
        else{
        // All the order details
        var orders = this.state.orders;
        console.log(orders);

        var orderArray = [];
        orders.forEach((order) => {
            var items = order.line_items;
            var lineItems = [];
            items.forEach(item => {
                lineItems.push({
                    id: item.id,
                    title: item.title,
                    quantity: item.quantity,
                    variant_title: item.variant_title,
                    product_id: item.product_id
                });
            });

            const customer = order.customer.first_name + " " + order.customer.last_name;

            orderArray.push({
                id: order.id,
                order_number: order.order_number,
                lineItems: lineItems,
                customer: customer,
                created_at: order.created_at.substring(0, 10)
            });
        });

        console.log(orderArray);

        return (
            <Page title="Unfulfilled Orders" separator>

                {orderArray.map((order, index) => {
                    const qrValue = order.order_number.toString();
                    const title = "Order ID: " + order.order_number;
                    return (
                        <CollapseMain order={order} productsProp={this.state.products} qrVal={qrValue} title={title}/>
                    )
                })}
            </Page>
        );
    }
    }
}

export default Part2Cards;
