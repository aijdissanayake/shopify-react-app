import React, { Component } from 'react';
import CollapaseCards from './collapase';
import * as axios from 'axios';
import { Container, Row, Col} from 'reactstrap';
import { Thumbnail, Card, Page, List, Badge } from '@shopify/polaris';
import Loading from './Loading';

const QRCode = require('qrcode.react');

class Part2Cards extends Component {
    constructor() {
        super();
        this.state = {
            orders: [],
            products: {},
            isOrderListLoading: true,
            search: ''
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

    updateSearch(event){
        this.setState({
            search: event.target.value.substr(0, 20)
        });
    }
            

    render() {

        if(this.state.isOrderListLoading){
            return <Loading/> ;
        }
        else{
        // All the order details

        let orders = this.state.orders.filter(
            (order) => {
                return order.name.indexOf(this.state.search) !== -1;
            }
         );

       // var orders = this.state.orders;
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

        var inputStyle={
            marginLeft: '2%',
            float: 'left',
            padding: '1%',
            fontSize: '17px',
            marginTop: '2%',
            borderStyle: 'dotted',
            marginBottom:'2%'
        }

        return (
            <Page title="Unfulfilled Orders" separator>
           
                <div>
                    <Card>
                        {/* <div className="searchBar"> */}
                             <input
                             type="text"
                             placeholder="Enter the order id"
                             value={this.state.search}
                             onChange={this.updateSearch.bind(this)}
                             style={inputStyle}
                             />
                        {/* </div> */}
                      </Card>
                    </div>
               
                {orderArray.map((order, index) => {
                    const qrValue = order.order_number.toString();
                    const title = "Order ID: " + order.order_number;
                    return (
                        <Card key={order.order_number} title={title} sectioned subdued={false}>
                            <Row>
                                <Col sm="10">                                    
                                    <List type="bullet">
                                        <List.Item>Customer  : {order.customer}</List.Item>
                                        <List.Item>Created At: {order.created_at}</List.Item>
                                    </List>
                                </Col>
                                <Col sm="2">
                                    <QRCode value={qrValue} />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="12">
                                    <CollapaseCards itemArray={order.lineItems} products={this.state.products} orderID={order.id
                                    } />
                                </Col>
                            </Row>
                        </Card>
                    )
                })}
            </Page>
        );
    }
    }
}

export default Part2Cards;
