import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-B7Te67-h.js";import{n as r,t as i}from"./themeProps-_oSbOSxB.js";import{g as a,t as o,x as s}from"./utils-DBWEO4X_.js";import{t as c}from"./jsx-runtime-DqZldVDK.js";import{n as l}from"./useTooltip-D3cj7lEd.js";import{t as u}from"./Tooltip-DZ00zBHa.js";import{n as d,t as f}from"./Field-BOyvb-d5.js";import{a as p,i as m,n as h,o as g,r as _,t as v}from"./ListItem-BMAL529U.js";import{i as y,n as b,r as x,t as S}from"./CheckboxInput-DvsU72Rz.js";function C({label:e,isLabelHidden:t=!1,description:n,status:i,value:a,onChange:o,changeAction:c,density:u=`balanced`,hasDividers:d=!1,isDisabled:p=!1,disabledMessage:m,isReadOnly:h=!1,children:g,ref:v,width:y,xstyle:b,className:S,style:C,"data-testid":D}){let O=(0,w.useId)(),k=(0,w.useId)(),A=(0,w.useId)(),j=(0,w.useId)(),[,M]=(0,w.useTransition)(),N=a!==void 0,[P,F]=(0,w.useOptimistic)(a??E),[I,L]=(0,w.useOptimistic)(null),R=p&&!!m,z=l({placement:`above`,focusTrigger:`always`,isEnabled:R}),B=(0,w.useCallback)((e,t)=>{o?.(e),c&&M(async()=>{F(e),t!==void 0&&L(t),await c(e)})},[o,c,M,F,L]),V=(0,w.useMemo)(()=>({value:N?P:void 0,onChange:N?B:void 0,isDisabled:p,hasDisabledMessage:R,isReadOnly:h,loadingValue:I}),[N,P,B,p,R,h,I]);return(0,T.jsxs)(f,{ref:v,"data-testid":D,label:e,isLabelHidden:t,description:n,inputID:O,labelID:k,isGroupLabel:!0,descriptionID:n?A:void 0,isDisabled:p,status:i?{type:i.type,message:i.message,messageID:i.message?j:void 0}:void 0,statusVariant:`detached`,width:y,xstyle:b,...s(r(`checkbox-list`),{className:S,style:C}),children:[(0,T.jsx)(x,{value:V,children:(0,T.jsx)(`div`,{ref:e=>{z.ref(e)},role:`group`,"aria-labelledby":k,"aria-describedby":[n?A:null,i?.message?j:null,R?z.describedBy:null].filter(Boolean).join(` `)||void 0,children:(0,T.jsx)(_,{density:u,hasDividers:d,children:g})})}),R&&z.renderTooltip(m)]})}var w,T,E,D=e((()=>{w=t(n(),1),d(),m(),u(),o(),i(),y(),T=c(),E=[],C.displayName=`CheckboxList`,C.__docgenInfo={description:`A checkbox group component for multi-value selection.

Composes Field (for label, description, status) and List
(for density, dividers) with a context provider for collection mode.

@example
\`\`\`
<CheckboxList
  label="Notifications"
  value={selected}
  onChange={setSelected}>
  <CheckboxListItem label="Email" value="email" />
  <CheckboxListItem label="SMS" value="sms" />
  <CheckboxListItem label="Push" value="push" />
</CheckboxList>
\`\`\``,methods:[],displayName:`CheckboxList`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element`},label:{required:!0,tsType:{name:`string`},description:`Label text for the checkbox group (always rendered for accessibility).`},isLabelHidden:{required:!1,tsType:{name:`boolean`},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:`false`,computed:!1}},description:{required:!1,tsType:{name:`string`},description:`Description text displayed below the label.`},status:{required:!1,tsType:{name:`InputStatus`},description:`Status indicator for the checkbox group.
When set with a message, displays a colored message box below the group.`},value:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`The currently selected values (collection mode).`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(values: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`values`}],return:{name:`void`}}},description:`Callback fired when the selected values change (collection mode).`},changeAction:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(values: string[]) => void | Promise<void>`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`values`}],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:`Async action on change. Fires after onChange.
While the returned promise is pending, the toggled item shows a spinner
inside its checkbox and is marked \`aria-busy\`, and re-toggling it is
blocked. Other items remain interactive.`},density:{required:!1,tsType:{name:`union`,raw:`'compact' | 'balanced' | 'spacious'`,elements:[{name:`literal`,value:`'compact'`},{name:`literal`,value:`'balanced'`},{name:`literal`,value:`'spacious'`}]},description:`Spacing density for list items.
@default 'balanced'`,defaultValue:{value:`'balanced'`,computed:!1}},hasDividers:{required:!1,tsType:{name:`boolean`},description:`Whether to show dividers between list items.
@default false`,defaultValue:{value:`false`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether all checkbox items are disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},disabledMessage:{required:!1,tsType:{name:`string`},description:`Explains why the checkbox group is disabled. Applies to the whole-group
disabled state (\`isDisabled\`), not individual items. When set together with
\`isDisabled\`, the group shows a tooltip with this text on hover and keyboard
focus, and its checkboxes stay focusable (via \`aria-disabled\`) so the reason
is discoverable by keyboard and assistive technology. Toggling stays
blocked.

Use this instead of wrapping a disabled group in \`Tooltip\` — disabled
controls don't emit the pointer events an external tooltip needs.`},isReadOnly:{required:!1,tsType:{name:`boolean`},description:`Whether all checkbox items are read-only.
Displays the current state at full opacity but prevents interaction.
Unlike \`isDisabled\`, read-only checkboxes are not visually dimmed.
@default false`,defaultValue:{value:`false`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},children:{required:!0,tsType:{name:`ReactNode`},description:`Checkbox list items to render.`}},composes:[`Omit`]}}));function O({label:e,value:t,description:n,endContent:r,isDisabled:i=!1,isLoading:o=!1,isChecked:s,onCheck:c,ref:l,xstyle:u,className:d,style:f,onClick:m,...h}){let g=(0,k.use)(x);if(g&&g.value!==void 0&&t===void 0)throw Error("CheckboxListItem requires a `value` prop when used inside CheckboxList with a value array.");let _=((0,k.use)(p)?.density??`balanced`)===`compact`?`sm`:`md`,y=(g?.isDisabled??!1)||i,b=g?.isReadOnly??!1,C=o||(g?.loadingValue!=null&&t!==void 0?g.loadingValue===t:!1),w=!1;g&&g.value!==void 0&&t!==void 0?w=g.value.includes(t):s!==void 0&&(w=s);let T=!b&&(g!=null||c!=null),E=()=>{y||b||C||(g&&g.value!==void 0&&t!==void 0?g.value.includes(t)?g.onChange?.(g.value.filter(e=>e!==t),t):g.onChange?.([...g.value,t],t):c?.(w!==!0))};return(0,A.jsx)(v,{...h,ref:l,label:e,description:n,endContent:r,isDisabled:y,onClick:T||m?a(m,T?E:void 0):void 0,"aria-busy":C||void 0,xstyle:[w===!0&&!y&&!b&&j.selected,u],className:d,style:f,startContent:(0,A.jsx)(S,{label:typeof e==`string`?e:`Checkbox`,isLabelHidden:!0,value:w,onChange:()=>E(),isDisabled:y,isReadOnly:b,isLoading:C,size:_})})}var k,A,j,M=e((()=>{k=t(n(),1),o(),b(),h(),g(),y(),A=c(),j={selected:{kWkggS:`astryxgcxg3y`,$$css:!0}},O.displayName=`CheckboxListItem`,O.__docgenInfo={description:`A checkbox item for use within CheckboxList (collection mode)
or List (standalone mode).

In collection mode, checked state is derived from the parent's value array.
In standalone mode, uses isChecked/onCheck props directly.

Composes ListItem internally — gets density, dividers, hover/press,
focus, and container alignment for free.

@example
\`\`\`
<CheckboxListItem label="Email" value="email" />
<CheckboxListItem
  label="Accept terms"
  isChecked={accepted}
  onCheck={setAccepted}
/>
\`\`\``,methods:[],displayName:`CheckboxListItem`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},label:{required:!0,tsType:{name:`ReactNode`},description:`Primary text label for the item.

Accepts a plain string (single-line truncation applied automatically)
or a ReactNode for rich content (no truncation constraints —
child components control their own text behavior).`},value:{required:!1,tsType:{name:`string`},description:`Identity key for collection mode (REQUIRED inside CheckboxList).
Throws a runtime error if missing when used inside CheckboxList.`},description:{required:!1,tsType:{name:`string`},description:`Secondary text below the label.`},endContent:{required:!1,tsType:{name:`ReactNode`},description:`Content rendered after the label area.`},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether this individual item is disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},isLoading:{required:!1,tsType:{name:`boolean`},description:`Whether this item is in a loading state. Renders a spinner inside the
checkbox and blocks interaction on this item only.

In collection mode, this is also driven automatically: when the parent
\`CheckboxList\` has a \`changeAction\`, the toggled item shows its
spinner while that promise is pending.
@default false`,defaultValue:{value:`false`,computed:!1}},isChecked:{required:!1,tsType:{name:`union`,raw:`boolean | 'indeterminate'`,elements:[{name:`boolean`},{name:`literal`,value:`'indeterminate'`}]},description:`Direct checked state (standalone mode only).
Ignored when inside CheckboxList.`},onCheck:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:`Direct check handler (standalone mode only).
Ignored when inside CheckboxList.`},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLLIElement>`,elements:[{name:`HTMLLIElement`}]},description:`Ref forwarded to the root element`}},composes:[`Omit`]}}));export{D as i,M as n,C as r,O as t};