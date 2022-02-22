import {storiesOf} from "@storybook/react";
import React from "react";
import {ScaleCard} from "./ScaleCard";
import {ScaleButton} from '../button/ScaleButton';
import {ScaleLink} from '../link/ScaleLink';

storiesOf("Card", module)
    .add("Standard", () => {
      return <ScaleCard label="Example card">A card</ScaleCard>;
    })
    .add("With Link", () => {
      return (
          <ScaleCard
              label="Example card"
              href="https://example.com" target="_blank" rel="noopener noreferrer">
            A card with a link to example.com
          </ScaleCard>
      );
    })
    .add("With Image", () => {
      return (
          <div style={{maxWidth: '200px'}}>
          <ScaleCard
          label="Example card"
          href="https://example.com" target="_blank">
            <div style={{margin: '-24px'}}>
              <img style={{marginBottom: '-4px', width:'100%'}} src="https://via.placeholder.com/150" alt="placeholder" />
              <div style={{padding: '24px'}}>A card with a full width image</div>
            </div>
          </ScaleCard>
          </div>
      );
    })
    .add("With Further Functions", () => {
      return (
          <div style={{maxWidth: '300px'}}>
            <ScaleCard
                label="Example card with further functions">
              <article style={{margin: '-24px'}}>
                <img style={{marginBottom: '-4px', width:'100%'}} src="https://via.placeholder.com/150" alt="placeholder" />
                <div style={{padding: '24px'}}>
                  <div style={{padding: '0 0 24px 0'}}>A card with with further functions</div>
                  <div style={{padding: '0 0 24px 0', display: 'flex', justifyContent: 'center'}}><ScaleButton>Label</ScaleButton></div>
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}><ScaleLink href="https://example.com" innerTabindex={0}>More...</ScaleLink></div>
                </div>
              </article>
            </ScaleCard>
          </div>
      );
    });
