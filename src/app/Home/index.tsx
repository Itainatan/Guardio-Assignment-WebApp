import { Button, CircularProgress, Toolbar, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AppBar, } from "@src/common-components";
import * as styles from "./styles";
import useHome from "./hooks";
import HeroCard from "../Card";
import { Hero } from "../types";
import HeroDialog from "../HeroDialog";

export default function Home() {
  const { onSubmit, isLoading, register, history, onRemoveHero, onClickShowHero, onClickCloseModal, hero, isModalOpen } = useHome();

  return (
    <div css={styles.container}>

      <AppBar position="absolute" open={false} >
        <Toolbar>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            Octup - SuperHero App
          </Typography>
        </Toolbar>
      </AppBar>

      <div css={styles.card}>
        <form onSubmit={onSubmit} css={styles.form}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="enter superhero name"
            css={styles.input}
            {...register("search", {
              required: true,
            })}
          />
          {isLoading ? (
            <CircularProgress color="inherit" />
          ) : (
            <Button type="submit" variant="contained" css={styles.submitButton} onClick={onSubmit}>
              Search
            </Button>
          )}
        </form>

        <div css={styles.dataContainer}>
          {history.map((hero: Hero) => <HeroCard key={hero.id} hero={hero} onClickShowHero={() => onClickShowHero(hero)} onClickRemove={() => onRemoveHero(hero.id)} />)}
        </div>

        <HeroDialog isOpen={isModalOpen} hero={hero} onClose={onClickCloseModal} />
      </div>
    </div>
  );
};

