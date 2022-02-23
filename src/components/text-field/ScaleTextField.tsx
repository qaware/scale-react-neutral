import React, {
    ChangeEventHandler,
    FocusEventHandler,
    FormEventHandler,
    KeyboardEventHandler,
    useState
} from 'react';
import {classNameAndPart, ClassNameDefinition, defaultValue} from "../Utils";
import {useId} from "react-id-generator";
import '@telekom/scale-components-neutral/dist/collection/components/text-field/text-field.css'


/**
 * Props for custom buttons used in the PSI application.
 */
export type ScaleTextFieldProps = {
    id?: string;
    className?: string;
    type?: 'email'
        | 'hidden'
        | 'number'
        | 'password'
        | 'tel'
        | 'text'
        | 'date'
        | 'url';
    name?: string;
    label?: string;
    size?: 'default' | 'small';
    helperText?: string;
    invalid?: boolean;
    maxLength?: number;
    minLength?: number;
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    counter?: boolean;
    value?: string | ReadonlyArray<string> | number;
    transparent?: boolean;
    step?: number | string;
    list?: string;
    inputAutofocus?: boolean;
    onInput?: FormEventHandler<HTMLInputElement>
    onChange?: ChangeEventHandler<HTMLInputElement>
    onFocus?: FocusEventHandler<HTMLInputElement>
    onBlur?: FocusEventHandler<HTMLInputElement>
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>

}


export const ScaleTextField = React.forwardRef<HTMLInputElement, ScaleTextFieldProps>((props, ref) => {
    const [generatedId] = useId(1, 'text-field-');
    const id = defaultValue(props.id, generatedId);
    const type = defaultValue(props.type, 'text');
    const size = defaultValue(props.size, 'default');
    const helperTextId = props.helperText === undefined ? undefined : `helper-message-${id}`;

    const [hasFocus, setHasFocus] = useState<boolean>(false);

    const onFocus: FocusEventHandler<HTMLInputElement> = (e) => {
        setHasFocus(true);
        if (props.onFocus !== undefined) {
            props.onFocus(e);
        }
    }
    const onBlur: FocusEventHandler<HTMLInputElement> = (e) => {
        setHasFocus(false);
        if (props.onBlur !== undefined) {
            props.onBlur(e);
        }
    }


    const classNameDefinition: ClassNameDefinition[] = [
        {name: 'type', modifier: type},
        {name: 'has-focus', apply: hasFocus},
        {name: 'disabled', apply: props.disabled === true},
        {name: 'transparent', apply: props.transparent === true},
        {name: 'status-error', apply: props.invalid === true},
        {name: 'size', modifier: size},
        {name: 'readonly', apply: props.readonly === true},
        {
            name: 'animated',
            withoutPrefix: true,
            apply: (props.value !== undefined && props.value !== '') || type === 'date'
        },
    ];

    const {className} = classNameAndPart('text-field', classNameDefinition, props.className)
    return (
        <scale-text-field class="hydrated">
            <div className={className}>
                <label className="text-field__label" htmlFor={id}>
                    {props.label}
                </label>
                <input
                    ref={ref}
                    type={type}
                    className="text-field__control"
                    value={props.value}
                    name={props.name}
                    autoFocus={props.inputAutofocus}
                    required={props.required}
                    minLength={props.minLength}
                    maxLength={props.maxLength}
                    id={id}
                    list={props.list}
                    onInput={props.onInput}
                    onChange={props.onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onKeyDown={props.onKeyDown}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    readOnly={props.readonly}
                    step={props.step}
                    aria-invalid={props.invalid}
                    aria-describedby={helperTextId}
                />

                {(props.helperText !== undefined || props.counter !== undefined) &&
                    <div
                        className="text-field__meta"
                        id={helperTextId}
                        aria-live="polite"
                        aria-relevant="additions removals"
                    >
                        {props.helperText !== undefined && (
                            <div className="text-field__helper-text">{props.helperText}</div>
                        )}
                        {props.counter !== undefined && (
                            <div className="text-field__counter">
                                {props.value !== undefined ? String(props.value).length : 0} /{' '}
                                {props.maxLength}
                            </div>
                        )}
                    </div>
                }
            </div>
        </scale-text-field>
    );
});
