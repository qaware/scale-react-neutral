import {storiesOf} from "@storybook/react";
import React from "react";
import {ScaleLink} from "./ScaleLink";
import {ScaleIconNavigationExternalLink} from "../icons/navigation-external-link/ScaleIconNavigationExternalLink";

storiesOf('Link', module)
    .add('Standard', () => {
        return (
            <ScaleLink href="#top">A link</ScaleLink>
        );
    })
    .add('Disabled', () => {
        return (
            <ScaleLink disabled={true} href="#top">A link</ScaleLink>
        );
    })
    .add('With Icon', () => {
        return (
            <ScaleLink target="_blank" href="#top" icon={ScaleIconNavigationExternalLink} iconSize={16}
                       iconAccessibilityTitle="open link in new tab"> A link, with an icon</ScaleLink>
        );
    })
    .add('No underline', () => {
        return (
            <ScaleLink omitUnderline={true} href="#top">A link, without underline</ScaleLink>
        );
    })

