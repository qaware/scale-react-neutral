import React, {FunctionComponent, useRef} from 'react';
import {classNameAndPart, ClassNameDefinition, defaultValue} from "../Utils";
import ShadowDom from "../ShadowDom";
import css
    from '!!raw-loader!postcss-loader!@telekom/scale-components-neutral/dist/collection/components/pagination/pagination.css'


/**
 * Props for custom buttons used in the PSI application.
 */
export type ScalePaginationProps = {
    className?: string;

    hideBorder?: boolean;
    pageSize?: number;
    startElement?: number;
    totalElements?: number;
    size?: 'small' | 'large';
    ariaLabelFirstPage?: string;
    ariaLabelNextPage?: string;
    ariaLabelPreviousPage?: string;
    ariaLabelLastPage?: string;

    onPagination?: (startElement: number) => void;
}


export const ScalePagination: FunctionComponent<ScalePaginationProps> = (props) => {
    const hideBorder = defaultValue(props.hideBorder, false);
    const pageSize = defaultValue(props.pageSize, 10);
    const startElement = defaultValue(props.startElement, 0);
    const totalElements = defaultValue(props.totalElements, 1);
    const size = defaultValue(props.size, 'large');
    const ariaLabelFirstPage = defaultValue(props.ariaLabelFirstPage, 'Go to first page');
    const ariaLabelNextPage = defaultValue(props.ariaLabelNextPage, 'Go to next page');
    const ariaLabelPreviousPage = defaultValue(props.ariaLabelPreviousPage, 'Go to previous page');
    const ariaLabelLastPage = defaultValue(props.ariaLabelLastPage, 'Go to last page');

    const componentRef = useRef<HTMLElement>(null);

    const name = 'pagination';
    const total = totalElements;
    const start = startElement + 1;
    const end = Math.min(startElement + pageSize, total);
    const isAtStart = start === 1;
    const isAtEnd = end === total;
    const maxWidth = (totalElements.toString().length * 3 + 3) * 9;

    const emitUpdate = (newStartElement: number) => {
        if (props.onPagination !== undefined) {
            props.onPagination(newStartElement);
        }
    }

    const goFirstPage = () => {
        emitUpdate(0);
    }

    const goPreviousPage = () => {
        // Min to prevent going below 0
        emitUpdate(startElement - Math.min(pageSize, startElement));
    }

    const goNextPage = () => {
        emitUpdate(startElement + pageSize);
    }

    const goLastPage = () => {
        emitUpdate(Math.ceil((totalElements - pageSize) / pageSize) * pageSize);
    }


    const classNameDefinition: ClassNameDefinition[] = [
        {name: 'hide-borders', apply: hideBorder},
        {name: 'small', apply: size === 'small'}
    ];

    const {className, partName} = classNameAndPart(name, classNameDefinition, props.className)
    return (
        <scale-pagination ref={componentRef}>
            <ShadowDom rootNode={componentRef} mode="open">
                <style>{css}</style>
                <div className={className} part={partName}>
                    <div part="info-responsive" className={`${name}__info-responsive`}>
            <span>
              {start}-{end}
            </span>{' '}
                        / {total}
                    </div>
                    <div className={`${name}__button-wrapper`}>
                        <div
                            part="info"
                            className={`${name}__info`}
                            style={{width: `${maxWidth}px`}}
                        >
              <span>
                {start}-{end}
              </span>{' '}
                            / {total}
                        </div>
                        <button
                            className={`${name}__first-prompt`}
                            part="first-prompt"
                            disabled={isAtStart}
                            onClick={goFirstPage}
                            aria-label={ariaLabelFirstPage}
                        >
                            <svg
                                height="12"
                                viewBox="0 0 48 52"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="#cacaca"
                            >
                                <path
                                    d="M44.5 48.5L21.5 26L44.5 3.5M27.5 48.5L4.5 26L27.5 3.5"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                        <button
                            className={`${name}__prev-prompt`}
                            part="prev-prompt"
                            disabled={isAtStart}
                            onClick={goPreviousPage}
                            aria-label={ariaLabelPreviousPage}
                        >
                            <svg
                                height="12"
                                viewBox="0 0 37 52"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="#cacaca"
                            >
                                <path
                                    d="M33 48L6 26L33 4"
                                    strokeWidth="7"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                        <button
                            className={`${name}__next-prompt`}
                            part="next-prompt"
                            disabled={isAtEnd}
                            onClick={goNextPage}
                            aria-label={ariaLabelNextPage}
                        >
                            <svg
                                height="12"
                                viewBox="0 0 37 52"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="#cacaca"
                            >
                                <path
                                    d="M4 4L31 26L4 48"
                                    strokeWidth="7"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                        <button
                            className={`${name}__last-prompt`}
                            part="last-prompt"
                            disabled={isAtEnd}
                            onClick={goLastPage}
                            aria-label={ariaLabelLastPage}
                        >
                            <svg
                                height="12"
                                viewBox="0 0 48 52"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="#cacaca"
                            >
                                <path
                                    d="M3.5 3.5L26.5 26L3.5 48.5M20.5 3.5L43.5 26L20.5 48.5"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </ShadowDom>
        </scale-pagination>
    );
}
