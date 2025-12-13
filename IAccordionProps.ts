import { IAccordionItem } from "../AccordionWebPart";

export interface IAccordionProps {

  accordionItems: IAccordionItem[];

  /* ================= HEADER ================= */

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

  /* ================= BODY ================= */

  bodyBgColor: string;
  bodyFontSize: number;
  bodyFontColor: string;
  bodyFontFamily: string;
  bodyPadding: number;

  bodyBorder: boolean;
  bodyBorderColor: string;
  bodyBorderThickness: number;
  bodyRoundedCorners: boolean;

  /* Optional future extension */
  headerCustomStyles?: string;
  bodyCustomStyles?: string;
}
