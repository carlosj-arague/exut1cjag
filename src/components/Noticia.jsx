import { useState } from 'react'
import Card from '@mui/material/Card';
import { CardHeader, Grid2 } from '@mui/material';
import Avatar from '@mui/material/Avatar'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'


function Noticia({ avatar, altAvatar, titulo, fecha, rutaImagen, altImagen, noticia, numLikes }) {

  const [liked, setLiked] = useState(false)
  const [nLikes, setNLikes] = useState(numLikes)
  const [open, setOpen] = useState(false);


  function handleLike() {
    if (liked) {
      setNLikes(nLikes - 1)
    } else {
      setNLikes(nLikes + 1)
    }
    setLiked(!liked)
  }

  const handleClose = () => {
    setOpen(false);
  };

  function handleShareWhatsApp() {
    console.log('Enviando por WhatsApp ...')
    handleClose()
  }
  function handleShareTelegram() {
    console.log('Enviando por Telegram ...')
    handleClose()
  }




  return (
    <>
      <Card >

        <CardHeader
          avatar={<Avatar src={avatar} />}
          alt={'Imagen de usuario: ' + altAvatar}
          title={titulo}
          subheader={fecha}
        />

        <CardMedia
          height={194}
          component="img"
          image={rutaImagen}
          alt={altImagen}
        />
        <CardContent>
          <Typography variant="h7" sx={{ color: 'text.secondary' }}>
            {noticia}
          </Typography>
        </CardContent>

        <CardActions>
          {nLikes}
          {liked ?
            <>
              <IconButton onClick={handleLike} color="secondary">
                <FavoriteIcon />
              </IconButton>
              <IconButton onClick={() => {setOpen(true)}}>
                <ShareIcon />
              </IconButton>
            </>
            :
            <>
              <IconButton onClick={handleLike} color='secondary'>
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton disabled>
                <ShareIcon />
              </IconButton>
            </>
          }
        </CardActions>

      </Card>
        <br/>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog"
      >
        <DialogTitle id="title">
          {"COMPARTIR"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog">
            ¿A través de qué plataforma desea compartir?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <IconButton onClick={handleShareWhatsApp} color='success'>
            <WhatsAppIcon />
          </IconButton>
          <IconButton onClick={handleShareTelegram} color='info'>
            <TelegramIcon />
          </IconButton>
        </DialogActions>
      </Dialog>

    </>
  )
}

export default Noticia