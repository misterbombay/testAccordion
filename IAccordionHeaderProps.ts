import { IconPosition } from './AccordionTypes';


export interface IAccordionHeaderProps {
title: string;
showIcon: boolean;
iconUrl?: string;
plusLabel: string;
minusLabel: string;
iconPosition: IconPosition;
backgroundColor: string;
textColor: string;
fontFamily: string;
fontSize: string;
padding: number;
showBorder: boolean;
borderThickness: number;
borderColor: string;
rounded: boolean;
customStyle?: string;
}
