import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneToggle,
  PropertyPaneTextField,
  PropertyPaneSlider,
  PropertyPaneDropdown
} from '@microsoft/sp-webpart-base';

import Accordion from './components/Accordion';

import {
  PropertyFieldCollectionData,
  CustomCollectionFieldType
} from '@pnp/spfx-property-controls';

/* ============================================================
   DATA MODELS
   ============================================================ */

export interface IAccordionItem {
  title: string;
  content: string;
  image?: string;
}

export interface IAccordionWebPartProps {

  accordionItems: IAccordionItem[];

  /* -------- Header -------- */
  headerTitleFontSize: number;
  headerTitleColor: string;
  headerFontFamily: string;
  headerBgColor: string;
  headerPadding: number;

  headerBorder: boolean;
  headerBorderColor: string;
  headerBorderThickness: number;
  headerRoundedCorners: boolean;

  showHeaderIcon: boolean;
  iconType: 'plusminus' | 'arrow';
  iconPosition: 'left' | 'right';

  /* -------- Body -------- */
  bodyBgColor: string;
  bodyFontSize: number;
  bodyFontColor: string;
  bodyFontFamily: string;
  bodyPadding: number;

  bodyBorder: boolean;
  bodyBorderColor: string;
  bodyBorderThickness: number;
  bodyRoundedCorners: boolean;
}

/* ============================================================
   WEB PART
   ============================================================ */

export default class AccordionWebPart
  extends BaseClientSideWebPart<IAccordionWebPartProps> {

  public render(): void {

    const element = React.createElement(
      Accordion,
      {
        accordionItems: this.properties.accordionItems,

        headerTitleFontSize: this.properties.headerTitleFontSize,
        headerTitleColor: this.properties.headerTitleColor,
        headerFontFamily: this.properties.headerFontFamily,
        headerBgColor: this.properties.headerBgColor,
        headerPadding: this.properties.headerPadding,
        headerBorder: this.properties.headerBorder,
        headerBorderColor: this.properties.headerBorderColor,
        headerBorderThickness: this.properties.headerBorderThickness,
        headerRoundedCorners: this.properties.headerRoundedCorners,

        showHeaderIcon: this.properties.showHeaderIcon,
        iconType: this.properties.iconType,
        iconPosition: this.properties.iconPosition,

        bodyBgColor: this.properties.bodyBgColor,
        bodyFontSize: this.properties.bodyFontSize,
        bodyFontColor: this.properties.bodyFontColor,
        bodyFontFamily: this.properties.bodyFontFamily,
        bodyPadding: this.properties.bodyPadding,
        bodyBorder: this.properties.bodyBorder,
        bodyBorderColor: this.properties.bodyBorderColor,
        bodyBorderThickness: this.properties.bodyBorderThickness,
        bodyRoundedCorners: this.properties.bodyRoundedCorners
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  /* ============================================================
     PROPERTY PANE
     ============================================================ */

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {

    return {
      pages: [
        {
          header: {
            description: 'Accordion Configuration'
          },
          groups: [

            /* ---------- CONTENT ---------- */
            {
              groupName: 'Accordion Items',
              groupFields: [
                PropertyFieldCollectionData('accordionItems', {
                  key: 'accordionItems',
                  label: 'Accordion Items',
                  panelHeader: 'Manage Accordion Items',
                  manageBtnLabel: 'Edit Items',
                  value: this.properties.accordionItems,
                  fields: [
                    {
                      id: 'title',
                      title: 'Title',
                      type: CustomCollectionFieldType.string,
                      required: true
                    },
                    {
                      id: 'content',
                      title: 'Content (HTML supported)',
                      type: CustomCollectionFieldType.string,
                      required: true
                    },
                    {
                      id: 'image',
                      title: 'Image URL',
                      type: CustomCollectionFieldType.string
                    }
                  ]
                })
              ]
            },

            /* ---------- HEADER ---------- */
            {
              groupName: 'Header Settings',
              groupFields: [
                PropertyPaneSlider('headerTitleFontSize', {
                  label: 'Font Size',
                  min: 12,
                  max: 32
                }),
                PropertyPaneTextField('headerTitleColor', {
                  label: 'Text Color'
                }),
                PropertyPaneTextField('headerFontFamily', {
                  label: 'Font Family'
                }),
                PropertyPaneTextField('headerBgColor', {
                  label: 'Background Color'
                }),
                PropertyPaneSlider('headerPadding', {
                  label: 'Padding',
                  min: 5,
                  max: 40
                }),
                PropertyPaneToggle('headerBorder', {
                  label: 'Show Border'
                }),
                PropertyPaneTextField('headerBorderColor', {
                  label: 'Border Color'
                }),
                PropertyPaneSlider('headerBorderThickness', {
                  label: 'Border Thickness',
                  min: 0,
                  max: 6
                }),
                PropertyPaneToggle('headerRoundedCorners', {
                  label: 'Rounded Corners'
                }),
                PropertyPaneToggle('showHeaderIcon', {
                  label: 'Show Icon'
                }),
                PropertyPaneDropdown('iconType', {
                  label: 'Icon Type',
                  options: [
                    { key: 'plusminus', text: 'Plus / Minus' },
                    { key: 'arrow', text: 'Arrow' }
                  ]
                }),
                PropertyPaneDropdown('iconPosition', {
                  label: 'Icon Position',
                  options: [
                    { key: 'left', text: 'Left' },
                    { key: 'right', text: 'Right' }
                  ]
                })
              ]
            },

            /* ---------- BODY ---------- */
            {
              groupName: 'Body Settings',
              groupFields: [
                PropertyPaneTextField('bodyBgColor', {
                  label: 'Background Color'
                }),
                PropertyPaneSlider('bodyFontSize', {
                  label: 'Font Size',
                  min: 12,
                  max: 26
                }),
                PropertyPaneTextField('bodyFontColor', {
                  label: 'Text Color'
                }),
                PropertyPaneTextField('bodyFontFamily', {
                  label: 'Font Family'
                }),
                PropertyPaneSlider('bodyPadding', {
                  label: 'Padding',
                  min: 5,
                  max: 40
                }),
                PropertyPaneToggle('bodyBorder', {
                  label: 'Show Border'
                }),
                PropertyPaneTextField('bodyBorderColor', {
                  label: 'Border Color'
                }),
                PropertyPaneSlider('bodyBorderThickness', {
                  label: 'Border Thickness',
                  min: 0,
                  max: 6
                }),
                PropertyPaneToggle('bodyRoundedCorners', {
                  label: 'Rounded Corners'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
