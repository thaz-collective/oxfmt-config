import { defineConfig } from 'oxfmt';

export const oxFmtConfigPatterns = {
  elementNamePattern: ['oxfmt'],
  groupName: 'oxfmt',
};

export const oxLintConfigPatterns = {
  elementNamePattern: ['oxlint', 'oxlint-tsgolint'],
  groupName: 'oxlint',
};

export const bundlingConfigPatterns = {
  elementNamePattern: ['tsdown', 'rolldown', 'rollup-**', 'rolldown-**'],
  groupName: 'bundling',
};

export const viteConfigPatterns = {
  elementNamePattern: ['vite-plus', 'vite', 'vitest', '@vite/**', '@vitest/**', '@vitejs/**', 'vite-**', 'vitest-**'],
  groupName: 'vite',
};

export const reactConfigPatterns = {
  elementNamePattern: ['react', 'react-dom'],
  groupName: 'react',
};

export const tanstackConfigPatterns = {
  elementNamePattern: ['@tanstack/**'],
  groupName: 'tanstack',
};

export const thazstackConfigPatterns = {
  elementNamePattern: ['@thazstack/**'],
  groupName: 'thazstack',
};

export const oxfmtConfig = defineConfig({
  // These values can clash with editorconfig so keep in sync
  endOfLine: 'lf',
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,

  // Everything else after
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  jsxSingleQuote: false,
  quoteProps: 'as-needed',
  singleAttributePerLine: true,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',

  overrides: [
    {
      files: ['*.json', '*.jsonc', '*.json5'],
      options: {
        trailingComma: 'none',
      },
    },
  ],

  ignorePatterns: [
    'build/**',
    'dist/**',
    '.output/**',
    '.tanstack/**',
    '.tanstack-start/**',

    'pnpm-lock.yaml',
    'pnpm-workspace.yaml',

    'route-tree.gen.ts',
  ],

  sortImports: {
    order: 'asc',
    newlinesBetween: false,
    internalPattern: ['@src/', '@test/', '@mock/', '#src/', '#test/', '#mock/'],

    customGroups: [
      oxFmtConfigPatterns,
      {
        ...oxFmtConfigPatterns,
        selector: 'type',
        groupName: `type-${oxFmtConfigPatterns.groupName}`,
      },
      oxLintConfigPatterns,
      {
        ...oxLintConfigPatterns,
        selector: 'type',
        groupName: `type-${oxLintConfigPatterns.groupName}`,
      },
      viteConfigPatterns,
      {
        ...viteConfigPatterns,
        selector: 'type',
        groupName: `type-${viteConfigPatterns.groupName}`,
      },
      reactConfigPatterns,
      {
        ...reactConfigPatterns,
        selector: 'type',
        groupName: `type-${reactConfigPatterns.groupName}`,
      },
      tanstackConfigPatterns,
      {
        ...tanstackConfigPatterns,
        selector: 'type',
        groupName: `type-${tanstackConfigPatterns.groupName}`,
      },
      thazstackConfigPatterns,
      {
        ...thazstackConfigPatterns,
        selector: 'type',
        groupName: `type-${thazstackConfigPatterns.groupName}`,
      },
    ],
    groups: [
      ['type-builtin'],
      ['builtin'],

      { newlinesBetween: true },

      [`type-${oxFmtConfigPatterns.groupName}`],
      [oxFmtConfigPatterns.groupName],
      [`type-${oxLintConfigPatterns.groupName}`],
      [oxLintConfigPatterns.groupName],

      { newlinesBetween: true },

      [`type-${viteConfigPatterns.groupName}`],
      [viteConfigPatterns.groupName],

      { newlinesBetween: true },

      [`type-${reactConfigPatterns.groupName}`],
      [reactConfigPatterns.groupName],

      { newlinesBetween: true },

      [`type-${tanstackConfigPatterns.groupName}`],
      [tanstackConfigPatterns.groupName],

      { newlinesBetween: true },

      [`type-${thazstackConfigPatterns.groupName}`],
      [thazstackConfigPatterns.groupName],

      { newlinesBetween: true },

      ['type-external'],
      ['external'],

      { newlinesBetween: true },

      ['type-internal', 'type-subpath'],
      ['internal', 'subpath'],

      { newlinesBetween: true },

      ['type-parent', 'type-sibling', 'type-index'],
      ['parent', 'sibling', 'index'],

      { newlinesBetween: true },

      ['style'],

      { newlinesBetween: true },

      ['unknown'],
    ],
  },
});
