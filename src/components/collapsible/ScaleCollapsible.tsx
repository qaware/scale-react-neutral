import React, {FunctionComponent, MouseEventHandler, useRef} from 'react';
import {classNameAndPart, ClassNameDefinition, defaultValue, getChildrenWithType} from "../Utils";
import ShadowDom from "../ShadowDom";
import css
    from '!!raw-loader!postcss-loader!@telekom/scale-components-neutral/dist/collection/components/collapsible/collapsible.css'
import {useId} from "react-id-generator";
import {ScaleIconNavigationCollapseDown} from "../icons/navigation-collapse-down/ScaleIconNavigationCollapseDown";
import {ScaleAccordion} from "../accordion/ScaleAccordion";


/**
 * Props for custom buttons used in the PSI application.
 */
export type ScaleCollapsibleProps = {
    className?: string;
    expanded?: boolean;
    headingLevel?: number;
    onClick?: MouseEventHandler<HTMLElement>;
}


export const ScaleCollapsible: FunctionComponent<ScaleCollapsibleProps> = (props) => {
    const [generatedId] = useId(1, '');
    const headingId = 'collapsable-heading-' + generatedId;
    const panelId = 'collapsable-panel-' + generatedId;
    const expanded = defaultValue(props.expanded, false)
    const headingLevel = defaultValue(props.headingLevel, 2)
    const heading = getChildrenWithType(props.children, ScaleAccordion.Heading);
    const body = getChildrenWithType(props.children, ScaleAccordion.Body);


    const componentRef = useRef<HTMLElement>(null);


    const classNameDefinition: ClassNameDefinition[] = [
        {name: 'expanded', apply: expanded}
    ];

    const {className} = classNameAndPart('collapsible', classNameDefinition, props.className)
    return (
        <scale-collapsible ref={componentRef}>
            <ShadowDom rootNode={componentRef} mode="open">
                <style>{css}</style>
                <div
                    className={className}
                    part={'base' + (expanded ? ' expanded' : '')}
                >
                    <h2
                        aria-level={headingLevel}
                        className="collapsible__heading"
                        part="heading"
                    >
                        <button
                            id={headingId}
                            className="collapsible__button"
                            part="button"
                            onClick={props.onClick}
                            aria-expanded={expanded ? 'true' : 'false'}
                            aria-controls={panelId}
                        >
                            <ScaleIconNavigationCollapseDown
                                size={16}
                                decorative={true}
                                className="collapsible__icon"
                                part={'icon' + (expanded ? ' expanded' : '')}
                            />
                            <span
                                className="collapsible__button-text"
                                part="button-text"
                            >
                                <slot name="heading">
                                    {heading}
                                </slot>
                         </span>
                        </button>
                    </h2>
                    <div
                        id={panelId}
                        role="region"
                        aria-labelledby={headingId}
                        hidden={!expanded}
                        className="collapsible__content"
                        part="content"
                    >
                        <slot>
                            {body}
                        </slot>
                    </div>
                </div>
            </ShadowDom>
        </scale-collapsible>
    );
}
