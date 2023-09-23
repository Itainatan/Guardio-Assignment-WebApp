import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Props } from './types';
import { CircularProgress } from '@mui/material';
import * as styles from './styles'
import { useTheme } from '@src/theme/hooks';

export default function PokemonCard({ pokemon, onClickShowPokemon }: Props) {

    const { theme } = useTheme()
    return (
        <Card css={styles.container} >
            <CardContent sx={{ height: 120 }}>
                {
                    !!pokemon ? (
                        <>
                            <Typography gutterBottom variant="h5" component="div">{pokemon.name}</Typography>
                            <Typography gutterBottom variant="h6" component="div">Number: {pokemon.number}</Typography>
                            <Typography gutterBottom variant="h6" component="div">Type: {pokemon.type_one}</Typography>
                        </>
                    ) : <CircularProgress />
                }
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onClickShowPokemon}>Learn More</Button>
                {/* <Button size="small" onClick={onClickCaptured} color='warning'>Add To Captured</Button> */}
            </CardActions>
        </Card>
    );
}