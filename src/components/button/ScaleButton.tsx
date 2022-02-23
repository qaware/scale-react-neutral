import React, {HTMLAttributeAnchorTarget, MouseEventHandler, useRef} from 'react';
import ShadowDom from '../ShadowDom'
import css from '!!raw-loader!postcss-loader!@telekom/scale-components-neutral/dist/collection/components/button/button.css'
import {defaultValue} from '../Utils';
import {To} from 'history';
import {AnchorOrLink} from '../../custom/AnchorOrLink';


/**
 * Props for custom buttons used in the PSI application.
 */
export type ScaleButtonProps = {
    id?: string;
    slot?: string
    disabled?: boolean;
    className?: string;
    variant?: 'primary' | 'secondary' | 'ghost',
    size?: 'large' | 'small',
    iconPosition?: 'before' | 'after' | 'only'
    type?: 'submit' | 'reset' | 'button'
    href?: string
    to?: To
    target?: HTMLAttributeAnchorTarget
    download?: string
    innerTabindex?: number
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export const ScaleButton = React.forwardRef<HTMLAnchorElement & HTMLButtonElement, ScaleButtonProps>((props, ref) => {
    const variant = defaultValue(props.variant, 'primary');
    const size = defaultValue(props.size, 'large');
    const iconPosition = defaultValue(props.iconPosition, 'after');
    const disabled = defaultValue(props.disabled, false);
    const type = defaultValue(props.type, 'button');
    const target = defaultValue(props.target, '_self');

    const componentRef = useRef<HTMLElement>(null);
    const renderLink = props.href !== undefined || props.to !== undefined;

    const className = ['button'];
    const basePart = ['base'];
    className.push('button--size-' + size);
    className.push('button--variant-' + variant);
    className.push('button--icon-' + iconPosition);
    basePart.push('variant' + variant);
    basePart.push(iconPosition);
    if (disabled) {
        className.push('button--disabled');
        basePart.push('disabled')
    }
    if (props.className) {
        className.push(props.className);
    }

    return (
        <scale-button ref={componentRef} slot={props.slot}>
            <ShadowDom rootNode={componentRef} mode={'open'}>
                <style>{css.toString()}</style>
                {renderLink &&
                    <AnchorOrLink
                        ref={ref}
                        className={className.join(' ')}
                        href={props.href}
                        to={props.to}
                        download={props.download}
                        target={target}
                        rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
                        part={basePart.join(' ')}
                        tabIndex={props.innerTabindex}
                    >
                        <slot/>
                    </AnchorOrLink>
                }
                {!renderLink &&
                    <button
                        id={props.id}
                        ref={ref}
                        onClick={props.onClick}
                        className={className.join(' ')}
                        disabled={disabled}
                        type={type}
                        part={basePart.join(' ')}
                        tabIndex={props.innerTabindex}>
                        <slot/>
                    </button>}
            </ShadowDom>
            {props.children}
        </scale-button>
    );
});
