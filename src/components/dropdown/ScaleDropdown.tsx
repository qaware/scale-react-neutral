import React, {
    ChangeEventHandler,
    FocusEventHandler,
    FunctionComponent,
    KeyboardEventHandler,
    ReactElement
} from 'react';
import '@telekom/scale-components-neutral/dist/collection/components/dropdown/dropdown.css'
import {classNameAndPart, ClassNameDefinition, defaultValue} from "../Utils";
import {useId} from "react-id-generator";
import {ScaleIconNavigationCollapseDown} from "../icons/navigation-collapse-down/ScaleIconNavigationCollapseDown";


/**
 * Props for custom buttons used in the PSI application.
 */
export type ScaleDropdownProps = {
    id?: string;
    slot?: string
    className?: string;
    name?: string;
    label: string;
    size?: 'standard' | 'small';
    helperText?: string;
    invalid?: boolean;
    disabled?: boolean;
    required?: boolean;
    value?: string | number;
    multiple?: boolean;
    visibleSize?: number;
    transparent?: boolean;
    onChange?: ChangeEventHandler<HTMLSelectElement>
    onFocus?: FocusEventHandler<HTMLSelectElement>
    onBlur?: FocusEventHandler<HTMLSelectElement>
    onKeyDown?: KeyboardEventHandler<HTMLSelectElement>
    icon?: ReactElement;
}


export const ScaleDropDown: FunctionComponent<ScaleDropdownProps> = (props) => {
    const [generatedId] = useId();
    const id = defaultValue(props.id, generatedId);
    const disabled = defaultValue(props.disabled, false);
    const required = defaultValue(props.required, false);
    const transparent = defaultValue(props.transparent, false);
    const invalid = defaultValue(props.invalid, false);
    const size = defaultValue(props.size, 'standard');
    const multiple = defaultValue(props.multiple, false);
    const icon = defaultValue(props.icon, <ScaleIconNavigationCollapseDown decorative={true}/>);
    const helperTextId = `helper-message-${id}`;
    const ariaDescribedByAttr = props.helperText !== undefined ? helperTextId : undefined;


    const classNameDefinition: ClassNameDefinition[] = [
        {name: 'disabled', apply: disabled},
        {name: 'transparent', apply: transparent},
        {name: 'status-error', apply: invalid},
        {name: 'size', modifier: size, apply: size !== 'standard'}
    ];

    const {className, partName} = classNameAndPart('dropdown', classNameDefinition, props.className)
    return (
        <scale-dropdown class="hydrated" slot={props.slot}>
            <div part={partName} className={className + ' animated'}>
                <label className="input__label" htmlFor={id}>
                    {props.label}
                </label>
                <div className="input__dropdown-wrapper">
                    <select
                        className="input__dropdown"
                        value={props.value}
                        onChange={props.onChange}
                        onFocus={props.onFocus}
                        onBlur={props.onBlur}
                        onKeyDown={props.onKeyDown}
                        disabled={disabled}
                        required={required}
                        multiple={multiple}
                        id={id}
                        name={props.name}
                        size={props.visibleSize}
                        aria-invalid={props.invalid}
                        aria-describedby={ariaDescribedByAttr}
                    >
                        {props.children}
                    </select>
                    <div className="input__dropdown-icon">
                        {icon}
                    </div>
                </div>
                {props.helperText && (
                    <div
                        className="input__meta"
                        id={helperTextId}
                        aria-live="polite"
                        aria-relevant="additions removals"
                    >
                        <div className="input__helper-text">{props.helperText}</div>
                    </div>
                )}
            </div>
        </scale-dropdown>
    );
}
