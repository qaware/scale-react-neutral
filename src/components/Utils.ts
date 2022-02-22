import React, {JSXElementConstructor, MouseEventHandler, ReactElement, ReactNode} from "react";

export function defaultValue<T>(val: T | undefined, defaultVal: T): T {
    if (val === undefined) {
        return defaultVal;
    }
    return val;
}

export type ClassNameDefinition = {
    name: string
    modifier?: string
    apply?: boolean
    withoutPrefix?: boolean;
}

export function classNameAndPart(baseName: string, input: ClassNameDefinition[] = [], additionalClasses?: string) {
    const namesToApply = input.filter(definition => definition.apply !== false);
    const classNames = [baseName].concat(namesToApply.map(definition => concatName(definition, baseName)));
    const partNames = [baseName].concat(namesToApply.map(definition => concatName(definition)));
    if (additionalClasses !== undefined) {
        classNames.push(additionalClasses)
    }
    return {
        className: classNames.join(' '),
        partName: partNames.join(' ')
    };
}

function concatName(definition: ClassNameDefinition, baseName?: string) {
    let result = '';
    if (baseName !== undefined && definition.withoutPrefix !== true) {
        result += `${baseName}--`;
    }
    result += definition.name;
    if (definition.modifier !== undefined) {
        result += `-${definition.modifier}`;
    }
    return result;
}

export function getChildrenWithType(children: ReactNode | undefined, type: string | JSXElementConstructor<any>): ReactElement[] {
    const childObjects = getChildObjects(children);
    if (childObjects.length === 0) {
        return [];
    }
    return childObjects.filter(c => c.type === type);
}

function getChildObjects(children: ReactNode | undefined): ReactElement[] {
    if (children === undefined || children === null) {
        return [];
    }
    return React.Children.toArray(children)
        .filter(React.isValidElement)
}


export function menuItemHref(props: { href?: string, onClick?: MouseEventHandler }): string | undefined {
    if (props.href !== undefined) {
        return props.href;
    }
    if (props.onClick !== undefined) {
        return '';
    }
    return undefined;
}

export function menuItemOnClick(props: { href?: string, onClick?: MouseEventHandler }): MouseEventHandler | undefined {
    if (props.onClick !== undefined) {
        return props.onClick;
    }
    if (props.href === undefined) {
        return (e) => {
            e.preventDefault()
        };
    }
    return undefined;
}

export const noop = () => {
};
