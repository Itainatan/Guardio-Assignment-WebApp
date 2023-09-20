import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Props } from './types'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        minWidth: '400px',
    },
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
}));

export default function DialogComponent({ open, title, onClose, children }: Props) {
    return (
        <BootstrapDialog open={open} onClose={onClose}>
            <DialogTitle sx={{ m: 0, p: 2 }} display="flex" justifyContent="end">
                <Typography gutterBottom variant="h5" component="div">
                    {title}
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
            {children}
        </BootstrapDialog>
    )

}

