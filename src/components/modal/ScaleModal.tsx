/* eslint-disable */
import React, {FunctionComponent, useCallback, useEffect, useRef, useState} from 'react';
import {classNameAndPart, ClassNameDefinition, defaultValue, getChildrenWithType} from '../Utils'
import {ScaleIconActionCircleClose} from "../icons/action-circle-close/ScaleIconActionCircleClose";
import ShadowDom from "../ShadowDom";
import css from '!!raw-loader!postcss-loader!@telekom/scale-components-neutral/dist/collection/components/modal/modal.css'
import {animateTo, KEYFRAMES} from "../animate";

/**
 * Props for custom buttons used in the PSI application.
 */
export interface ScaleModalProps {
    className?: string
    size?: 'small' | 'default' | 'large'
    alignActions?: 'right' | 'left'
    isOpen?: boolean;
    heading: string
    closeButtonLabel?: string
    duration?: number
    onClose?: (trigger: CloseEventTrigger) => void
}

export type CloseEventTrigger = 'CLOSE_BUTTON' | 'ESCAPE_KEY' | 'BACKDROP';


const Body: FunctionComponent = (props) => {
    return (<>{props.children}</>)
}

const Action: FunctionComponent = (props) => {
    return <div slot="action">
        {props.children}
    </div>
}

interface ScaleModalComposition {
    Action: FunctionComponent;
    Body: FunctionComponent
}

export const ScaleModal: FunctionComponent<ScaleModalProps> & ScaleModalComposition = (props) => {
    const isOpenFromProps = defaultValue(props.isOpen, false);
    const size = defaultValue(props.size, 'default');
    const alignActions = defaultValue(props.alignActions, 'right')
    const closeButtonLabel = defaultValue(props.closeButtonLabel, 'Close Pop-up')
    const duration = defaultValue(props.duration, 200)
    const onCloseFromProps = props.onClose;

    const componentRef = useRef<HTMLElement>(null);
    const modalWindowRef = useRef<HTMLDivElement>(null);
    const modalContainerRef = useRef<HTMLDivElement>(null);

    const [openState, setOpenState] = useState<boolean>(isOpenFromProps)


    React.Children.map(props.children, c => c)?.filter(c => typeof c === 'object' && c)


    const body = getChildrenWithType(props.children, Body);
    const hasBody = body.length > 0
    const actions = getChildrenWithType(props.children, Action)
    const hasActionsSlot = actions.length > 0;


    const onClose = useCallback((trigger: CloseEventTrigger) => {
        if (onCloseFromProps) {
            onCloseFromProps(trigger);
        }
    }, [onCloseFromProps]);

    useEffect(() => {
        if (!openState) {
            return undefined;
        }
        const listener = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose('ESCAPE_KEY');
            }
        };
        window.addEventListener('keydown', listener)
        return () => window.removeEventListener('keydown', listener)
    }, [onClose, openState])

    useEffect(() => {
        if (modalWindowRef.current === null || modalContainerRef.current === null) {
            return;
        }
        if (isOpenFromProps) {
            setOpenState(true);
            animateTo(modalWindowRef.current, KEYFRAMES.fadeInTop, {
                duration,
                delay: duration * 0.5,
            });
            animateTo(modalContainerRef.current, KEYFRAMES.fadeIn, {
                duration,
            });
        } else {
            const anim = animateTo(modalContainerRef.current, KEYFRAMES.fadeOut, {
                duration,
            });
            anim.addEventListener('finish', () => {
                setOpenState(false);
            });
        }

    }, [isOpenFromProps, modalWindowRef, modalContainerRef])


    const classNameDefinition: ClassNameDefinition[] = [
        {name: 'is-open', apply: openState},
        {name: 'has-actions', apply: hasActionsSlot},
        {name: 'has-body', apply: hasBody},
        {name: 'align-actions', modifier: alignActions},
        {name: 'size', modifier: size}
    ];

    const {className, partName} = classNameAndPart('modal', classNameDefinition, props.className)
    const hasBodyPart = hasBody ? ' has-body' : ''
    const hasActionsPart = hasBody ? ' has-actions' : ''
    const alignActionsPart = ` align-` + alignActions;

    return (
        <scale-modal ref={componentRef}>
            <ShadowDom rootNode={componentRef} mode="open">
                <style>{css}</style>
                <div className={className} part={partName} ref={modalContainerRef}>
                    <div className="modal__backdrop" onClick={() => onClose('BACKDROP')}/>
                    <div data-focus-trap-edge="" tabIndex={0}/>
                    <div className="modal__window"
                         part={`window size-` + size}
                         role="dialog"
                         aria-modal="true"
                         aria-label={props.heading}
                         ref={modalWindowRef}>
                        <div className="modal__header" part="header">
                            <h2 className="modal__heading" part="heading">{props.heading}</h2>
                            <button className="modal__close-button"
                                    part="close-button"
                                    aria-label={closeButtonLabel}
                                    onClick={() => onClose('CLOSE_BUTTON')}>
                                <slot name="close-icon">
                                    <ScaleIconActionCircleClose/>
                                </slot>
                            </button>
                        </div>
                        <div className="modal__body-wrapper" part={'body-wrapper' + hasBodyPart}>
                            <div className="modal__body" part={'body' + hasBodyPart}>
                                <slot/>
                            </div>
                        </div>
                        <div className="modal__actions" part={'actions' + alignActionsPart + hasActionsPart}>
                            <slot name="action"/>
                        </div>
                    </div>
                    <div data-focus-trap-edge="" tabIndex={0}/>
                </div>
            </ShadowDom>
            {body}
            {actions}
        </scale-modal>
    );
}

ScaleModal.Action = Action;
ScaleModal.Body = Body;

export default ScaleModal;
