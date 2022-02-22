import React, {FunctionComponent, useRef} from 'react';
import {classNameAndPart, ClassNameDefinition, defaultValue} from "../Utils";
import ShadowDom from "../ShadowDom";
import css from '!!raw-loader!postcss-loader!@telekom/scale-components-neutral/dist/collection/components/divider/divider.css'


/**
 * Props for custom buttons used in the PSI application.
 */
export type ScaleDividerProps = {
    vertical?: boolean;
    className?: string;
}


export const ScaleDivider: FunctionComponent<ScaleDividerProps> = (props) => {
    const vertical = defaultValue(props.vertical, false);
    const componentRef = useRef<HTMLElement>(null);


    const classNameDefinition: ClassNameDefinition[] = [
        {name: 'vertical', apply: vertical}
    ];

    const {className, partName} = classNameAndPart('divider', classNameDefinition, props.className)
    return (
        <scale-divider ref={componentRef}>
            <ShadowDom rootNode={componentRef} mode="open">
                <style>{css}</style>
                <div className={className} part={partName} aria-hidden="true">
                    {!vertical ? (
                        <hr className="divider__horizontal" part="rule-horizontal" />
                    ) : (
                        <span className="divider__vertical" part="rule-vertical" />
                    )}
                </div>
            </ShadowDom>
        </scale-divider>
    );
}
