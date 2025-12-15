protected getPropertyPaneConfiguration() {
}),
PropertyPaneTextField('header.plusLabel', {
label: 'Plus Label / Icon'
}),
PropertyPaneTextField('header.minusLabel', {
label: 'Minus Label / Icon'
}),
PropertyPaneDropdown('header.iconPosition', {
label: 'Icon Position',
options: [
{ key: 'left', text: 'Left' },
{ key: 'right', text: 'Right' }
]
})
]
},
{
groupName: 'Header Style',
groupFields: [
PropertyPaneTextField('header.backgroundColor', {
label: 'Background Color'
}),
PropertyPaneTextField('header.textColor', {
label: 'Text Color'
}),
PropertyPaneTextField('header.fontFamily', {
label: 'Font Family'
}),
PropertyPaneTextField('header.fontSize', {
label: 'Font Size (e.g. 16px)'
}),
PropertyPaneSlider('header.padding', {
label: 'Padding',
min: 0,
max: 40
}),
PropertyPaneToggle('header.showBorder', {
label: 'Show Border'
}),
PropertyPaneSlider('header.borderThickness', {
label: 'Border Thickness',
min: 0,
max: 10
}),
PropertyPaneTextField('header.borderColor', {
label: 'Border Color'
}),
PropertyPaneToggle('header.rounded', {
label: 'Rounded Corners'
})
]
}
]
},
{
header: { description: 'Accordion Body Settings' },
groups: [
{
groupName: 'Body Content',
groupFields: [
PropertyPaneDropdown('body.contentType', {
label: 'Content Type',
options: [
{ key: 'text', text: 'Text Only' },
{ key: 'textWithImage', text: 'Text with Image' }
]
