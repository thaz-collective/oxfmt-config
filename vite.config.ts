import { defineConfig } from 'vite-plus';
import { externalizeDeps } from 'vite-plugin-externalize-deps';

import { oxfmtConfig } from './src/config';

export default defineConfig({
  staged: {
    '*.{js,ts,tsx}': 'vp check --fix',
  },
  run: {
    cache: {
      scripts: false,
      tasks: true,
    },
    tasks: {
      build: {
        command: 'vp pack',
      },
      check: {
        command: 'vp check',
      },
      fmt: {
        command: 'vp fmt',
      },
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [externalizeDeps()],
  pack: {
    dts: {
      build: true,
    },
    outputOptions: {
      preserveModules: true,
    },
    entry: {
      config: './src/config.ts',
    },
    exports: {
      customExports: {
        '.': {
          types: './dist/config.d.mts',
          import: './dist/config.mjs',
        },
      },
    },
  },
  fmt: oxfmtConfig,
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
});
