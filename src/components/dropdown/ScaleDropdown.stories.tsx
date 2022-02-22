import {storiesOf} from "@storybook/react";
import React from "react";
import {ScaleDropDown} from "./ScaleDropdown";
import {ScaleIconContentCalendar} from "../icons/content-calendar/ScaleIconContentCalendar";


storiesOf('ScaleDropdown', module)
    .add('Standard', () => {
        return <ScaleDropDown label={'Select'}>
            <option value="1">Category 1</option>
            <optgroup label="Category Group">
                <option value="2">Category 2</option>
            </optgroup>
            <optgroup label="Category Group 2">
                <option value="3">Category 3</option>
            </optgroup>
        </ScaleDropDown>
    })
    .add('With Helper Text', () => {
        return <ScaleDropDown label={'Select'} helperText={'HELP ME!'}>
            <option value="1">Category 1</option>
            <optgroup label="Category Group">
                <option value="2">Category 2</option>
            </optgroup>
            <optgroup label="Category Group 2">
                <option value="3">Category 3</option>
            </optgroup>
        </ScaleDropDown>
    })
    .add('Small', () => {
        return <ScaleDropDown label={'Small'} size="small">
            <option value="1">Category 1</option>
            <optgroup label="Category Group">
                <option value="2">Category 2</option>
            </optgroup>
            <optgroup label="Category Group 2">
                <option value="3">Category 3</option>
            </optgroup>
        </ScaleDropDown>
    })
    .add('Disabled', () => {
        return <ScaleDropDown label={'Disabled'} disabled={true}>
            <option value="1">Category 1</option>
            <optgroup label="Category Group">
                <option value="2">Category 2</option>
            </optgroup>
            <optgroup label="Category Group 2">
                <option value="3">Category 3</option>
            </optgroup>
        </ScaleDropDown>
    })

    .add('Error', () => {
        return <ScaleDropDown label={'Error'} invalid={true} helperText={'Something went wrong...'}>
            <option value="1">Category 1</option>
            <optgroup label="Category Group">
                <option value="2">Category 2</option>
            </optgroup>
            <optgroup label="Category Group 2">
                <option value="3">Category 3</option>
            </optgroup>
        </ScaleDropDown>
    })

    .add('With Custom Icon', () => {
        return <ScaleDropDown label={'With Custom Icon'}
                              icon={<ScaleIconContentCalendar/>}>
            <option value="1">Category 1</option>
            <optgroup label="Category Group">
                <option value="2">Category 2</option>
            </optgroup>
            <optgroup label="Category Group 2">
                <option value="3">Category 3</option>
            </optgroup>
        </ScaleDropDown>
    })



