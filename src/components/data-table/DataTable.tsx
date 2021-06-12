import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const DataTable = (props:any) => {
    const classes = useStyles();
    console.log(props.body);
    
    return(
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            props.columns.map((x:any) => {
                                return(
                                <TableCell align={x.align}>{x.label}</TableCell>
                                );
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.body.map((x:any) => {
                            return(
                            <TableRow key={x.name}>
                                <TableCell component="th" scope="row">
                                {x.name}
                                </TableCell>
                                <TableCell>{x.type}</TableCell>
                                <TableCell>{x.base.HP}</TableCell>
                                <TableCell>{x.base.Attack}</TableCell>
                                <TableCell>{x.base.Defense}</TableCell>
                                {/* <TableCell align={x.align}>{x.label}</TableCell> */}
                            </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DataTable