import React, {PropsWithChildren, ReactElement, ReactNode, ReactPortal, RefObject, useEffect, useState} from 'react';
import {createPortal} from 'react-dom'


function ShadowContent(props: { root: ShadowRoot, children: ReactNode }): ReactPortal {
    return createPortal(props.children, props.root as unknown as Element);
}


interface ShadowDomProps {
    rootNode: RefObject<HTMLElement>
    mode: ShadowRootMode
}

function ShadowDom(props: PropsWithChildren<ShadowDomProps>): ReactElement {

    const parentNode = props.rootNode;
    const mode = props.mode
    const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null);

    useEffect(() => {
        if (parentNode.current !== null) {

            const root = parentNode.current.attachShadow({mode})
            setShadowRoot(root);
            parentNode.current.classList.add('hydrated');
        }
    }, [parentNode, mode, setShadowRoot])

    if (shadowRoot === null) {
        return <></>
    }

    return (
        <ShadowContent root={shadowRoot}>
            {props.children}
        </ShadowContent>)
}

export default ShadowDom;
