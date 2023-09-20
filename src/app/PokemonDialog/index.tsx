import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import { Props } from './types';
import { CardMedia } from '@mui/material';
import * as styles from './styles';
import { Dialog } from '@src/common-components';
import usePokemonDialog from './hooks';

export default function PokemonDialog({ onClose, isOpen, pokemon }: Props) {
    const { image } = usePokemonDialog({ isOpen, pokemon });

    return (
        <Dialog open={isOpen} onClose={onClose} title={pokemon?.name}>
            <DialogContent dividers css={styles.mainContainer}>
                <CardMedia
                    component="img"
                    alt={pokemon?.name}
                    height="300"
                    image={image}
                    css={styles.profilePicture}
                />
                <Typography variant="body2" color="text.secondary" gutterBottom paddingTop={1}>
                    Attack: {pokemon?.attack}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom paddingTop={1}>
                    Defense: {pokemon?.defense}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom paddingTop={1}>
                    Generation: {pokemon?.generation}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom paddingTop={1}>
                    Hit_points: {pokemon?.hit_points}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom paddingTop={1}>
                    Speed: {pokemon?.speed}
                </Typography>
            </DialogContent>
        </Dialog>

    )
}