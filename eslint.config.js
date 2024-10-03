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
            'no-unused-vars': 'off', // Disable unused vars check (general)
            '@typescript-eslint/no-explicit-any': 'off', // Allow any type
            '@typescript-eslint/ban-ts-comment': 'off', // Turn off ts-ignore warning
            '@typescript-eslint/no-unused-vars': 'off', // Allow unused vars in TS
            'react/prop-types': 'off', // Disable prop-types validation
            indent: 'off', // Disable indentation checking
            // Removed the following lines
            // 'import/prefer-default-export': 'off',
            // 'react-refresh/only-export-components': 'off',
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
