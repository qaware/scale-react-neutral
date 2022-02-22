import {storiesOf} from "@storybook/react";
import React, {useState} from "react";
import {ScaleTextField} from "./ScaleTextField";


storiesOf('Text Field', module)
    .add('Standard', () => {
        return <ScaleTextField label="An Input"/>
    })
    .add('Text with Events', () => {
        return <ScaleTextField label="Text With events"
                               onFocus={() => console.log('onFocus')}
                               onBlur={() => console.log('onBlur')}
                               onChange={() => console.log('onChange')}
                               onInput={() => console.log('onInput')}
                               onKeyDown={() => console.log('onKeyDown')}
        />
    })
    .add('Placeholder', () => {
        return <ScaleTextField label="Placeholder" placeholder="this is the placeholder"/>
    })
    .add('Helper Text', () => {
        return <ScaleTextField label="Helper Text" helperText="Make sure to fill this"/>
    })
    .add('Small', () => {
        return <ScaleTextField label="Small" size="small"/>
    })
    .add('With Error', () => {
        return <ScaleTextField label="With Error" helperText="something is wrong" invalid={true}/>
    })
    .add('Disabled', () => {
        return <ScaleTextField label="Disabled" disabled={true}/>
    })
    .add('Readonly', () => {
        return <ScaleTextField label="Read Only" value="This cannot be changed" readonly={true}/>
    })
    .add('Max Length With Counter', () => {
        const [state, setState] = useState('');
        return <ScaleTextField label="Max Length With Counter" maxLength={10} counter={true} value={state}
                               onChange={(e) => setState(e.target.value)}/>
    })



