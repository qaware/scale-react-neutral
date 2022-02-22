import {storiesOf} from "@storybook/react";
import {ScaleCheckbox, ScaleCheckboxValue} from "./ScaleCheckbox";
import React, {useState} from "react";

storiesOf('ScaleCheckbox', module)
    .add('Standard', () => {
        return <ScaleCheckbox id="1" value={false} label="Checkbox"/>
    })
    .add('Standard Disabled', () => {
        return <ScaleCheckbox id="1" value={false} disabled={true} label="Standard Disabled"/>
    })
    .add('Selected', () => {
        return <ScaleCheckbox id="1" value={true} label="Selected"/>
    })
    .add('Indeterminate', () => {
        return <ScaleCheckbox id="1" value={'indeterminate'} label="Indeterminate"/>
    })
    .add('Clickable', () => {
        const [state, setState] = useState(false);
        return <ScaleCheckbox id="1" value={state} onChange={() => setState(!state)} label="Clickable"/>
    })
    .add('Clickable Indeterminate', () => {
        const [state, setState] = useState<ScaleCheckboxValue>(false);
        const onChange = () => {
            switch (state){
                case false:
                    setState('indeterminate');
                    break;
                case 'indeterminate':
                    setState(true);
                    break;
                case true:
                    setState(false)
                    break;
            }
        }
        return <ScaleCheckbox id="1" value={state} onChange={onChange} label="Clickable Indeterminate"/>
    })

