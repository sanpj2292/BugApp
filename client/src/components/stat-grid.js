import React from "react";
import { Table,TableBody,TableCell,TableHead, TableRow } from "@material-ui/core";

function StatGrid(props) {
    const {gridData,headers} = {...props};
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
                    return (<TableRow key={row['_id']}>
                        <TableCell>{row['_id']}</TableCell>
                        {headers.map((head,ind) => {
                            return (
                            <TableCell key={row._id+'-cell'+ind}>
                                {row['status_grp'][head] ? row['status_grp'][head]:0}
                            </TableCell>)
                            })
                        }
                    </TableRow>)
                })}
            </TableBody>
        </Table>
    );
}

export default StatGrid;