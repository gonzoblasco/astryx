// Copyright (c) Meta Platforms, Inc. and affiliates.

/** @type {import('../../core/src/docs-types').ReferenceDoc} */

export const docs = {
  name: 'internationalization',
  title: 'Internationalization',
  category: 'guide',
  description:
    'Localize astryx component strings, provide translation catalogs, override default text, coexist with your own i18n library, swap languages at runtime, and test translations with the pseudo locale.',

  sections: [
    {
      title: 'Quick Start',
      category: 'guide',
      content: [
        {
          type: 'prose',
          text: 'Internationalization ships with `@astryxdesign/core`. There is nothing to install. Wrap your app in `<InternationalizationProvider>` and set a `locale` — astryx components pick up localized strings automatically.',
        },
        {
          type: 'code',
          lang: 'tsx',
          label: 'Wrap your app',
          code: `import {InternationalizationProvider} from '@astryxdesign/core';

function App() {
  return (
    <InternationalizationProvider locale="en">
      <YourApp />
    </InternationalizationProvider>
  );
}`,
        },
        {
          type: 'code',
          lang: 'tsx',
          label: 'Read strings inside a component',
          code: `import {useTranslator} from '@astryxdesign/core';

function SaveButton() {
  const t = useTranslator();
  return <button>{t('@myapp.actions.save')}</button>;
}`,
        },
        {
          type: 'prose',
          text: 'The hook is available to consumer components too, but using it is entirely optional — many teams keep their app strings on their existing i18n library (react-intl, i18next, next-intl, LinguiJS) and only use `useTranslator` when reading astryx keys. If you do route your own strings through it, we recommend namespacing them (`@myapp.*` or your npm scope) to keep them separated from `@astryx.*`, but this is a convention, not a requirement — the resolver treats every key as an opaque string.',
        },
        {
          type: 'prose',
          text: 'One caveat if you use `useTranslator` for your own strings: astryx ships an English fallback for `@astryx.*` keys but nothing else. Provide your own `en.json` (and any additional locales) as part of `messages` so your keys have a default when the active locale is missing them.',
        },
      ],
    },
    {
      title: 'Providing locale catalogs',
      category: 'guide',
      content: [
        {
          type: 'prose',
          text: 'Astryx bundles only the English catalog today. To render in any other locale, provide a translation catalog through the `messages` prop and set `locale` accordingly. This matches how MUI, Ant Design, and AG Grid work — the consumer app supplies the catalogs it actually needs so unused translations stay out of the bundle.',
        },
        {
          type: 'code',
          lang: 'tsx',
          label: 'Add French',
          code: `import {InternationalizationProvider} from '@astryxdesign/core';
import fr from './locales/astryx/fr.json';

<InternationalizationProvider locale="fr" messages={{fr}}>
  <App />
</InternationalizationProvider>;`,
        },
        {
          type: 'prose',
          text: "See `@astryxdesign/core/locales/en.json` for the full inventory of keys to translate. Copy it as the starting point — every key you translate replaces the English default; anything you omit falls back through the locale chain to English (e.g. `pt-BR` walks to `pt` then to shipped `en`), so a partial translation renders as a mix rather than empty text or raw key names.",
        },
        {
          type: 'prose',
          text: 'A community-maintained set of astryx translations is on the roadmap but not shipped yet. For now, consumer apps that ship in multiple languages own their astryx catalogs alongside their app catalogs. Contributions to a first-party set are welcome — track discussion at https://github.com/facebook/astryx/issues/3641.',
        },
      ],
    },
    {
      title: "Overriding astryx's default text",
      category: 'guide',
      content: [
        {
          type: 'prose',
          text: 'Use `overrides` to change individual strings without shipping a full catalog. Overrides are keyed by locale and merged on top of the built-in and user-supplied catalogs.',
        },
        {
          type: 'code',
          lang: 'tsx',
          label: 'Change one string in English',
          code: `<InternationalizationProvider
  locale="en"
  overrides={{en: {'@astryx.pagination.next': 'Next →'}}}
>
  <App />
</InternationalizationProvider>`,
        },
        {
          type: 'prose',
          text: 'Overrides win over both bundled English and any `messages` catalog for the same key. Use them for brand voice tweaks or one-off wording changes.',
        },
      ],
    },
    {
      title: 'Using astryx with your own i18n library',
      category: 'guide',
      content: [
        {
          type: 'prose',
          text: "Astryx components render astryx strings through astryx's provider. Consumer components render consumer strings through whatever i18n library you already use — react-intl, i18next, next-intl, LinguiJS, and so on. The two systems coexist; your translations don't have to route through astryx.",
        },
        {
          type: 'code',
          lang: 'tsx',
          label: 'Astryx + next-intl side by side',
          code: `import {InternationalizationProvider, Button} from '@astryxdesign/core';
import {NextIntlClientProvider, useTranslations} from 'next-intl';
import fr from './locales/astryx/fr.json';

function Checkout() {
  // Your strings — resolved by next-intl.
  const t = useTranslations('Checkout');
  return (
    <section>
      <h1>{t('title')}</h1>
      {/* Astryx strings inside <Button> (aria labels, spinners, etc.)
          are resolved by <InternationalizationProvider>. */}
      <Button label={t('placeOrder')} />
    </section>
  );
}

export default function App({appMessages}) {
  return (
    <NextIntlClientProvider locale="fr" messages={appMessages}>
      <InternationalizationProvider locale="fr" messages={{fr}}>
        <Checkout />
      </InternationalizationProvider>
    </NextIntlClientProvider>
  );
}`,
        },
        {
          type: 'prose',
          text: 'Keep the two providers in sync on locale, and each library owns its own catalog. Astryx never sees your app strings, and your i18n library never sees astryx internals.',
        },
      ],
    },
    {
      title: 'Runtime language swap',
      category: 'guide',
      content: [
        {
          type: 'prose',
          text: 'Re-render `<InternationalizationProvider>` with a new `locale` prop and every astryx string updates live. No reload, no separate API call.',
        },
        {
          type: 'code',
          lang: 'tsx',
          label: 'Toggle between locales',
          code: `const [locale, setLocale] = useState<'en' | 'fr'>('en');

<InternationalizationProvider locale={locale} messages={{fr}}>
  <Button
    label={locale === 'en' ? 'Français' : 'English'}
    onClick={() => setLocale(l => (l === 'en' ? 'fr' : 'en'))}
  />
  <App />
</InternationalizationProvider>;`,
        },
        {
          type: 'prose',
          text: "Persisting the user's choice (localStorage, cookie, URL segment, account setting) is up to the consumer. Astryx reads whatever `locale` you pass in.",
        },
      ],
    },
    {
      title: 'Testing your translations',
      category: 'guide',
      content: [
        {
          type: 'prose',
          text: 'Astryx generates a `pseudo` locale that wraps every string in `⟦…⟧` and replaces letters with accented look-alikes. Switching to it in development instantly reveals any astryx string that isn\'t going through the translator, plus any layout that breaks under longer text.',
        },
        {
          type: 'code',
          lang: 'tsx',
          label: 'Turn on pseudo-localization',
          code: `import pseudo from '@astryxdesign/core/locales/pseudo.json';

<InternationalizationProvider locale="pseudo" messages={{pseudo}}>
  <App />
</InternationalizationProvider>;`,
        },
        {
          type: 'prose',
          text: 'Any bare English text you still see on screen is a hardcoded string that needs to be routed through `useTranslator`.',
        },
      ],
    },
    {
      title: 'For contributors',
      category: 'guide',
      content: [
        {
          type: 'prose',
          text: "Astryx's own strings live in `packages/core/locales/en.json`. New user-facing strings must go through `useTranslator` — this is enforced by the `@astryx/no-hardcoded-i18n-string` ESLint rule. See the AI contribution guide for the alias-and-resolve pattern used when adding new keys.",
        },
      ],
    },
  ],
};
