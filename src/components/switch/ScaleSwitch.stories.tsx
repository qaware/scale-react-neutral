import {storiesOf} from "@storybook/react";
import React, {useState} from "react";
import {ScaleSwitch} from "./ScaleSwitch";


storiesOf('ScaleSwitch', module)
    .add('Standard', () => {
        const [state, setState] = useState<boolean>(false)
        return <ScaleSwitch label="Standard" checked={state} onChange={() => setState(!state)}/>
    })
    .add('Standard Disabled', () => {
        const [state, setState] = useState<boolean>(false)
        return <ScaleSwitch label="Standard Disabled" disabled={true} checked={state} onChange={() => setState(!state)}/>
    })
    .add('Selected', () => {
        const [state, setState] = useState<boolean>(true)
        return <ScaleSwitch label="Selected" checked={state} onChange={() => setState(!state)}/>
    })

    .add('Selected Disabled', () => {
        const [state, setState] = useState<boolean>(true)
        return <ScaleSwitch label="Selected Disabled" disabled={true} checked={state} onChange={() => setState(!state)}/>
    })




