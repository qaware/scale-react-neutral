import {storiesOf} from "@storybook/react";
import React, {useState} from "react";
import ScaleModal from "./ScaleModal";
import {ScaleButton} from "../button/ScaleButton";


storiesOf('Modal', module)
    .add('Standard', () => {
        const [open, setOpen] = useState<boolean>(false);
        return (
            <>
                <ScaleButton onClick={() => setOpen(!open)}>Open Modal</ScaleButton>
                <ScaleModal heading="Today is your lucky day" isOpen={open} onClose={() => setOpen(false)}>
                    <ScaleModal.Body>
                        <p>Hello. Welcome. What a pleasure it is to have you.</p>
                    </ScaleModal.Body>
                    <ScaleModal.Action>
                        <ScaleButton slot="action" variant="secondary" onClick={() => setOpen(false)}>
                            Cancel
                        </ScaleButton>
                    </ScaleModal.Action>
                    <ScaleModal.Action>
                        <ScaleButton slot="action" onClick={() => setOpen(false)}>
                            Primary Action
                        </ScaleButton>
                    </ScaleModal.Action>
                </ScaleModal>
            </>
        );
    })
    .add('Standard Small', () => {
        const [open, setOpen] = useState<boolean>(false);
        return (
            <>
                <ScaleButton onClick={() => setOpen(!open)}>Open Modal</ScaleButton>
                <ScaleModal size={"small"} heading="Today is your lucky day" isOpen={open}
                            onClose={() => setOpen(false)}>
                    <ScaleModal.Body>
                        <p>Hello. Welcome. What a pleasure it is to have you.</p>
                    </ScaleModal.Body>
                    <ScaleModal.Action>
                        <ScaleButton variant="secondary" onClick={() => setOpen(false)}>
                            Cancel
                        </ScaleButton>
                    </ScaleModal.Action>
                    <ScaleModal.Action>
                        <ScaleButton onClick={() => setOpen(false)}>
                            Primary Action
                        </ScaleButton>
                    </ScaleModal.Action>
                </ScaleModal>
            </>
        );
    })
    .add('Standard Large', () => {
        const [open, setOpen] = useState<boolean>(false);
        return (
            <>
                <ScaleButton onClick={() => setOpen(!open)}>Open Modal</ScaleButton>
                <ScaleModal size={"large"} heading="Today is your lucky day" isOpen={open}
                            onClose={() => setOpen(false)}>
                    <ScaleModal.Body>
                        <p>Hello. Welcome. What a pleasure it is to have you.</p>
                    </ScaleModal.Body>
                    <ScaleModal.Action>
                        <ScaleButton slot="action" variant="secondary" onClick={() => setOpen(false)}>
                            Cancel
                        </ScaleButton>
                    </ScaleModal.Action>
                    <ScaleModal.Action>
                        <ScaleButton slot="action" onClick={() => setOpen(false)}>
                            Primary Action
                        </ScaleButton>
                    </ScaleModal.Action>
                </ScaleModal>
            </>
        );
    })
    .add('No Actions', () => {
        const [open, setOpen] = useState<boolean>(false);
        return (
            <>
                <ScaleButton onClick={() => setOpen(!open)}>Open Modal</ScaleButton>
                <ScaleModal heading="Today is your lucky day" isOpen={open} onClose={() => setOpen(false)}>
                    <ScaleModal.Body>
                        <p>Hello. Welcome. What a pleasure it is to have you.</p>
                    </ScaleModal.Body>
                </ScaleModal>
            </>
        );
    })

    .add('With no Body', () => {
        const [open, setOpen] = useState<boolean>(false);
        return (
            <>
                <ScaleButton onClick={() => setOpen(!open)}>Open Modal</ScaleButton>
                <ScaleModal heading="Today is your lucky day" isOpen={open} onClose={() => setOpen(false)}>
                    <ScaleModal.Action>
                        <ScaleButton slot="action" variant="secondary" onClick={() => setOpen(false)}>
                            Cancel
                        </ScaleButton>
                    </ScaleModal.Action>
                    <ScaleModal.Action>
                        <ScaleButton slot="action" onClick={() => setOpen(false)}>
                            Primary Action
                        </ScaleButton>
                    </ScaleModal.Action>
                </ScaleModal>
            </>
        );
    })
