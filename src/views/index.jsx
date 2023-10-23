import { Container, Stack } from '@mui/material'
import { DATOS_ELECCIONES, LABELS_PARTIDOS } from '../constants'
import Agrupacion from '../components/Agrupacion'

export default function HomePage() {
    // eslint-disable-next-line no-undef
    console.log('LABELS_PARTIDOS => ', LABELS_PARTIDOS)
    // eslint-disable-next-line no-undef
    console.log('DATOS_ELECCIONES => ', DATOS_ELECCIONES)
    // eslint-disable-next-line no-undef
    console.log(
        'Object.entries(DATOS_ELECCIONES) => ',
        Object.entries(LABELS_PARTIDOS).map(([key, value]) => value)
    )
    return (
        <Container maxWidth='xl'>
            <Stack>
                {Object.entries(LABELS_PARTIDOS).map(([key, value]) => (
                    <Agrupacion
                        key={key}
                        agrupacion={{
                            name: value,
                            amount: DATOS_ELECCIONES.VOTOS_POR_PARTIDO[key].num,
                            code: key,
                        }}
                    />
                ))}
            </Stack>
        </Container>
    )
}
