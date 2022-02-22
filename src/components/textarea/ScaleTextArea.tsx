import React, {
    ChangeEventHandler,
    FocusEventHandler,
    FormEventHandler,
    FunctionComponent,
    KeyboardEventHandler,
    useState
} from 'react';
import {classNameAndPart, ClassNameDefinition, defaultValue} from "../Utils";
import {useId} from "react-id-generator";
import '@telekom/scale-components-neutral/dist/collection/components/textarea/textarea.css'


/**
 * Props for custom buttons used in the PSI application.
 */
export type ScaleTextAreaProps = {
    id?: string;
    className?: string;
    name?: string;
    label?: string;
    rows?: number;
    cols?: number;
    helperText?: string;
    invalid?: boolean;
    maxLength?: number;
    minLength?: number;
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    counter?: boolean;
    resize?: 'unset' | 'none' | 'vertical' | 'horizontal';
    value?: string | ReadonlyArray<string> | number;
    transparent?: boolean;
    inputAutofocus?: boolean;
    onInput?: FormEventHandler<HTMLTextAreaElement>
    onChange?: ChangeEventHandler<HTMLTextAreaElement>
    onFocus?: FocusEventHandler<HTMLTextAreaElement>
    onBlur?: FocusEventHandler<HTMLTextAreaElement>
    onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>

}


export const ScaleTextArea: FunctionComponent<ScaleTextAreaProps> = (props) => {
    const [generatedId] = useId(1, 'textarea-');
    const id = defaultValue(props.id, generatedId);
    const helperTextId = props.helperText === undefined ? undefined : `helper-message-${id}`;

    const [hasFocus, setHasFocus] = useState<boolean>(false);

    const onFocus: FocusEventHandler<HTMLTextAreaElement> = (e) => {
        setHasFocus(true);
        if (props.onFocus !== undefined) {
            props.onFocus(e);
        }
    }
    const onBlur: FocusEventHandler<HTMLTextAreaElement> = (e) => {
        setHasFocus(false);
        if (props.onBlur !== undefined) {
            props.onBlur(e);
        }
    }


    const classNameDefinition: ClassNameDefinition[] = [
        {name: 'has-focus', apply: hasFocus},
        {name: 'disabled', apply: props.disabled === true},
        {name: 'transparent', apply: props.transparent === true},
        {name: 'status-error', apply: props.invalid === true},
        {name: 'resize', apply: props.resize !== undefined, modifier: props.resize},
        {name: 'readonly', apply: props.readonly === true},
        {
            name: 'animated',
            withoutPrefix: true,
            apply: (props.value !== undefined && props.value !== '')
        },
    ];

    const style = props.resize === undefined ? undefined : {resize: props.resize};

    const {className} = classNameAndPart('textarea', classNameDefinition, props.className)
    return (
        <scale-textarea class="hydrated">
            <div className={className}>
                <label className="textarea__label" htmlFor={id}>
                    {props.label}
                </label>
                <textarea
                    className="textarea__control"
                    style={style}
                    value={props.value}
                    name={props.name}
                    autoFocus={props.inputAutofocus}
                    required={props.required}
                    minLength={props.minLength}
                    maxLength={props.maxLength}
                    id={id}
                    onInput={props.onInput}
                    onChange={props.onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onKeyDown={props.onKeyDown}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    readOnly={props.readonly}
                    rows={props.rows}
                    cols={props.cols}
                    aria-invalid={props.invalid}
                    aria-describedby={helperTextId}
                />

                <span className="textarea__label-safety-background" aria-hidden="true"/>
                {(props.helperText !== undefined || props.counter !== undefined) &&
                    <div
                        className="textarea__meta"
                        id={helperTextId}
                        aria-live="polite"
                        aria-relevant="additions removals"
                    >
                        {props.helperText !== undefined && (
                            <div className="textarea__helper-text">{props.helperText}</div>
                        )}
                        {props.counter !== undefined && (
                            <div className="textarea__counter">
                                {props.value !== undefined ? String(props.value).length : 0} /{' '}
                                {props.maxLength}
                            </div>
                        )}
                    </div>
                }
            </div>
        </scale-textarea>
    );
}
