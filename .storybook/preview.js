import {addDecorator} from '@storybook/react';
import '../src/generated/qaware-scale-react.css'
import '@telekom/scale-components-neutral/dist/scale-components/scale-components.css'


export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

addDecorator(story =>
    <>
        {story()}
    </>
);
