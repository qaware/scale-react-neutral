import React, {FunctionComponent, useCallback, useMemo, useRef, useState} from 'react';
import {classNameAndPart, defaultValue, noop} from "../Utils";
import ShadowDom from "../ShadowDom";
import {ScaleCollapsible} from "../collapsible/ScaleCollapsible";

export type ScaleAccordionProps = {
    className?: string;
    dependent?: boolean;
    headingLevel?: number;
    initialExpanded?: string[];
}

interface ScaleAccordionComposition {
    Item: FunctionComponent<AccordionItemProps>
    Heading: FunctionComponent;
    Body: FunctionComponent
}


export const ScaleAccordion: ScaleAccordionComposition & FunctionComponent<ScaleAccordionProps> = (props) => {
    const componentRef = useRef<HTMLElement>(null);
    const dependent = defaultValue(props.dependent, false);
    const initialExpanded = defaultValue(props.initialExpanded, []);
    const {className} = classNameAndPart('accordion', [], props.className)
    const headingLevel = props.headingLevel;

    const [openItems, setOpenItems] = useState<string[]>(initialExpanded);

    const callback = useCallback((eventKey: string) => {
        if (dependent) {
            setOpenItems((prevState) => handleClickDependent(prevState, eventKey));
        } else {
            setOpenItems((prevState) => handleClickDefault(prevState, eventKey));
        }
    }, [setOpenItems]);


    const contextValue = useMemo(() => {
        return {openItems, callback, headingLevel};
    }, [openItems, callback, headingLevel])

    return (
        <scale-accordion ref={componentRef}>
            <ShadowDom rootNode={componentRef} mode="open">
                <div className={className}>
                    <ScaleAccordionContext.Provider value={contextValue}>
                        {props.children}
                    </ScaleAccordionContext.Provider>
                </div>
            </ShadowDom>
        </scale-accordion>
    );
}


export type AccordionItemProps = {
    eventKey: string
}

const Item: FunctionComponent<AccordionItemProps> = (props) => {
    return (
        <ScaleAccordionContext.Consumer>
            {({openItems, callback, headingLevel}) => {
                const expanded = openItems.includes(props.eventKey)
                const onClick = () => {
                    callback(props.eventKey);
                }

                return <ScaleCollapsible onClick={onClick} expanded={expanded} headingLevel={headingLevel}>
                    {props.children}
                </ScaleCollapsible>
            }}
        </ScaleAccordionContext.Consumer>
    );
}

const Heading: FunctionComponent = (props) => {
    return (
        <ScaleAccordionContext.Consumer>
            {({headingLevel}) => {
                return (
                    <span slot="heading" aria-level={headingLevel}>
                        {props.children}
                    </span>);
            }}
        </ScaleAccordionContext.Consumer>
    );
}

const Body: FunctionComponent = (props) => {
    return (<>{props.children}</>)
}


function handleClickDependent(prevState: string[], eventKey: string): string[] {
    if (prevState.includes(eventKey)) {
        return [];
    }
    return [eventKey]
}

function handleClickDefault(prevState: string[], eventKey: string): string[] {
    const clone = prevState.slice();
    if (prevState.includes(eventKey)) {
        clone.splice(prevState.indexOf(eventKey), 1);
        return clone;
    }
    clone.push(eventKey);
    return clone;
}

ScaleAccordion.Item = Item;
ScaleAccordion.Heading = Heading;
ScaleAccordion.Body = Body;

type ScaleAccordionContextValue = {
    openItems: string[];
    callback: (eventKey: string) => void;
    headingLevel?: number;
}
const ScaleAccordionContext = React.createContext<ScaleAccordionContextValue>({openItems: [], callback: noop});

