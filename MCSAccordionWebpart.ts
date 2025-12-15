import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { MCSAccordion } from './components/MCSAccordion';
import { IMCSAccordionWebpartProps } from './IMCSAccordionWebpartProps';


export default class MCSAccordionWebpart
extends BaseClientSideWebPart<IMCSAccordionWebpartProps> {


public render(): void {
const element = React.createElement(MCSAccordion, {
header: this.properties.header,
body: this.properties.body
});


ReactDom.render(element, this.domElement);
}
}
