import React from 'react';
// import Table from 'react-bootstrap/Table';
import {
    Table,
    TableHeader,
    TableCell,
    TableBody,
    TableRow,
    TableFooter,
    TableContainer,
    Badge,
    Avatar,
    Button,
    Pagination,
} from '@windmill/react-ui'

function TableViewer(props) {
    return (
        <TableContainer className="mb-8">
            <Table>
                <TableHeader>
                    
                        <TableRow>
                            {props.data.columns.map((element, index) => {
                                return <TableCell key={index} style={{ "textTransform": "capitalize" }}>{element.label.length > 0 ? element.label : element.name}</TableCell>
                            })}
                        </TableRow>
                    
                </TableHeader>
                <TableBody>
                    
                        {props.data.rows.map((row, index) => {
                            return (
                                <TableRow key={index}>
                                    {row.map((column, index) => <TableCell key={index}>{column}</TableCell>)}
                                </TableRow>);
                        })}
                    
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableViewer;