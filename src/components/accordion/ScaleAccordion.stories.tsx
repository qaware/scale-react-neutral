import {storiesOf} from "@storybook/react";
import React from "react";
import {ScaleAccordion} from "./ScaleAccordion";
import {ScaleLink} from "../link/ScaleLink";

const accordionItems = <>
    <ScaleAccordion.Item eventKey="1">
        <ScaleAccordion.Heading>Leo integer malesuada nunc vel risus</ScaleAccordion.Heading>
        <ScaleAccordion.Body>
            <p>Freegan kinfolk <ScaleLink href="/">farm-to-table humblebrag cred</ScaleLink>, hammock
                bespoke small batch pabst. 90's tumblr whatever direct trade, organic master cleanse copper
                mug schlitz palo santo bushwick ethical pop-up chambray portland. Sartorial austin iceland
                street art, pug asymmetrical marfa mustache mumblecore. Shoreditch raclette knausgaard, swag
                enamel pin food truck everyday carry 3 wolf moon.
            </p>
        </ScaleAccordion.Body>
    </ScaleAccordion.Item>
    <ScaleAccordion.Item eventKey="2">
        <ScaleAccordion.Heading>Dolor purus non enim</ScaleAccordion.Heading>
        <ScaleAccordion.Body>
            <p>Bespoke austin pork belly yuccie pop-up. <ScaleLink href="/">Before they sold
                out</ScaleLink> YOLO kickstarter scenester meggings echo park aesthetic. Thundercats
                post-ironic wayfarers microdosing etsy hashtag seitan photo booth bitters.
            </p>
        </ScaleAccordion.Body>
    </ScaleAccordion.Item>
    <ScaleAccordion.Item eventKey="3">
        <ScaleAccordion.Heading>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam</ScaleAccordion.Heading>
        <ScaleAccordion.Body>
            <p>Biodiesel chia af hoodie tumeric bespoke letterpress man bun fashion axe helvetica brunch
                godard
                cray viral prism. Street art tattooed bitters, ugh four loko selfies you probably haven't
                heard
                of them locavore bushwick. Tattooed 90's kinfolk, banh mi umami banjo palo santo cliche.
                Cray
                wolf godard skateboard celiac taxidermy tacos offal.</p>
        </ScaleAccordion.Body>
    </ScaleAccordion.Item>
</>;

storiesOf('Accordion', module)
    .add('Standard', () => {

        return (
            <ScaleAccordion>
                {accordionItems}
            </ScaleAccordion>
        );
    })
    .add('Dependent', () => {
        return (
            <ScaleAccordion dependent={true}>
                {accordionItems}
            </ScaleAccordion>
        );
    })
    .add('Expanded', () => {
        return (
            <ScaleAccordion initialExpanded={["1", "2", "3"]}>
                {accordionItems}
            </ScaleAccordion>
        );
    })
    .add('HeadingLevel', () => {
        return (
            <ScaleAccordion headingLevel={3}>
                {accordionItems}
            </ScaleAccordion>
        );
    })

