import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Button from "@material-ui/core/Button";
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

function CustomizedTable(props) {
  const { classes, data, buttonClick } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Tipo de bien o servicio</CustomTableCell>
            <CustomTableCell>Valor de mercado aproximado</CustomTableCell>
            <CustomTableCell>Nombre, denominación o razón social</CustomTableCell>
            <CustomTableCell>RFC del tercero propietario</CustomTableCell>
            <CustomTableCell>CURP del tercero propietario</CustomTableCell>
            <CustomTableCell>Relación con la persona</CustomTableCell>
            <CustomTableCell>Sector/Industria</CustomTableCell>
            <CustomTableCell>Fecha de inicio</CustomTableCell>
            <CustomTableCell>Domicilio de la persona</CustomTableCell>
            <CustomTableCell>Observaciones/Comentarios</CustomTableCell>
            <CustomTableCell>Opciones</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow className={classes.row} key={index}>
                <CustomTableCell>{index}-{item.tipo_bien.valor}</CustomTableCell>
                <CustomTableCell>{item.valor_mercado.valor}</CustomTableCell>
                <CustomTableCell>{item.nombre_tercero_propietario}</CustomTableCell>
                <CustomTableCell>{item.rfc_tercero_propietario}</CustomTableCell>
                <CustomTableCell>{item.curp_tercero_propietario}</CustomTableCell>
                <CustomTableCell>{item.relacion_persona.valor}</CustomTableCell>
                <CustomTableCell>{item.sector_industria.valor}</CustomTableCell>
                <CustomTableCell>{item.fecha_inicio}</CustomTableCell>
                <CustomTableCell>{item.domicilio_persona.pais.valor}</CustomTableCell>
                <CustomTableCell>{item.observaciones}</CustomTableCell>
                  <CustomTableCell>
                    <Button
                      variant="contained"
                      size="small"
                      value={index}
                      onClick={buttonClick(index)}
                    >
                      Eliminar
                    </Button>
                  </CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);
