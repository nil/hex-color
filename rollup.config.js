import { terser } from 'rollup-plugin-terser';
import info from './package.json';

const bannerText = `/*!
 * ${info.name} v${info.version}
 * by ${info.author}
 */`;

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/main.js',
    name: 'hexFormat',
    format: 'umd',
    exports: 'named',
    globals: {
      'options-config': 'OptionsConfig'
    },
    banner: bannerText
  },
  external: ['options-config'],
  plugins: [terser(
    {
      output: {
        comments: /^!/
      }
    }
  )]
};
