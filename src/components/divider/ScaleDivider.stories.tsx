import {storiesOf} from "@storybook/react";
import React from "react";
import {ScaleDivider} from "./ScaleDivider";

storiesOf('Divider', module)
    .add('Standard', () => {
        return <ScaleDivider/>
    })
    .add('vertical', () => {
        return <ScaleDivider vertical={true}/>
    })

