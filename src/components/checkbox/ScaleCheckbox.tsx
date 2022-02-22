import React, {ChangeEventHandler, ReactElement} from 'react';
import '@telekom/scale-components-neutral/dist/collection/components/checkbox/checkbox.css'
import {classNameAndPart, ClassNameDefinition, defaultValue} from "../Utils";
import {ScaleIconActionIndeterminate} from "../icons/action-indeterminate/ScaleIconActionIndeterminate";
import {ScaleIconActionSuccess} from "../icons/action-success/ScaleIconActionSuccess";
import {useId} from "react-id-generator";


export type ScaleCheckboxValue = boolean | 'indeterminate';

export type ScaleCheckboxProps = {
    id?: string
    className?: string
    value?: ScaleCheckboxValue
    label?: string
    name?: string
    helperText?: string
    disabled?: boolean
    invalid?: boolean
    onChange?: ChangeEventHandler<HTMLInputElement>
}




export function ScaleCheckbox(props: ScaleCheckboxProps): ReactElement {
    const [generatedId] = useId(1, 'template-');
    const id = defaultValue(props.id, generatedId);


    const value = defaultValue(props.value, false);

    const classNameDefinition: ClassNameDefinition[] = [
        {name: 'hydrated', withoutPrefix: true},
        {name: 'checked', withoutPrefix: true, apply: value === true},
        {name: 'indeterminate', withoutPrefix: true, apply: value === 'indeterminate'},
        {name: 'disabled', withoutPrefix: true, apply: props.disabled === true},
        {name: 'invalid', withoutPrefix: true, apply: props.invalid === true},
        {name: 'error', withoutPrefix: true, apply: props.invalid === true},
    ];

    const {className} = classNameAndPart('checkbox', classNameDefinition, props.className)

    return (
        <scale-checkbox class={className}>
            <input type="checkbox"
                   part="input"
                   name={props.name}
                   className="checkbox-input"
                   id={id}
                   disabled={props.disabled}
                   checked={props.value === true}
                   onChange={props.onChange}/>
            <label part="container" htmlFor={id}>
                <div part="checkbox">
                    {renderIcon(value)}
                </div>
                <div part="label">{props.label}</div>
            </label>
            {props.helperText !== undefined &&
                <div part="helper-text" aria-live="polite"
                     aria-relevant="additions removals">{props.helperText}</div>
            }
        </scale-checkbox>
    );
}

function renderIcon(value: ScaleCheckboxValue): ReactElement {
    if (value === 'indeterminate') {
        return <ScaleIconActionIndeterminate part="icon" decorative={true}/>
    }
    if (value) {
        return <ScaleIconActionSuccess part="icon" decorative={true}/>
    }
    return <></>
}
