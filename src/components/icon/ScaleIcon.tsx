import React, {PropsWithChildren, ReactElement} from 'react'
import {defaultValue} from "../Utils";
import '@telekom/scale-components-neutral/dist/collection/components/icon/icon.css'


export type ScaleIconProps = {
    name: string
    slot?: string
    size?: number
    fill?: string
    color?: string
    selected?: boolean
    decorative?: boolean
    accessibilityTitle?: string
    className?: string
    focusable?: boolean
    onClick?: React.MouseEventHandler<SVGSVGElement>
}


function ScaleIcon(props: PropsWithChildren<ScaleIconProps>): ReactElement {
    const size = defaultValue(props.size, 24);
    const focusable = defaultValue(props.focusable, false);
    const decorative = defaultValue(props.decorative, false);
    const className = ['hydrated'];
    if (props.className !== undefined) {
        className.push(props.className)
    }

    return (
        <scale-icon class={className.join(' ')} slot={props.slot}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={size} height={size}
                 viewBox="0 0 24 24" role="img" aria-hidden={decorative} tabIndex={focusable ? 0 : undefined}
                 onClick={props.onClick}>
                {props.accessibilityTitle && <title>{props.accessibilityTitle}</title>}
                {props.children}
            </svg>
        </scale-icon>
    )
}


export default ScaleIcon;
