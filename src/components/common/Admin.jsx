import React, { Component, useState, useEffect } from 'react'
import fire from '../../config/fire'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Redirect } from 'react-router-dom'


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Admin(props) {
    const classes = useStyles();
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const [data, setData] = useState([])
    const [user, setUser] = useState({})

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            console.log(user)
            if(user) {
                setUser({...user});
            }else{
                setUser({user: null});
            }
        });
    }

    useEffect(() => {
        authListener()
        fire
            .database()
            .ref('consignments')
            .once('value')
            .then(snapShot => {
                // console.log(snapShot.val())
                let dt = []
                snapShot.forEach(item => {
                    dt.push({...item.val(), id: item.key})
                })
                setData([...data, ...dt])
            })
    }, [])

  
    if(user){
        console.log(data)
        return (
            <div className="container -mt-5">
                <div className="row mt-5">
                    <div className="col py-5">
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Name</StyledTableCell>
                                    <StyledTableCell align="right">Consignment Size</StyledTableCell>
                                    <StyledTableCell align="right">Pick up Location</StyledTableCell>
                                    <StyledTableCell align="right">Drop off Location</StyledTableCell>
                                    <StyledTableCell align="right">Transaction</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map(row => (
                                    <StyledTableRow key={row.id}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.consignmentSize}</StyledTableCell>
                                        <StyledTableCell align="right">{row.pickUpLocation}</StyledTableCell>
                                        <StyledTableCell align="right">{row.dropOffLocation}</StyledTableCell>
                                        <StyledTableCell align="right">{row.transaction}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>)
        }else{
            return (
                <Redirect to="/login" />
            )
        }
  
}
