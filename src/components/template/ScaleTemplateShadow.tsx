import React, {FunctionComponent, useRef} from 'react';
import {classNameAndPart, ClassNameDefinition, defaultValue} from "../Utils";
import {useId} from "react-id-generator";
import ShadowDom from "../ShadowDom";
import css from '!!raw-loader!postcss-loader!@telekom/scale-components-neutral/dist/collection/components/button/button.css'


/**
 * Props for custom buttons used in the PSI application.
 */
export type ScaleTemplateProps = {
    id?: string;
    className?: string;
}


export const ScaleTemplate: FunctionComponent<ScaleTemplateProps> = (props) => {
    const [generatedId] = useId(1, 'template-');
    const id = defaultValue(props.id, generatedId);
    const componentRef = useRef<HTMLElement>(null);



    const classNameDefinition: ClassNameDefinition[] = [
    ];

    const {className, partName} = classNameAndPart('template', classNameDefinition, props.className)
    return (
        <scale-template ref={componentRef}>
            <ShadowDom rootNode={componentRef} mode="open">
                <style>{css}</style>
                <div className={className} part={partName}>
                    <input id={id}/>
                </div>
            </ShadowDom>
        </scale-template>
    );
}
