import React, {FunctionComponent} from 'react';
import {classNameAndPart, ClassNameDefinition, defaultValue} from "../Utils";
import {useId} from "react-id-generator";
import '@telekom/scale-components-neutral/dist/collection/components/button/button.css'


/**
 * Props for custom buttons used in the PSI application.
 */
export type ScaleTemplateProps = {
    id?: string;
    slot?: string
    className?: string;
}


export const ScaleTemplate: FunctionComponent<ScaleTemplateProps> = (props) => {
    const [generatedId] = useId(1, 'template-');
    const id = defaultValue(props.id, generatedId);

    const classNameDefinition: ClassNameDefinition[] = [];

    const {className, partName} = classNameAndPart('template', classNameDefinition, props.className)
    return (
        <scale-template class="hydrated" slot={props.slot}>
            <div className={className} part={partName}>
                <input id={id}/>
            </div>
        </scale-template>
    );
}
