import React, { Component } from 'react';
import {
    Thumbnail
} from '@shopify/polaris';

class Loading extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            /**
             * Card is rendered inside the timeline component - for each stage stage object is passed as an object
             * Arrange following thing in a nice way :p - as it suits to a timeline :p
             */
            <Card key={this.props.stage.stageId} title={this.props.stage.title}>
            {/* display icon for the stage */}
            <Thumbnail source={this.props.stage.icon}/>
            {/* description of the stage */}
                {this.props.stage.description}
                {/* render the data of the stage in another component (iterated n times as needed) */}
                {this.props.stage.data.map((data, index) => {
                   /**
                    * data card should be rendered here.like,
                    * return(<DataCard data={data}/>);
                    * data may contain just a string or may be again an object.
                    * if that's object again we may need to go for card inside a crad
                    * If this depth is very limited just if else may work.
                    * Otherwise may need to go for a recursive way to render.
                    * hopefully the depth may be limited to a known small number (like 2 or 3)
                    * Fist need to get the stage layout.
                    * once that's done, data card need to be designed                   
                    */
                })}
            </Card>
        );
    }
}

export default Loading;
