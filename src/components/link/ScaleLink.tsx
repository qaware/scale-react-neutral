import React, {FunctionComponent, HTMLAttributeAnchorTarget, HTMLAttributeReferrerPolicy, useMemo, useRef} from 'react';
import {classNameAndPart, ClassNameDefinition, defaultValue} from "../Utils";
import ShadowDom from "../ShadowDom";
import css from '!!raw-loader!postcss-loader!@telekom/scale-components-neutral/dist/collection/components/link/link.css'
import {IconsProps} from "../icon/IconsProps";
import {To} from "history";
import {AnchorOrLink} from "../../custom/AnchorOrLink";


/**
 * Props for custom buttons used in the PSI application.
 */
export type ScaleLinkProps = {
    id?: string;
    className?: string;
    disabled?: boolean;
    omitUnderline?: boolean;
    href?: string;
    to?: To;
    download?: boolean;
    iconPosition?: 'before' | 'after';
    hreflang?: string;
    ping?: string;
    referrerPolicy?: HTMLAttributeReferrerPolicy;
    rel?: string;
    target?: HTMLAttributeAnchorTarget;
    type?: string;
    innerTabindex?: number;
    icon?: FunctionComponent<IconsProps>;
    iconSize?: number
    iconAccessibilityTitle?: string;
}


export const ScaleLink: FunctionComponent<ScaleLinkProps> = (props) => {
    const disabled = defaultValue(props.disabled, false);
    const omitUnderline = defaultValue(props.omitUnderline, false);
    const iconPosition = defaultValue(props.iconPosition, 'after');
    const iconSize = defaultValue(props.iconSize, 16);
    const iconAccessibilityTitle = props.iconAccessibilityTitle;
    const tabIndex = disabled ? -1 : props.innerTabindex;

    const iconProp = props.icon;
    const icon = useMemo(() => {
        if (iconProp === undefined) {
            return undefined;
        }
        return React.createElement(iconProp, {slot: 'icon', size: iconSize, accessibilityTitle: iconAccessibilityTitle})
    }, [iconProp, iconSize, iconAccessibilityTitle])

    const componentRef = useRef<HTMLElement>(null);

    const classNameDefinition: ClassNameDefinition[] = [
        {name: 'disabled', apply: disabled, withoutPrefix: true},
        {name: 'reverse', apply: iconPosition === 'before', withoutPrefix: true},
        {name: 'no-underline', apply: omitUnderline, withoutPrefix: true}
    ];

    const {className} = classNameAndPart('', classNameDefinition, props.className)

    return (
        <scale-link ref={componentRef} class={className}>
            <ShadowDom rootNode={componentRef} mode="open">
                <style>{css}</style>
                <AnchorOrLink
                    id={props.id}
                    part="anchor"
                    href={props.href}
                    to={props.to}
                    tabIndex={tabIndex}
                    aria-disabled={disabled}
                    download={props.download}
                    hrefLang={props.hreflang}
                    ping={props.ping}
                    referrerPolicy={props.referrerPolicy}
                    rel={props.rel}
                    target={props.target}
                    type={props.type}
                >
                    <div part="content">
                        <slot/>
                    </div>
                    <slot name="icon"/>
                </AnchorOrLink>
            </ShadowDom>
            {props.children}
            {icon}
        </scale-link>
    );
}
