import React, {FunctionComponent, HTMLAttributeAnchorTarget, useRef} from 'react';
import {classNameAndPart, ClassNameDefinition} from '../Utils';
import ShadowDom from '../ShadowDom';
import css from '!!raw-loader!postcss-loader!@telekom/scale-components-neutral/dist/collection/components/card/card.css'
import {To} from 'history';
import {AnchorOrLink} from '../../custom/AnchorOrLink';


/**
 * Props for custom buttons used in the PSI application.
 */
export type ScaleCardProps = {
    className?: string;
    href?: string;
    to?: To;
    label?: string ;
    target?: HTMLAttributeAnchorTarget;
    rel?: string;
    onClick?: any;
}


export const ScaleCard: FunctionComponent<ScaleCardProps> = (props) => {
    const componentRef = useRef<HTMLElement>(null);

    const isLink = props.to !== undefined || props.href !== undefined;
    const role = isLink ? 'group' : undefined;
    const classNameDefinition: ClassNameDefinition[] = [
        {name: 'interactive', apply: isLink}
    ];

    const {className, partName} = classNameAndPart('card', classNameDefinition, props.className)
    return (
        <scale-card ref={componentRef}>
            <ShadowDom rootNode={componentRef} mode="open">
                <style>{css}</style>
                <div className="card-border" part="border">
                    {isLink &&
                    <AnchorOrLink
                        className={className}
                        part={partName}
                        onClick={props.onClick}
                        role={role}
                        href={props.href}
                        to={props.to}
                        target={props.target}
                        rel={props.rel}
                        aria-label={props.label}
                    >
                        <div className="card__body" part="body">
                            <slot/>
                        </div>
                    </AnchorOrLink>
                    }
                    {!isLink &&
                        <div
                            className={className}
                            part={partName}
                            onClick={props.onClick}
                            role={role}
                            aria-label={props.label}
                        >
                            <div className="card__body" part="body">
                                <slot/>
                            </div>
                        </div>
                    }
                </div>
            </ShadowDom>
            {props.children}
        </scale-card>
    );
}
