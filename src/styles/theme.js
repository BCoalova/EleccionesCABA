import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'

const themeLight = createTheme({
    palette: {
        mode: 'light',
        background: {
            paper: 'hsl(29, 70%, 96%)',
        },
        primary: {
            main: 'hsl(216, 94%, 51%)',
        },
        secondary: {
            main: 'hsl(29, 94%, 51%)',
        },
        text: {
            basic: 'hsl(0, 0%, 20%)',
        },
        divider: 'hsl(220, 11%, 16%)',
        JUNTOS_POR_EL_CAMBIO: {
            dark: 'hsl(52, 100%, 35%)',
            light: 'hsl(52, 100%, 60%)',
            main: 'hsl(52, 100%, 50%)',
            contrastText: '#333333',
        },
        UNION_POR_LA_PATRIA: {
            dark: 'hsl(198, 100%, 30%)',
            light: 'hsl(198, 100%, 54%)',
            main: 'hsl(198, 100%, 44%)',
            contrastText: '#333333',
        },
        LA_LIBERTAD_AVANZA: {
            dark: 'hsl(267, 52%, 34%)',
            light: 'hsl(267, 52%, 59%)',
            main: 'hsl(267, 52%, 49%)',
            contrastText: '#333333',
        },
        FRENTE_DE_IZQUIERDA: {
            dark: 'hsl(355, 93%, 50%)',
            light: 'hsl(355, 93%, 75%)',
            main: 'hsl(355, 93%, 65%)',
            contrastText: '#333333',
        },
    },
    chartOpt: {
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'hsl(0, 0%, 20%)',
                    },
                },
            },
            scales: {
                yAxis: {
                    min: 0,
                    ticks: { color: 'hsl(0, 0%, 20%)' },
                },
                xAxis: {
                    min: 0,
                    ticks: { color: 'hsl(0, 0%, 20%)' },
                },
            },
        },
    },
})

const themeDark = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: 'hsl(216, 94%, 71%)',
        },
        secondary: {
            main: 'hsl(29, 94%, 71%)',
        },
        lightFont: {
            main: grey[200],
        },
        background: {
            paper: 'hsl(216, 20%, 12%)',
        },
        text: {
            basic: 'hsl(0, 0%, 90%)',
        },
        divider: 'hsl(216, 13%, 62%)',
        JUNTOS_POR_EL_CAMBIO: {
            dark: 'hsl(52, 100%, 35%)',
            light: 'hsl(52, 100%, 60%)',
            main: 'hsl(52, 100%, 50%)',
            contrastText: '#333333',
        },
        UNION_POR_LA_PATRIA: {
            dark: 'hsl(198, 100%, 30%)',
            light: 'hsl(198, 100%, 54%)',
            main: 'hsl(198, 100%, 44%)',
            contrastText: '#333333',
        },
        LA_LIBERTAD_AVANZA: {
            dark: 'hsl(267, 52%, 34%)',
            light: 'hsl(267, 52%, 59%)',
            main: 'hsl(267, 52%, 49%)',
            contrastText: '#333333',
        },
        FRENTE_DE_IZQUIERDA: {
            dark: 'hsl(355, 93%, 50%)',
            light: 'hsl(355, 93%, 75%)',
            main: 'hsl(355, 93%, 65%)',
            contrastText: '#333333',
        },
    },
    chartOpt: {
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'hsl(0, 0%, 90%)',
                        padding: 20,
                        // margin: 40,
                    },
                },
            },
            scales: {
                yAxis: {
                    min: 0,
                    ticks: { color: 'hsl(0, 0%, 90%)' },
                },
                xAxis: {
                    min: 0,
                    ticks: { color: 'hsl(0, 0%, 90%)' },
                },
            },
        },
    },
})

export { themeLight, themeDark }
