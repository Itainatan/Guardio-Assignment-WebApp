import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Props } from './types';

export default function HeroCard({ pokemon, onClickRemove, onClickShowPokemon }: Props) {
    return (
        <Card sx={{ maxWidth: 500, margin: 2 }}>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">{pokemon.name}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onClickShowPokemon}>Learn More</Button>
                <Button size="small" onClick={onClickRemove} color='warning'>Remove</Button>
            </CardActions>
        </Card>
    );
}