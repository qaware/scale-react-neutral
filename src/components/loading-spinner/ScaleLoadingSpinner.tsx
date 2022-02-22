import React, {FunctionComponent, useRef} from 'react';
import ShadowDom from '../ShadowDom'
import css
    from '!!raw-loader!postcss-loader!@telekom/scale-components-neutral/dist/collection/components/loading-spinner/loading-spinner.css'
import {classNameAndPart, ClassNameDefinition, defaultValue} from "../Utils";
import {useId} from "react-id-generator";


/**
 * Props for custom buttons used in the PSI application.
 */
export type ScaleLoadingSpinnerProps = {
    id?: string;
    slot?: string
    className?: string;
    variant?: 'primary' | 'white',
    alignment?: 'horizontal' | 'vertical'
    text?: string
    size?: 'large' | 'small',
}


export const ScaleLoadingSpinner: FunctionComponent<ScaleLoadingSpinnerProps> = (props) => {
    const [generatedId] = useId();
    const variant = defaultValue(props.variant, 'primary');
    const alignment = defaultValue(props.alignment, 'horizontal');
    const size = defaultValue(props.size, 'small');

    const componentRef = useRef<HTMLElement>(null);

    const classNameDefinition: ClassNameDefinition[] = [
        {name: 'variant', modifier: variant},
        {name: 'alignment', modifier: alignment},
        {name: 'size', modifier: size},
        {name: 'text', apply: props.text !== undefined},
    ];

    const {className, partName} = classNameAndPart('spinner', classNameDefinition, props.className)

    return (
        <scale-loading-spinner ref={componentRef} slot={props.slot}>
            <ShadowDom rootNode={componentRef} mode={'open'}>
                <style>{css.toString()}</style>
                <div part={partName} className={className}>
                    <div part="container" className="spinner__container">
                        <svg className="spinner__circle" viewBox="0 0 50 50" aria-hidden="true">
                            <circle
                                className="path"
                                cx="25"
                                cy="25"
                                r="20"
                                fill="none"
                                strokeWidth="4"
                            />
                        </svg>
                        <svg
                            className="spinner__circle-background"
                            viewBox="0 0 50 50"
                            aria-hidden="true"
                        >
                            <circle
                                className="path"
                                cx="25"
                                cy="25"
                                r="20"
                                fill="none"
                                strokeWidth="4"
                            />
                        </svg>
                    </div>
                    <div className="sr-only" aria-live="polite" id={`spinner-label-${generatedId}`}>
                        {props.text || 'Loading'}
                    </div>
                    {props.text !== undefined
                        ?
                        <div part="text" className="spinner__text" aria-hidden="true">
                            {props.text}
                        </div>
                        :
                        <div/>
                    }
                </div>
            </ShadowDom>
        </scale-loading-spinner>
    );
}
