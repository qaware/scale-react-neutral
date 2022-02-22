import {storiesOf} from "@storybook/react";
import React from "react";
import {ScaleBreadcrumb, ScaleBreadcrumbItem} from './ScaleBreadcrumb';

storiesOf('Breadcrumb', module)
    .add('Standard', () => {
        const items : ScaleBreadcrumbItem[] = [
            {text: 'First Link', href:'#'},
            {text: 'Second Link', href:'#'},
            {text: 'Third Link', href:'#'},
        ]

        return (<ScaleBreadcrumb items={items}/>  );
    })
    .add('With Separator', () => {
        const items : ScaleBreadcrumbItem[] = [
            {text: 'First Link', href:'#'},
            {text: 'Second Link', href:'#'},
            {text: 'Third Link', href:'#'},
        ]

        return (<ScaleBreadcrumb separator="---" items={items}/>  );
    })
    .add('No Link', () => {
        const items : ScaleBreadcrumbItem[] = [
            {text: 'First Item'},
            {text: 'Second Item'},
            {text: 'Third Item'},
        ]

        return (<ScaleBreadcrumb items={items}/>  );
    })

