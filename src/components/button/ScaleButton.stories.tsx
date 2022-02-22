import {storiesOf} from "@storybook/react";
import {ScaleButton} from "./ScaleButton";
import React from "react";
import {ScaleIconNavigationRight} from "../icons/navigation-right/ScaleIconNavigationRight";
import {ScaleIconActionSearch} from "../icons/action-search/ScaleIconActionSearch";
import {ScaleIconActionAdd} from "../icons/action-add/ScaleIconActionAdd";
import {ScaleIconNavigationExternalLink} from "../icons/navigation-external-link/ScaleIconNavigationExternalLink";

storiesOf('Button', module)
    .add('Standard', () => {
        return (
            <div>
                <ScaleButton>Label</ScaleButton>
            </div>
        );
    })
    .add('Secondary', () => {
        return (
            <div>
                <ScaleButton variant='secondary'>Label</ScaleButton>
            </div>
        );
    })
    .add('Disabled', () => {
        return (
            <div>
                <ScaleButton disabled={true}>Label</ScaleButton>
            </div>
        );
    })
    .add('Secondary Disabled', () => {
        return (
            <div>
                <ScaleButton variant='secondary' disabled={true}>Label</ScaleButton>
            </div>
        );
    })
    .add('With Icon Before', () => {
        return (
            <div>
                <ScaleButton iconPosition="before"><ScaleIconActionSearch/>Label</ScaleButton>
            </div>
        );
    })
    .add('With Icon After', () => {
        return (
            <div>
                <ScaleButton>Label<ScaleIconNavigationRight/></ScaleButton>
            </div>
        );
    })
    .add('Icon Only', () => {
        return (
            <div>
                <ScaleButton iconPosition="only"><ScaleIconActionAdd/></ScaleButton>
            </div>
        );
    })
    .add('Link', () => {
        return (
            <div>
                <ScaleButton href="https://example.com" target="_blank">Label</ScaleButton>
            </div>
        );
    })
    .add('Link Download', () => {
        return (
            <div>
                <ScaleButton href="assets/welcome.png" download="welcome.png"
                             target="_self">Download</ScaleButton>
            </div>
        );
    })
    .add('External Link', () => {
        return (
            <div>
                <ScaleButton href="https://example.com"
                             target="_blank">Label<ScaleIconNavigationExternalLink/></ScaleButton>
            </div>
        );
    })
    .add('Small Standard', () => {
        return (
            <div>
                <ScaleButton size='small'>Label</ScaleButton>
            </div>
        );
    })
    .add('Small Disabled', () => {
        return (
            <div>
                <ScaleButton size='small' disabled={true}>Label</ScaleButton>
            </div>
        );
    })
    .add('Small Secondary Disabled', () => {
        return (
            <div>
                <ScaleButton size='small' variant="secondary" disabled={true}>Label</ScaleButton>
            </div>
        );
    })
    .add('Small With Icon Before', () => {
        return (
            <div>
                <ScaleButton size="small" iconPosition="before"><ScaleIconActionSearch
                    size={16}/>Label</ScaleButton>
            </div>
        );
    })
    .add('Small With Icon After', () => {
        return (
            <div>
                <ScaleButton size="small">Label<ScaleIconNavigationRight size={16}/></ScaleButton>
            </div>
        );
    })
    .add('Small Icon Only', () => {
        return (
            <div>
                <ScaleButton size="small" iconPosition="only"><ScaleIconActionAdd size={16}/></ScaleButton>
            </div>
        );
    })
    .add('Small Link', () => {
        return (
            <div>
                <ScaleButton size="small" href="https://example.com" target="_blank">Label</ScaleButton>
            </div>
        );
    })
    .add('Small Link Download', () => {
        return (
            <div>
                <ScaleButton size="small" href="assets/welcome.png" download="welcome.png"
                             target="_self">Download</ScaleButton>
            </div>
        );
    })
