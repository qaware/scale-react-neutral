import React, {AnchorHTMLAttributes} from 'react';
import {Link} from 'react-router-dom';
import {To} from 'history';

/**
 * Anchor HTML Props with an additional to attribute for the react-router-dom link
 */
export type AnchorOrLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to?: To;
};

/**
 * Renders either an <a> or a react-router-dom <Link> Element.
 * if the "to" property is not undefined, a <Link> is rendered. Else an <a> is rendered.
 */
export const AnchorOrLink = React.forwardRef<HTMLAnchorElement, AnchorOrLinkProps>((props, ref) => {
  if (props.to === undefined) {
    return <a ref={ref} {...props} />;
  }
  return <Link ref={ref}{...props} to={props.to} />;
});
