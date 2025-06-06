import antfu from '@antfu/eslint-config'

export default antfu(
    {
        stylistic: {
            overrides: {
                'style/comma-dangle': ['error', 'never'],
                'style/eol-last': ['error', 'never'],
                'style/indent': ['error', 4, { SwitchCase: 1 }],
                'style/quotes': ['error', 'single', { avoidEscape: true }],
                'style/semi': ['error', 'never']
            }
        },
        typescript: {
            overrides: {
                'node/prefer-global/buffer': 'off',
                'ts/consistent-type-imports': 'error'
            }
        }
    },
    {
        rules: {
            'eslint-comments/no-unlimited-disable': 'off',
            'no-restricted-imports': [
                'error',
                {
                    patterns: [
                        {
                            message: 'Please use alias @[alias] instead.',
                            regex: '^\\.'
                        }
                    ]
                }
            ],
            'perfectionist/sort-array-includes': 'error',
            'perfectionist/sort-classes': 'error',
            'perfectionist/sort-heritage-clauses': [
                'error',
                {
                    customGroups: {
                        withIdInterface: '^WithId'
                    },
                    groups: [
                        'withIdInterface',
                        'unknown'
                    ]
                }
            ],
            'perfectionist/sort-imports': [
                'error',
                {
                    internalPattern: ['^@/.+'],
                    newlinesBetween: 'always'
                }
            ],
            'perfectionist/sort-interfaces': [
                'error',
                {
                    partitionByNewLine: true
                }
            ],
            'perfectionist/sort-intersection-types': [
                'error',
                {
                    partitionByNewLine: true
                }
            ],
            'perfectionist/sort-modules': 'error',
            'perfectionist/sort-object-types': [
                'error',
                {
                    partitionByNewLine: true
                }
            ],
            'perfectionist/sort-objects': [
                'error',
                {
                    partitionByNewLine: true
                }
            ],
            'perfectionist/sort-switch-case': 'error',
            'perfectionist/sort-union-types': 'error'
        }
    }
)