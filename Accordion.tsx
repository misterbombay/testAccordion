import * as React from 'react';
import AccordionHeader from './AccordionHeader';
import AccordionBody from './AccordionBody';
import { IAccordionProps } from './AccordionTypes';

const Accordion: React.FC<IAccordionProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleToggle = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="accordion-item mb-2">
      <AccordionHeader
        headerTitle={props.headerTitle}
        showHeaderIcon={props.showHeaderIcon}
        headerIconUrl={props.headerIconUrl}
        iconPosition={props.iconPosition}
        togglePosition={props.togglePosition}
        headerBgColor={props.headerBgColor}
        headerTextColor={props.headerTextColor}
        headerFontSize={props.headerFontSize}
        headerFontFamily={props.headerFontFamily}
        headerPadding={props.headerPadding}
        headerBorder={props.headerBorder}
        headerBorderColor={props.headerBorderColor}
        headerBorderWidth={props.headerBorderWidth}
        headerRounded={props.headerRounded}
        isOpen={isOpen}
        onToggle={handleToggle}
      />

      {isOpen && (
        <AccordionBody
          bodyText={props.bodyText}
          bodyImageUrl={props.bodyImageUrl}
          bodyBgColor={props.bodyBgColor}
          bodyTextColor={props.bodyTextColor}
          bodyFontSize={props.bodyFontSize}
          bodyFontFamily={props.bodyFontFamily}
          bodyPadding={props.bodyPadding}
          bodyBorder={props.bodyBorder}
          bodyBorderColor={props.bodyBorderColor}
          bodyBorderWidth={props.bodyBorderWidth}
          bodyRounded={props.bodyRounded}
        />
      )}
    </div>
  );
};

export default Accordion;
