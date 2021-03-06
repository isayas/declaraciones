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
            <CustomTableCell>Nombre del prestatario</CustomTableCell>
            <CustomTableCell>Número de registro</CustomTableCell>
            <CustomTableCell>Domicilio de prestatarios</CustomTableCell>
            <CustomTableCell>Sector/Industria</CustomTableCell>
            <CustomTableCell>Fecha del préstamo</CustomTableCell>
            <CustomTableCell>Monto original del préstamo</CustomTableCell>
            <CustomTableCell>Tasa de interés</CustomTableCell>
            <CustomTableCell>Saldo pendiente</CustomTableCell>
            <CustomTableCell>Fecha de vencimiento</CustomTableCell>
            <CustomTableCell>Porcentaje de propiedad en caso de copropiedad</CustomTableCell>
            <CustomTableCell>Nombre del copropietario</CustomTableCell>
            <CustomTableCell>Observaciones/Comentarios</CustomTableCell>
            <CustomTableCell>Opciones</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow className={classes.row} key={index}>
                <CustomTableCell>{index}-{item.nombre_prestatario}</CustomTableCell>
                <CustomTableCell>{item.numero_registro}</CustomTableCell>
                <CustomTableCell>{item.domicilio_prestatarios.pais.valor}</CustomTableCell>
                <CustomTableCell>{item.sector_industria.valor}</CustomTableCell>
                <CustomTableCell>{item.fecha_prestamo}</CustomTableCell>
                <CustomTableCell>{item.monto_original_prestamo}</CustomTableCell>
                <CustomTableCell>{item.tasa_interes}</CustomTableCell>
                <CustomTableCell>{item.saldo_pendiente}</CustomTableCell>
                <CustomTableCell>{item.fecha_vencimiento}</CustomTableCell>
                <CustomTableCell>{item.porcentaje_copropiedad}</CustomTableCell>
                <CustomTableCell>{item.nombre_copropietario}</CustomTableCell>
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
