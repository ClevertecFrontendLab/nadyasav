import { extendTheme } from '@chakra-ui/react';

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
            },
            '#root': {
                width: '100%',
            },
        }),
    },
    colors: {
        black: '#000000',
        lime: {
            50: '#ffffd3',
        },
    },
});
