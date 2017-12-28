import React, { Component } from 'react';
import Loading from './Loading';
import * as axios from 'axios';
import {
    Spinner,
    DisplayText,
    TextStyle,
    Card,
    Page,
    Avatar
} from '@shopify/polaris';
import { Row, Col, Container} from 'reactstrap';


class TraceTimeLine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timeline: "",
            istimelineLoading: true
        };
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://tracified-mock-api.herokuapp.com/Traceability_data/otp/customer-app', headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
        })
            .then(response => {
                let timeline = response.data[2];
                this.setState({
                    timeline: timeline,
                    istimelineLoading: false
                });
            });

    }

    render() {
        if (this.state.istimelineLoading) {
            return <Loading />;
        }
        else {
            console.log(this.props.match.params.orderID);
            console.log(this.props.match.params.itemID);
            return (
                <Page title="Trace Back Timeline" separator>
                    <DisplayText size="small">
                        
                            {this.state.timeline.items.map((stage, index) => {
                                return (
                                    <Card key={stage.stage}
                                    >
                                        <Card.Section>
                                            <Row>
                                            <Col sm='1'>
                                            <Avatar
                                                customer
                                                name="Farrah"
                                            />
                                             </Col>
                                             <TextStyle variation='strong' >
                                            {stage.title}
                                            </TextStyle>
                                            <Card.Section>
                                                  <TextStyle variation='subdued'>  This is the description of the  stage </TextStyle> 
                                            </Card.Section>
                                           
                                            </Row>

                                        </Card.Section>
                                        {/* {stage.data.map((traceabilityData, index) => {
                                            const data = traceabilityData.name + " - " + traceabilityData.type;
                                            return (
                                                <div>
                                                
                                                <Card>
                                                    {data}
                                                </Card>
                                                </div>

                                            )
                                        })} */}

                                        {
                                            // ()=>{
                                            //     let dataArray = [];
                                            //     for (var key in stage.data) {
                                            //         dataArray.push(
                                            //             <div>{stage.data[key]}</div>
                                            //         );
                                            //         }
                                            //       return dataArray;
                                            //     }
                                            
                                            Object.keys(stage.data).map(function(key) {
                                                return <div> {JSON.stringify(stage.data[key])}</div>;
                                            })

                                        }

                                        {/* } */}
                                    </Card>



                                )
                            })}
                       
                    </DisplayText>
                </Page>
                
            );
        }
    }
}

export default TraceTimeLine;
