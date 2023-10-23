import { Paper, Slider, Stack, Typography } from '@mui/material'
import { DATOS_ELECCIONES } from '../constants'

export default function Agrupacion({ agrupacion }) {
    // eslint-disable-next-line no-undef
    console.log('agrupacion => ', agrupacion)
    return (
        <Paper elevation={0} sx={{ p: 2 }}>
            <Stack>
                <Typography>{agrupacion.name}</Typography>

                <Slider
                    color={agrupacion.code}
                    value={agrupacion.amount}
                    aria-label='Disabled slider'
                    min={0}
                    max={DATOS_ELECCIONES.TOTAL}
                />
            </Stack>
        </Paper>
    )
}
