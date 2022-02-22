import React, { FunctionComponent, useRef } from "react";
import { classNameAndPart, ClassNameDefinition } from "../Utils";
import ShadowDom from "../ShadowDom";
import css from "!!raw-loader!postcss-loader!@telekom/scale-components-neutral/dist/collection/components/breadcrumb/breadcrumb.css";
import { ScaleIconNavigationRight } from "../icons/navigation-right/ScaleIconNavigationRight";
import { To } from "history";
import { AnchorOrLink } from "../../custom/AnchorOrLink";

export type ScaleBreadcrumbItem = {
  text: string;
  href?: string;
  to?: To;
};

export type ScaleBreadcrumbProps = {
  className?: string;
  separator?: string;
  items: ScaleBreadcrumbItem[];
};

export const ScaleBreadcrumb: FunctionComponent<ScaleBreadcrumbProps> = (
  props
) => {
  const componentRef = useRef<HTMLElement>(null);

  const classNameDefinition: ClassNameDefinition[] = [];

  const { className } = classNameAndPart(
    "breadcrumb",
    classNameDefinition,
    props.className
  );
  return (
    <scale-breadcrumb ref={componentRef}>
      <ShadowDom rootNode={componentRef} mode="open">
        <style>{css}</style>
        <nav aria-label="Breadcrumb" className={className} part="base">
          <ol className="breadcrumb__list" part="list">
            {props.items.map((item, index) => {
              const isLast = index === props.items.length - 1;
              const isLink = item.href !== undefined || item.to !== undefined;
              const itemClassName = (isLink ? 'breadcrumb__link' : 'breadcrumb__item') + (isLast ? ' breadcrumb__current' : '');
              const part = (isLink ? 'link' : 'item') + (isLast ? ' current' : '');
              return (
                <li
                  key={index}
                  className="breadcrumb__list-item"
                  part="list-item"
                >
                  {isLink ? (
                    <AnchorOrLink
                      href={item.href}
                      to={item.to}
                      className={itemClassName}
                      part={part}
                    >
                      {item.text}
                    </AnchorOrLink>
                  ) : (
                    <span className={itemClassName} part={part}>
                      {item.text}
                    </span>
                  )}
                  {!isLast && createSeparator(props)}
                </li>
              );
            })}
          </ol>
        </nav>
      </ShadowDom>
    </scale-breadcrumb>
  );
};

function createSeparator(props: { separator?: string }) {
  return (
    <span className="breadcrumb__separator" part="separator">
      {props.separator || <ScaleIconNavigationRight size={12} />}
    </span>
  );
}
