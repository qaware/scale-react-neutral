# @qaware/scale-react-neutral

This project aims to reimplement the web components of [Telekom Scale](https://github.com/telekom/scale) as dedicated
react components using the original css. This library replaces `@telekom/scale-components-react-neutral`.

## Usage

Currently, this project is not published to the central npm repository.

### Build

- clone git repo
- `npm install && npm run build`
- use [npm link](https://docs.npmjs.com/cli/v8/commands/npm-link) to make the components available in your project.

### CSS

In your `index.tsx` or `App.tsx`, import the base css:

```javascript
import '@qaware/scale-react-neutral/dist/qaware-scale-react.css';
import '@telekom/scale-components-neutral/dist/scale-components/scale-components.css';
```

### Components

In your code import and use the components like this:

```javascript
import {ScaleTextarea} from '@qaware/scale-react-neutral';
```

The source contains Storybook examples for every component, showing its usage. In general, the components attempt to
match the original Scale API as closely as possible.

## Motivation

The Scale components are implemented as native web components. For using the components with react, auto generated
wrapper components are provided. These wrapper components unfortunately suffer from some major drawbacks.

### Missing reactivity

React components are expected to always react to the values provided by their parent component.
An `<input value="Foo" />` must always display the value "Foo" regardless of user interaction.

The Scale react components do not behave this way. A Scale input `<ScaleTextField value="Foo" >` is still editable by
the user, i.e. its intrinsic state is not properly driven by the attributes given to it from the outside.

### No integration into React event system

The Scale react components run on their own event system. Types used for event parameters are different from the default
React event types. Event bubbling does not work correctly, since the two event systems do not know of each other.

### No support for react-router-dom

Internal links in a typical React application are handled by react-router-dom, using `<Link to="/" />` elements. The
scale react components only allow `<a href="/" />` elements. This forces the developer to convert react-router-dom links
to regular hrefs, loosing some benefits of react-router-dom.

### Components not managed by React

With the original Scale react-components, React only renders the web-component tag which is then hydrated by custom
Scale Javascript. React does not know about the externally rendered html code inside the web components in wipes the
code when the component is re-rendered by react. This can lead to serious performance issues where Scale web components
are continuously re-rendered by React and then rehydrated by Scale.

## Available components

| **Regular Scale component** | **@qaware/scale-react-neutral** | **Status** | **Remarks**                    |
|-----------------------------|---------------------------------|------------|--------------------------------|
| scale-accordion             | ScaleAccordion                  | ✅          |                                |
| scale-breadcrumb            | -                               | ❌          |                                |
| scale-button                | ScaleButton                     | ✅          |                                |
| scale-card                  | -                               | ❌          |                                |
| scale-checkbox-group        | -                               | ❌          |                                |
| scale-checkbox              | ScaleCheckbox                   | ✅          |                                |
| scale-data-grid             | -                               | ❌          |                                |
| scale-date-picker           | -                               | ❌          |                                |
| scale-divider               | ScaleDivider                    | ✅          |                                |
| scale-dropdown              | ScaleDropdown                   | ✅          |                                |
| scale-menu-flyout           | -                               | ❌          |                                |
| scale-icon                  | ScaleIcon                       | ✅          |                                |
| scale-link                  | ScaleLink                       | ✅          |                                |
| scale-list                  | -                               | ❌          |                                |
| scale-modal                 | ScaleModal                      | ✅          |                                |
| scale-pagination            | ScalePagination                 | ✅          |                                |
| scale-progress-bar          | -                               | ❌          |                                |
| scale-radio-button-group    | -                               | ❌          |                                |
| scale-radio-button          | -                               | ❌          |                                |
| scale-rating-stars          | -                               | ❌          |                                |
| scale-sidebar-navigation    | -                               | ❌          |                                |
| scale-slider                | -                               | ❌          |                                |
| scale-switch                | ScaleSwitch                     | ✅          |                                |
| scale-tab-nav               | -                               | ❌          |                                |
| scale-table                 | ScaleTable                      | ✅          |                                |
| scale-tag                   | -                               | ❌          |                                |
| scale-text-area             | ScaleTextarea                   | ✅          |                                |
| scale-text-field            | ScaleTextField                  | ✅          |                                |
| scale-callout               | -                               | ❌          |                                |
| scale-notification-badge    | -                               | ❌          |                                |
| scale-notification-banner   | -                               | ❌          |                                |
| scale-notification-message  | -                               |            | icons missing in scale-neutral |
| scale-notification-toast    | -                               |            | icons missing in scale-neutral |
| scale-toggle-group          | -                               | ❌          |                                |
| scale-tooltip               | -                               | ❌          |                                |
| scale-checkbox-group        | -                               | ❌          |                                |

In addition, all icons from the neutral theme are available as react components.

