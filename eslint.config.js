import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            'react/react-in-jsx-scope': 'off',
            'import/extensions': 'off',
            'react/jsx-no-target-blank': 'off',
            'react/no-unescaped-entities': 'off',
            //'no-unused-vars': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/ban-ts-comment': 'off', 
            '@typescript-eslint/no-unused-vars': 'off', 
            'react/prop-types': 'off',
            indent: 'off', 
        },
    },
    {
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
