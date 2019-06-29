import React from "react";
import { Table,TableBody,TableCell,TableHead, TableRow, TableFooter, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => createStyles({
    cumSum:{
        fontWeight: "bold",
        fontSize: '95.5%',
    },
    total: {
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: '85.5%',
    }
}))
const cumSumArr = (arr) => {

    function cumulativeSum(k1,k2){
        var j = [...k1];
        return [...k1, j.length > 0 ? j[j.length-1]+k2:k2];
    }
    return arr.reduce((b,c) => (cumulativeSum(b,c)),[])
}

function StatGrid(props) {
    const classes = useStyles();
    const {gridData,headers} = {...props};
    let totalMap = headers.reduce((o, key) => ({...o,[key]:0}), {});
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Importance</TableCell>
                    {headers.map(header => {
                       return <TableCell key={header}>{header}</TableCell>
                    })}
                </TableRow>
            </TableHead>
            <TableBody>
                {gridData.map(row => {
                    return (
                    <TableRow key={row['_id']}>
                        <TableCell>{row['_id']}</TableCell>
                        {headers.map((head,ind) => {
                            var value = row['status_grp'][head] ? row['status_grp'][head]:0;
                            totalMap[head] = totalMap[head]+value;
                            return (
                            <TableCell key={row._id+'-cell'+ind}>{value}</TableCell>)
                            })
                        }
                    </TableRow>)
                })}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell className={classes.total}>
                    Total
                    </TableCell>
                    {Object.keys(totalMap).map((status,ind) => (<TableCell 
                        className={classes.total}
                        key={'status-'+status+ind}>{totalMap[status]}</TableCell>))}
                </TableRow>
                <TableRow>
                    <TableCell className={classes.cumSum}>CumulativeSum</TableCell>
                    {cumSumArr(Object.values(totalMap)).map((totCnt,ind) => {
                        return (<TableCell key={'cum-sum-'+totCnt+''+ind} 
                            className={classes.cumSum}>{totCnt}</TableCell>)
                    })}
                </TableRow>
            </TableFooter>
        </Table>
    );
}

export default StatGrid;