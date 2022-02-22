import {storiesOf} from "@storybook/react";
import React, {ReactElement} from "react";
import {ScaleLoadingSpinner} from "./ScaleLoadingSpinner";

function wrapInBlackDiv(element: ReactElement) {
    return <div style={
        {
            background: 'black none repeat scroll 0% 0%',
            display: 'flex',
            padding: '2em',
            minHeight: '50px',
            margin: '-30px -20px'
        }}>
        {element}
    </div>
}


storiesOf('Loading-Spinner', module)
    .add('Standard', () => {
        return <ScaleLoadingSpinner/>
    })
    .add('Small Primary (horizontal)', () => {
        return <ScaleLoadingSpinner size="small" variant="primary" alignment="horizontal" text="Loading..."/>
    })
    .add('Small Primary (vertical)', () => {
        return <ScaleLoadingSpinner size="small" variant="primary" alignment="vertical" text="Loading..."/>
    })
    .add('Large Primary (horizontal)', () => {
        return <ScaleLoadingSpinner size="large" variant="primary" alignment="horizontal" text="Loading..."/>
    })
    .add('Large Primary (vertical)', () => {
        return <ScaleLoadingSpinner size="large" variant="primary" alignment="vertical" text="Loading..."/>
    })
    .add('Small White', () => {
        return wrapInBlackDiv(<ScaleLoadingSpinner size="small" variant="white"/>);
    })
    .add('Small White (horizontal)', () => {
        return wrapInBlackDiv(<ScaleLoadingSpinner size="small" variant="white" alignment="horizontal"
                                                   text="Loading..."/>);
    })
    .add('Small White (horizontal)', () => {
        return wrapInBlackDiv(<ScaleLoadingSpinner size="small" variant="white" alignment="vertical"
                                                   text="Loading..."/>);
    })
    .add('Large White', () => {
        return wrapInBlackDiv(<ScaleLoadingSpinner size="large" variant="white"/>);
    })
    .add('Large White (horizontal)', () => {
        return wrapInBlackDiv(<ScaleLoadingSpinner size="large" variant="white" alignment="horizontal"
                                                   text="Loading..."/>);
    })
    .add('Large White (vertical)', () => {
        return wrapInBlackDiv(<ScaleLoadingSpinner size="large" variant="white" alignment="vertical"
                                                   text="Loading..."/>);
    })
