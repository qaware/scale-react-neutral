import React, {FunctionComponent, useEffect, useRef} from 'react';
import {classNameAndPart, ClassNameDefinition, defaultValue} from "../Utils";
import '@telekom/scale-components-neutral/dist/collection/components/table/table.css'


/**
 * Props for custom buttons used in the PSI application.
 */
export type ScaleTableProps = {
    className?: string;
    showSort?: boolean;
    size?: 'default' | 'small';
    striped?: boolean;
}


export const ScaleTable: FunctionComponent<ScaleTableProps> = (props) => {
    const showSort = defaultValue(props.showSort, false);
    const size = defaultValue(props.size, 'default');
    const striped = defaultValue(props.striped, false);

    const hostElement = useRef<HTMLElement>(null);

    useEffect(() => {
        if (hostElement.current === null) {
            return;
        }
        hostElement.current.querySelectorAll('th').forEach((th) => {
            th.insertAdjacentHTML(
                'afterbegin',
                `
          <span class="scale-sort-indicator" aria-hidden="true">
            <svg viewBox="0 0 16 16">
             <polygon transform="translate(8.242641, 10.242641) rotate(45.000000) translate(-8.242641, -10.242641) " points="5.24264069 7.24264069 11.2426407 7.24264069 5.24264069 13.2426407"/></polygon>
             <polygon transform="translate(8.242641, 6.242641) scale(1, -1) rotate(45.000000) translate(-8.242641, -6.242641) " points="5.24264069 3.24264069 11.2426407 3.24264069 5.24264069 9.24264069"/>
            </svg>
          </span>`
            );
        });
    }, [hostElement])

    const classNameDefinition: ClassNameDefinition[] = [
        {name: 'size', modifier: size},
        {name: 'sortable', apply: showSort},
        {name: 'striped', apply: striped},
        {name: 'hydrated', withoutPrefix: true},
    ];

    const {className} = classNameAndPart('table', classNameDefinition, props.className)
    return (
        <scale-table ref={hostElement} class={className}>
            {props.children}
        </scale-table>
    );
}
