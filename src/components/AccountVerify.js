import React, { Component } from 'react';
import '@shopify/polaris/styles.css';
import { Row, Col } from 'reactstrap';
import {
    AccountConnection,
    Page,
    TextField,
    Button,
    TextStyle,
    VisuallyHidden,
    Heading,
    FormLayout,
    Card
  
  } from '@shopify/polaris';

  
class AccountVerify extends Component {

 render(){

    return(

    <Page>
      <Card title="Account Verficaction ">
        
        <FormLayout>
        
        <Card.Section>
        <Col sm ="8" offset ="2"> 
        <TextField label="Enter the access token" />
        </Col>
        <Col sm ="4" offset ="2">
        <Button primary onClick={this.onSubmit}>Connect</Button>
        </Col>
        </Card.Section>

        <Card.Section>
          <p>  You may want to connect to your Tracified Account for further proceedings</p>
        </Card.Section>

        </FormLayout>
     
      <Row>


      </Row>

    
      
 
     
      </Card>
     
     </Page>
    );
  }
}
export default AccountVerify