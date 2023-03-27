import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Samplearrayobject = () => {
    var pname = [{ name: "Devika", age: 18, place: "Kora              tty" },
    { name: "Mruthul", age: 19, place: "TVM" }]
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Place</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pname.map((value, index) => {
                        return <TableRow>
                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.age}</TableCell>
                            <TableCell>{value.place}</TableCell>
               </TableRow>
                    })}
             </TableBody>
            </Table>
        </TableContainer>
  )
}

export default Samplearrayobject
