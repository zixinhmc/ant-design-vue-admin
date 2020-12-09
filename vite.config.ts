import { UserConfig } from 'vite';
import { resolve } from 'path';

const viteConfig: UserConfig = {
  alias: {
    '/@/': resolve(__dirname, 'src'),
  },
};

export default {
  ...viteConfig,
} as UserConfig;
