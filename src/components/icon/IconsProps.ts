import React from "react";

export type IconsProps = {
    slot?: string
    size?: number
    fill?: string
    color?: string
    selected?: boolean
    decorative?: boolean
    accessibilityTitle?: string
    className?: string
    focusable?: boolean
    part?: string
    onClick?: React.MouseEventHandler<SVGSVGElement>
    onKeyDown?: React.KeyboardEventHandler<SVGSVGElement>
}
