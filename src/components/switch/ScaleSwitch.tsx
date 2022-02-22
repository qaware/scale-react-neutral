import React, {ChangeEventHandler, FunctionComponent} from 'react';
import {classNameAndPart, ClassNameDefinition, defaultValue} from "../Utils";
import {useId} from "react-id-generator";
import '@telekom/scale-components-neutral/dist/collection/components/switch/switch.css'


/**
 * Props for custom buttons used in the PSI application.
 */
export type ScaleSwitchProps = {
    id?: string;
    slot?: string
    className?: string;
    disabled?: boolean
    checked?: boolean
    name?: string
    label?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
}


export const ScaleSwitch: FunctionComponent<ScaleSwitchProps> = (props) => {
    const [generatedId] = useId(1, 'switch-');
    const id = defaultValue(props.id, generatedId);
    const checked = defaultValue(props.checked, false);

    const classNameDefinition: ClassNameDefinition[] = [
        {name: 'disabled', apply: props.disabled}
    ];

    const {className} = classNameAndPart('switch', classNameDefinition, props.className)
    return (
        <scale-switch class="hydrated" slot={props.slot}>
                <div className={className}>
                    <label id={`${id}-label`}>
                        <input
                            type="checkbox"
                            name={props.name}
                            checked={checked}
                            disabled={props.disabled}
                            aria-labelledby={`${id}-label`}
                            id={id}
                            onChange={props.onChange}
                        />
                        <div className="switch__wrapper">
                            <div className="switch__toggle" />
                            <div className="switch__text" />
                        </div>
                        {props.label && <span className="switch__label">{props.label}</span>}
                    </label>
                </div>
        </scale-switch>
    );
}
