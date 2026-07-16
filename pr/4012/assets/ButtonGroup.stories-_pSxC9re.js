import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{t as n}from"./Button-LstlgWmK.js";import{t as r}from"./Button-BwOTEsqa.js";import{n as i,t as a}from"./Icon-B4cunfsZ.js";import{n as o,t as s}from"./IconButton-CEOBy7B9.js";import{li as c,ui as l}from"./iframe-BPDTzqv8.js";import{A as u,Jt as d,Kt as f,Sn as p,X as m,en as h,f as g,mn as _,t as v,wn as y}from"./esm-DA7gAIBC.js";var b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{c(),r(),s(),a(),v(),b=t(),x={title:`Core/ButtonGroup`,component:l,tags:[`autodocs`],argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`sm`,`md`,`lg`]}}},S={width:16,height:16},C={render:()=>(0,b.jsxs)(l,{label:`Clipboard actions`,children:[(0,b.jsx)(n,{label:`Copy`,icon:(0,b.jsx)(d,{style:S})}),(0,b.jsx)(n,{label:`Cut`,icon:(0,b.jsx)(u,{style:S})}),(0,b.jsx)(n,{label:`Paste`,icon:(0,b.jsx)(f,{style:S})})]})},w={render:()=>(0,b.jsxs)(l,{label:`Actions`,orientation:`vertical`,children:[(0,b.jsx)(n,{label:`Copy`}),(0,b.jsx)(n,{label:`Cut`}),(0,b.jsx)(n,{label:`Paste`})]})},T={render:()=>(0,b.jsxs)(l,{label:`Text formatting`,children:[(0,b.jsx)(o,{label:`Bold`,icon:(0,b.jsx)(i,{icon:_,size:`sm`})}),(0,b.jsx)(o,{label:`Italic`,icon:(0,b.jsx)(i,{icon:m,size:`sm`})}),(0,b.jsx)(o,{label:`Underline`,icon:(0,b.jsx)(i,{icon:g,size:`sm`})})]})},E={render:()=>(0,b.jsxs)(l,{label:`History`,children:[(0,b.jsx)(n,{label:`Undo`,variant:`ghost`,icon:(0,b.jsx)(y,{style:S}),isIconOnly:!0}),(0,b.jsx)(n,{label:`Redo`,variant:`ghost`,icon:(0,b.jsx)(p,{style:S}),isIconOnly:!0})]})},D={render:()=>(0,b.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,b.jsxs)(l,{label:`Small actions`,size:`sm`,children:[(0,b.jsx)(n,{label:`Copy`}),(0,b.jsx)(n,{label:`Paste`})]}),(0,b.jsxs)(l,{label:`Medium actions`,size:`md`,children:[(0,b.jsx)(n,{label:`Copy`}),(0,b.jsx)(n,{label:`Paste`})]}),(0,b.jsxs)(l,{label:`Large actions`,size:`lg`,children:[(0,b.jsx)(n,{label:`Copy`}),(0,b.jsx)(n,{label:`Paste`})]})]})},O={render:()=>(0,b.jsxs)(l,{label:`Save options`,children:[(0,b.jsx)(n,{label:`Save`,variant:`primary`}),(0,b.jsx)(n,{label:`Save options`,variant:`primary`,icon:(0,b.jsx)(h,{style:S}),isIconOnly:!0})]})},k={render:()=>(0,b.jsxs)(l,{label:`Merge options`,children:[(0,b.jsx)(n,{label:`Merge pull request`,variant:`primary`}),(0,b.jsx)(n,{label:`More merge options`,variant:`primary`,icon:(0,b.jsx)(h,{style:S}),isIconOnly:!0})]})},A={render:()=>(0,b.jsxs)(l,{label:`Edit actions`,children:[(0,b.jsx)(n,{label:`Edit`}),(0,b.jsx)(o,{label:`More options`,icon:(0,b.jsx)(h,{style:S})})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup label="Clipboard actions">
      <Button label="Copy" icon={<ClipboardDocumentIcon style={iconSize} />} />
      <Button label="Cut" icon={<ScissorsIcon style={iconSize} />} />
      <Button label="Paste" icon={<ClipboardIcon style={iconSize} />} />
    </ButtonGroup>
}`,...C.parameters?.docs?.source},description:{story:`Basic horizontal button group with text buttons.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup label="Actions" orientation="vertical">
      <Button label="Copy" />
      <Button label="Cut" />
      <Button label="Paste" />
    </ButtonGroup>
}`,...w.parameters?.docs?.source},description:{story:`Vertical button group.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup label="Text formatting">
      <IconButton label="Bold" icon={<Icon icon={BoldIcon} size="sm" />} />
      <IconButton label="Italic" icon={<Icon icon={ItalicIcon} size="sm" />} />
      <IconButton label="Underline" icon={<Icon icon={UnderlineIcon} size="sm" />} />
    </ButtonGroup>
}`,...T.parameters?.docs?.source},description:{story:`Icon-only button group for compact toolbars.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup label="History">
      <Button label="Undo" variant="ghost" icon={<ArrowUturnLeftIcon style={iconSize} />} isIconOnly />
      <Button label="Redo" variant="ghost" icon={<ArrowUturnRightIcon style={iconSize} />} isIconOnly />
    </ButtonGroup>
}`,...E.parameters?.docs?.source},description:{story:`Undo/redo pair with ghost variant.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <ButtonGroup label="Small actions" size="sm">
        <Button label="Copy" />
        <Button label="Paste" />
      </ButtonGroup>
      <ButtonGroup label="Medium actions" size="md">
        <Button label="Copy" />
        <Button label="Paste" />
      </ButtonGroup>
      <ButtonGroup label="Large actions" size="lg">
        <Button label="Copy" />
        <Button label="Paste" />
      </ButtonGroup>
    </div>
}`,...D.parameters?.docs?.source},description:{story:`All three sizes side by side.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup label="Save options">
      <Button label="Save" variant="primary" />
      <Button label="Save options" variant="primary" icon={<ChevronDownIcon style={iconSize} />} isIconOnly />
    </ButtonGroup>
}`,...O.parameters?.docs?.source},description:{story:`Primary variant button group.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup label="Merge options">
      <Button label="Merge pull request" variant="primary" />
      <Button label="More merge options" variant="primary" icon={<ChevronDownIcon style={iconSize} />} isIconOnly />
    </ButtonGroup>
}`,...k.parameters?.docs?.source},description:{story:`Two-button group (common split button pattern).`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup label="Edit actions">
      <Button label="Edit" />
      <IconButton label="More options" icon={<ChevronDownIcon style={iconSize} />} />
    </ButtonGroup>
}`,...A.parameters?.docs?.source},description:{story:`Mixed button and icon button children.`,...A.parameters?.docs?.description}}},j=[`Horizontal`,`Vertical`,`IconOnly`,`GhostPair`,`Sizes`,`PrimaryVariant`,`SplitButton`,`Mixed`]}))();export{E as GhostPair,C as Horizontal,T as IconOnly,A as Mixed,O as PrimaryVariant,D as Sizes,k as SplitButton,w as Vertical,j as __namedExportsOrder,x as default};