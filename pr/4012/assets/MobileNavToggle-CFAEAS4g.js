import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-B7Te67-h.js";import{t as n}from"./jsx-runtime-DqZldVDK.js";import{t as r}from"./Button-LstlgWmK.js";import{t as i}from"./Button-BwOTEsqa.js";import{n as a,t as o}from"./Icon-B4cunfsZ.js";import{c as s,l as c}from"./navItemStyles.stylex-a5Dxd17e.js";function l({ref:e,children:t,label:n=`Open navigation`,"data-testid":i,xstyle:o,className:s,style:l}){let{isMobile:d,isMobileNavEnabled:f,toggleMobileNav:p}=c();return!d||!f?null:(0,u.jsx)(r,{ref:e,variant:`ghost`,label:n,icon:t??(0,u.jsx)(a,{icon:`menu`,color:`inherit`}),onClick:p,"data-testid":i??`mobile-nav-toggle`,xstyle:o,className:s,style:l,isIconOnly:!0})}var u,d=e((()=>{t(),i(),o(),s(),u=n(),l.displayName=`MobileNavToggle`,l.__docgenInfo={description:`Mobile nav toggle button. Reads from AppShell context to open/close
the mobile navigation drawer.

Renders nothing when above the mobile breakpoint — safe to include
unconditionally in your layout.

@example
\`\`\`
<div className="my-toolbar">
  <MobileNavToggle />
  <h1>Page Title</h1>
</div>
<MobileNavToggle label="Menu">
  <MyCustomMenuIcon />
</MobileNavToggle>
\`\`\``,methods:[],displayName:`MobileNavToggle`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLButtonElement>`,elements:[{name:`HTMLButtonElement`}]},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:`Custom content to render instead of the default hamburger icon.`},label:{required:!1,tsType:{name:`string`},description:`Accessible label for the toggle button.
@default 'Open navigation'`,defaultValue:{value:`'Open navigation'`,computed:!1}},"data-testid":{required:!1,tsType:{name:`string`},description:`Test ID for the button element.`}},composes:[`Pick`]}}));export{d as n,l as t};