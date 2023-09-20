import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Props } from './types';
import { CardMedia } from '@mui/material';
import * as styles from './styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        minWidth: '400px',
    },
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
}));

export default function HeroDialog({ onClose, isOpen, hero }: Props) {
    return (
        <BootstrapDialog open={isOpen} onClose={onClose}>
            <DialogTitle sx={{ m: 0, p: 2 }} css={styles.titleContainer}>
                <Typography gutterBottom variant="h5" component="div">
                    {hero?.name}
                </Typography>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers css={styles.mainContainer}>
                <CardMedia
                    component="img"
                    alt={hero?.name}
                    height="300"
                    image={hero?.image.url}
                    css={styles.profilePicture}
                />
                {hero?.biography && Object.keys(hero?.biography).map((key, index) =>
                    <Typography key={index} variant="body2" color="text.secondary" gutterBottom paddingTop={1}>
                        {key.toUpperCase()} : {hero?.biography[key]}
                    </Typography>
                )}
            </DialogContent>

        </BootstrapDialog>

    )
}