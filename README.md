# @qaware/scale-react

This project aims to reimplement the web components of [Telekom Scale](https://github.com/telekom/scale) as native
react components using the original css. This library replaces `@telekom/scale-components-react-neutral`

## Usage

Currently, the project is not present in the central npm repository.

### Build

- clone git repo
- run `npm intall`
- run `npm build`
- use [npm link](https://docs.npmjs.com/cli/v8/commands/npm-link) to make the components available in your project

### CSS

in your index.tsx or App.tsx, import the base css:

```javascript
import '@qaware/scale-react-qaware/dist/qaware-scale-react.css';
import '@telekom/scale-components-neutral/dist/scale-components/scale-components.css';
```

### Components

In your code import and use the components like this:

```javascript
import {ScaleTextarea} from '@qaware/scale-react';
```

The source contains Storybook examples for every component, showing its usage. In general, the components try to be as
near as possible to the original Scale API.

## Motivation

The Scale components are implemented as native web components. For using the components with react, auto generated
wrapper components are provided. These wrapper components unfortunately suffer from some major drawbacks.

### Missing reactivity

React components are expected to always react to the values provided by their parent component.
An `<input value="Foo" />` must always display the value "Foo" regardless of user interaction.

The Scale react components do not behave this way. A Scale input `<ScaleTextField value="Foo" >` is still editable by
the user.

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
code when the component is rerendered by react. This can lead to serious performance issues where Scale web components
are continuously rerendered by React and then rehydrated by Scale.

## Available components

| scale-component            | @qaware/scale-react | status                         |
|----------------------------|---------------------|--------------------------------|
| scale-accordion            | ScaleAccordion      | implemented                    |
| scale-breadcrumb           | -                   | not implemented                |
| scale-button               | ScaleButton         | implemented                    |
| scale-card                 | -                   | not implemented                |
| scale-checkbox-group       | -                   | not implemented                |
| scale-checkbox             | ScaleCheckbox       | implemented                    |
| scale-data-grid            | -                   | not implemented                |
| scale-date-picker          | -                   | not implemented                |
| scale-divider              | ScaleDivider        | implemented                    |
| scale-dropdown             | ScaleDropdown       | implemented                    |
| scale-menu-flyout          | -                   | not implemented                |
| scale-icon                 | ScaleIcon           | implemented                    |
| scale-link                 | ScaleLink           | implemented                    |
| scale-list                 | -                   | not implemented                |
| scale-modal                | ScaleModal          | implemented                    |
| scale-pagination           | ScalePagination     | implemented                    |
| scale-progress-bar         | -                   | not implemented                |
| scale-radio-button-group   | -                   | not implemented                |
| scale-radio-button         | -                   | not implemented                |
| scale-rating-stars         | -                   | not implemented                |
| scale-sidebar-navigation   | -                   | not implemented                |
| scale-slider               | -                   | not implemented                |
| scale-switch               | ScaleSwitch         | implemented                    |
| scale-tab-nav              | -                   | not implemented                |
| scale-table                | ScaleTable          | implemented                    |
| scale-tag                  | -                   | not implemented                |
| scale-text-area            | ScaleTextarea       | implemented                    |
| scale-text-field           | ScaleTextField      | implemented                    |
| scale-callout              | -                   | not implemented                |
| scale-notification-badge   | -                   | not implemented                |
| scale-notification-banner  | -                   | not implemented                |
| scale-notification-message | -                   | icons missing in scale-neutral |
| scale-notification-toast   | .                   | icons missing in scale-neutral |
| scale-toggle-group         | -                   | not implemented                |
| scale-tooltip              | -                   | not implemented                |
| scale-checkbox-group       | -                   | not implemented                |

In addition, all icons from the neutral theme are available as react components.

