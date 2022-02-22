import {storiesOf} from "@storybook/react";
import React from "react";
import {ScaleTable} from "./ScaleTable";


const tableData = <table>
    <caption style={{visibility: 'hidden'}}>
        Table title
    </caption>
    <thead>
    <tr>
        <th>Title</th>
        <th>Tags</th>
        <th>Stats</th>
        <th>Time</th>
        <th>Euros</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Jane</td>
        <td>Other N/A Demo</td>
        <td>9.356</td>
        <td>00:00:20</td>
        <td>100.245,10</td>
    </tr>
    <tr>
        <td>Jack</td>
        <td>Other N/A Demo</td>
        <td>3.356</td>
        <td>00:00:30</td>
        <td>100.345,10</td>
    </tr>
    <tr>
        <td>John</td>
        <td>Other N/A Demo</td>
        <td>6.356</td>
        <td>00:00:40</td>
        <td>100.445,10</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
        <td>Total</td>
        <td></td>
        <td></td>
        <td>00:00:20</td>
        <td>100.245,10</td>
    </tr>
    </tfoot>
</table>;
storiesOf('ScaleTable', module)
    .add('Standard', () => {
        return (
            <ScaleTable>
                {tableData}
            </ScaleTable>
        );
    })
    .add('Small', () => {
        return (
            <ScaleTable size="small">
                {tableData}
            </ScaleTable>
        );
    })
    .add('With Sorting Icons', () => {
        return (
            <ScaleTable showSort={true}>
                {tableData}
            </ScaleTable>
        );
    })
    .add('With Striped Rows', () => {
        return (
            <ScaleTable striped={true}>
                {tableData}
            </ScaleTable>
        );
    })




