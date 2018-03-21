import React, { Component } from 'react';
import { Card, DisplayText, Button } from '@shopify/polaris';
import { Container, Row, Col } from 'reactstrap';
import './install.css';

class Installation extends Component {
    render() {
        var liStyle = {
            marginTop: '2%'
        }

        var lastIntPara = {
            marginBottom: '2%'
        }

        return (
            <div>
                <div class="InstallTitle">
                    <DisplayText size="medium">Configuration Instructions</DisplayText>
                </div>
                <div class="InstallVideo">
                <iframe width="560" height="415" src="https://www.youtube.com/embed/gk8W521N5d4" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                </div>
                <div class="InstallDescription">
                    <Card> 
                        <ol>
                            <li style={liStyle}>
                                From the Shopify Admin panel, click on <code>"Online Store"</code>
                            </li>
                            <li>
                                Click on the <code>Actions</code> dropdown button for the current published theme and select <code>Edit Code</code>.
                            </li>
                            <li>Select the file to be edited depending on the theme.
                                <ul>
                                <br/>
                                <li>For a Sectioned Theme, locate and click on product.liquid under the Templates folder to open it for editing. </li>
                                <li>For a Non-Sectioned Theme, locate and click on product-template.liquid under the Sections folder to open it for editing. <br/>(The liquid file should contain the details of the products.)</li>
                                </ul>

                            </li>
                            <li>
                                Subsequently, following liquid code snippet should be included in the selected liquid file and save the changes. <br/><br/>
                                <code>
                                    {"{% include 'tracified' %}"}
                                </code>
                                
                            </li>
                            {/* <li>
                                Under the <code>Templates</code>  folder, locate and click on <code>cart.liquid</code> to open it for editing.
                                (for sectioned themes, look in the <code>Sections</code> folder, for <code>cart-template.liquid</code> instead)
                            </li>
                            <li>
                                Locate the closing tag of the cart form
                                <code>
                                    </form>    
                                </code>
                            </li>
                            <li>
                                Insert the following liquid code snippet
                                
                                just before the cart form closing tag
                            </li>
                            <li>
                                Save your changes
                            </li> */}
                        </ol>

                        <p class="lastLine">
                            <code>NOTE: The installation process must be redone whenever a new theme is published</code>
                        </p>

                        <div class="lastInst">
                            <p>
                                To uninstall, simply remove the code snippet inserted into the theme. Removing or leaving the assets which were uploaded during installation will make no adverse effect on the site.
                            </p>
                            {/* <p style={lastIntPara}>
                                NOTE: Leaving the snippet in place after uninstallation, will have no adverse effect on the site
                            </p> */}
                        </div>

                        {/* <button class="AssistanceBtn" size="lg">
                            Request Installation Assistance
                        </button>{' '} */}
                        {/* <Row>
                            <Col sm="4"></Col>
                            <Col sm="3">
                                <Button class="AssistanceBtn" primary>Request Installation Assistance</Button>
                            </Col>
                        </Row> */}
                    </Card>
                    <br/>
                </div>
            </div>
        );
    }
}
export default Installation;