import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Props } from './types';

export default function HeroCard({ hero, onClickRemove, onClickShowHero }: Props) {
    return (
        <Card sx={{ maxWidth: 500 }}>
            <CardMedia
                component="img"
                alt={hero.name}
                height="140"
                image={hero?.image.url}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {hero.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">{hero.biography['full-name']}</Typography>
                {Object.keys(hero.powerstats).map((key, index) =>
                    <Typography key={index} variant="body2" color="text.secondary">
                        {key} - {hero.powerstats[key]}
                    </Typography>
                )}

            </CardContent>
            <CardActions>
                <Button size="small" onClick={onClickShowHero}>Learn More</Button>
                <Button size="small" onClick={onClickRemove} color='warning'>Remove</Button>
            </CardActions>
        </Card>
    );
}