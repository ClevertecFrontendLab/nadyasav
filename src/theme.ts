import { defineStyleConfig, extendTheme } from '@chakra-ui/react';

export const headingTheme = defineStyleConfig({
    sizes: {
        md: { fontSize: 'lg', lineHeight: '156%', fontWeight: 'medium' },
    },
});

export const textTheme = defineStyleConfig({
    sizes: {
        sm: { fontSize: 'sm', lineHeight: '143%', fontWeight: 'normal' },
        md: { fontSize: 'md', lineHeight: '150%', fontWeight: 'normal' },
    },
});

export const theme = extendTheme({
    styles: {
        global: () => ({
            'html, body': {
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
                fontFamily: 'Inter, sans-serif',
                fontSize: 'md',
                lineHeight: 1,
                fontWeight: 'normal',
                color: 'black',
            },
            '#root': {
                width: '100%',
            },
        }),
    },
    components: {
        Container: {
            baseStyle: {
                paddingInline: 0,
            },
        },
        Heading: headingTheme,
        Text: textTheme,
    },
    colors: {
        black: '#000000',
        lime: {
            50: '#ffffd3',
        },
    },
    space: {
        3: '12px',
        4: '16px',
        6: '24px',
        10: '40px',
        14: '56px',
    },
    fontSizes: {
        sm: '14px',
        md: '16px',
        lg: '18px',
    },
});
