import React from "react";
import { Table,TableBody,TableCell,TableHead, TableRow, TableFooter, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    footTitle:{
        fontWeight: "bold",
        fontSize: '95.5%',
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
                       return <TableCell>{header}</TableCell>
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
                    <TableCell className={classes.footTitle}>
                    Total
                    </TableCell>
                    {Object.keys(totalMap).map(status => <TableCell>{totalMap[status]}</TableCell>)}
                </TableRow>
                <TableRow>
                    <TableCell className={classes.footTitle}>CumulativeSum</TableCell>
                    {cumSumArr(Object.values(totalMap)).map(totCnt => {
                        return <TableCell className={classes.footTitle}>{totCnt}</TableCell>
                    })}
                </TableRow>
            </TableFooter>
        </Table>
    );
}

export default StatGrid;