import { BodyContentType } from './AccordionTypes';


export interface IAccordionBodyProps {
contentType: BodyContentType;
bodyText: string;
imageUrl?: string;
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
