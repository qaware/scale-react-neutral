import {storiesOf} from "@storybook/react";
import React, {useState} from "react";
import {ScalePagination} from "./ScalePagination";


storiesOf('Pagination', module)
    .add('Standard', () => {
        const [startElement, setStartElement] = useState<number>(101);
        return <ScalePagination onPagination={setStartElement} startElement={startElement} totalElements={200}/>
    })
    .add('Small', () => {
        const [startElement, setStartElement] = useState<number>(101);
        return <ScalePagination size="small" pageSize={5} onPagination={setStartElement} startElement={startElement}
                                totalElements={200}/>
    })

    .add('Hidden Borders', () => {
        const [startElement, setStartElement] = useState<number>(101);
        return <ScalePagination hideBorder={true} pageSize={5} onPagination={setStartElement}
                                startElement={startElement} totalElements={200}/>
    })
    .add('Embedded Hidden Borders', () => {
        const [startElement, setStartElement] = useState<number>(101);
        return (
            <div style={{border: '1px solid #000', display: 'flex', alignItems: 'center', overflow: 'auto'}}>
                <ScalePagination hideBorder={true} pageSize={5} onPagination={setStartElement}
                                 startElement={startElement} totalElements={200}/>
            </div>
        );
    })
    .add('Translated Aria Labels', () => {
        const [startElement, setStartElement] = useState<number>(101);
        return <ScalePagination
            onPagination={setStartElement}
            startElement={startElement}
            pageSize={10}
            totalElements={200}
            ariaLabelFirstPage="Zur ersten Seite"
            ariaLabelNextPage="Zur nächsten Seite"
            ariaLabelPreviousPage="Zur vorigen Seite"
            ariaLabelLastPage="Zur letzten Seite"/>
    })

