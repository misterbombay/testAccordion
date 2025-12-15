import * as React from 'react';


const headerStyle: React.CSSProperties = {
backgroundColor: header.backgroundColor,
color: header.textColor,
fontFamily: header.fontFamily,
fontSize: header.fontSize,
padding: `${header.padding}px`,
border: header.showBorder
? `${header.borderThickness}px solid ${header.borderColor}`
: 'none',
borderRadius: header.rounded ? '12px' : '0px'
};


const bodyStyle: React.CSSProperties = {
backgroundColor: body.backgroundColor,
color: body.textColor,
fontFamily: body.fontFamily,
fontSize: body.fontSize,
padding: `${body.padding}px`,
border: body.showBorder
? `${body.borderThickness}px solid ${body.borderColor}`
: 'none',
borderRadius: body.rounded ? '12px' : '0px'
};


return (
<div className="accordion">
<div
className={`d-flex align-items-center justify-content-between ${styles.header}`}
style={headerStyle}
onClick={() => setOpen(!open)}
>
{header.iconPosition === 'left' && header.showIcon && (
<img src={header.iconUrl} className={styles.icon} />
)}


<span>{header.title}</span>


<span className="ms-auto">
{open ? header.minusLabel : header.plusLabel}
</span>


{header.iconPosition === 'right' && header.showIcon && (
<img src={header.iconUrl} className={styles.icon} />
)}
</div>


{open && (
<div className={styles.body} style={bodyStyle}>
{body.contentType === 'text' && <p>{body.bodyText}</p>}


{body.contentType === 'textWithImage' && (
<div>
<img src={body.imageUrl} className="img-fluid mb-2" />
<p>{body.bodyText}</p>
</div>
)}
</div>
)}
</div>
);
};
