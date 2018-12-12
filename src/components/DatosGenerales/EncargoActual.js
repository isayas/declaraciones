import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Tabla from "./TablaDatosCurriculares";

import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";

/*select*/
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
/*select*/

/*Multiselect*/
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
/*Multiselect*/

import FormControlLabel from "@material-ui/core/FormControlLabel";

import Direccion from "./Direccion";

// data picker
import moment from "moment";

const styles = theme => ({
  card: {
    minWidth: 275,
    marginTop: 10
  },
  title: {
    fontSize: 18
  },
  textField: {
    width: "100%"
  },
  select: {
    //minWidth: 335,
    marginTop: 15,
    width: "100%"
  },
  button: {
    margin: theme.spacing.unit,
    marginTop: 25
  },
  input: {
    display: "none"
  }
});

// estilos para los select
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function SimpleCard(props) {
  const { classes, data, handleChange } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Encargo Actual
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <TextField
              id="grado"
              label="Ente Publico"
              className={classes.textField}
              value={data.datos_encargo_actual.ente_publico}
              onChange={handleChange("datos_encargo_actual.ente_publico")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="grado"
              label="Nombre del Empleo"
              className={classes.textField}
              value={data.datos_encargo_actual.empleo_cargo_comision}
              onChange={handleChange("datos_encargo_actual.empleo_cargo_comision")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Nivel de Gobierno</InputLabel>
              <Select
                value={data.datos_encargo_actual.nivel_gobierno.codigo}
                onChange={handleChange("datos_encargo_actual.nivel_gobierno")}
                inputProps={{
                  name: "estado_civil",
                  id: "estado_civil"
                }}
              >
                {data.estadosciviles.map(estadocivil => (
                  <MenuItem key={estadocivil.codigo} value={estadocivil.codigo}>
                    {estadocivil.valor}
                  </MenuItem>
                ))},
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Poder Juridico</InputLabel>
              <Select
                value={data.datos_encargo_actual.poder_juridico.codigo}
                onChange={handleChange("datos_encargo_actual.poder_juridico")}
                inputProps={{
                  name: "estado_civil",
                  id: "estado_civil"
                }}
              >
                {data.estadosciviles.map(estadocivil => (
                  <MenuItem key={estadocivil.codigo} value={estadocivil.codigo}>
                    {estadocivil.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.datos_encargo_actual.contratado_honorarios}
                  onChange={handleChange("datos_encargo_actual.contratado_honorarios")}
                  value="datos_encargo_actual.contratado_honorarios"
                  color="primary"
                />
              }
              label="Contratado por honorarios"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="grado"
              label="Nivel de encargo"
              className={classes.textField}
              value={data.datos_encargo_actual.nivel_encargo}
              onChange={handleChange("datos_encargo_actual.nivel_encargo")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="grado"
              label="Área de adscripción"
              className={classes.textField}
              value={data.datos_encargo_actual.area_adscripcion}
              onChange={handleChange("datos_encargo_actual.area_adscripcion")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="grado"
              label="Fecha de posesión"
              className={classes.textField}
              value={data.datos_encargo_actual.fecha_posesion}
              onChange={handleChange("datos_encargo_actual.fecha_posesion")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="grado"
              label="Telefono laboral"
              className={classes.textField}
              value={data.datos_encargo_actual.telefono_laboral.numero}
              onChange={handleChange("datos_encargo_actual.telefono_laboral.numero")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="grado"
              label="Extensión"
              className={classes.textField}
              value={data.datos_encargo_actual.telefono_laboral.extension}
              onChange={handleChange("datos_encargo_actual.telefono_laboral.extension")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Sector/Industria</InputLabel>
              <Select
                value={data.datos_encargo_actual.sector_industria.codigo}
                onChange={handleChange("datos_encargo_actual.sector_industria")}
                inputProps={{
                  name: "estado_civil",
                  id: "estado_civil"
                }}
              >
                {data.estadosciviles.map(estadocivil => (
                  <MenuItem key={estadocivil.codigo} value={estadocivil.codigo}>
                    {estadocivil.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.datos_encargo_actual.funciones_principales[0].codigo}
                  onChange={handleChange("datos_encargo_actual.funciones_principales.codigo")}
                  value="datos_encargo_actual.funciones_principales.codigo"
                  color="primary"
                />
              }
              label="Funciones"
            />
          </Grid>
          <Grid item xs={12}>
            <Direccion
              data={data.datos_encargo_actual.direccion_encargo}
              ciudades={data.ciudades}
              entidades={data.entidades}
              municipios={data.municipios}
              localidades={data.localidades}
              tipovialidad={data.tipovialidad}
              handleChange={handleChange}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
