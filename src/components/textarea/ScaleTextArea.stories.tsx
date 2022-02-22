import {storiesOf} from "@storybook/react";
import React, {useState} from "react";
import {ScaleTextArea} from "./ScaleTextArea";


storiesOf('Text Area', module)
    .add('Standard', () => {
        return <ScaleTextArea label="An Input"/>
    })
    .add('Text with Events', () => {
        return <ScaleTextArea label="Text With events"
                               onFocus={() => console.log('onFocus')}
                               onBlur={() => console.log('onBlur')}
                               onChange={() => console.log('onChange')}
                               onInput={() => console.log('onInput')}
                               onKeyDown={() => console.log('onKeyDown')}
        />
    })
    .add('Placeholder', () => {
        return <ScaleTextArea label="Placeholder" placeholder="this is the placeholder"/>
    })
    .add('Helper Text', () => {
        return <ScaleTextArea label="Helper Text" helperText="Make sure to fill this"/>
    })
    .add('With Error', () => {
        return <ScaleTextArea label="With Error" helperText="something is wrong" invalid={true}/>
    })
    .add('Disabled', () => {
        return <ScaleTextArea label="Disabled" disabled={true}/>
    })
    .add('Readonly', () => {
        return <ScaleTextArea label="Read Only" value="This cannot be changed" readonly={true}/>
    })
    .add('Max Length With Counter', () => {
        const [state, setState] = useState('');
        return <ScaleTextArea label="Max Length With Counter" maxLength={10} counter={true} value={state}
                               onChange={(e) => setState(e.target.value)}/>
    })
    .add('More rows', () => {
        return <ScaleTextArea label="More Rows" rows={10}/>
    })



