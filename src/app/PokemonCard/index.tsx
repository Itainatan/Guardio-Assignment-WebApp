import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Props } from './types';
import { CircularProgress } from '@mui/material';

export default function PokemonCard({ pokemon, onClickShowPokemon }: Props) {
    return (
        <Card sx={{ width: 300, margin: 2, height: 270 }} >
            <CardContent sx={{ height: 180 }}>
                {
                    !!pokemon ? (
                        <>
                            <Typography gutterBottom variant="h5" component="div">{pokemon.name}</Typography>
                            <Typography gutterBottom variant="h6" component="div">Number: {pokemon.number}</Typography>
                            <Typography gutterBottom variant="h6" component="div">Attack: {pokemon.attack}</Typography>
                            <Typography gutterBottom variant="h6" component="div">Defense: {pokemon.defense}</Typography>
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