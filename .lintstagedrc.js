const path = require('path');

const buildEslintCommand = (filenames) => `nuxt lint --fix --filename ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file')}`;

export default{
    '*.{js,ts,vue}': [buildEslintCommand, 'pnpm prettier --write .'],
    '*.{json,scss}': ['pnpm prettier --write .'],
};