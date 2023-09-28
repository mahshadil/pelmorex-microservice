import React from 'react';
import { Info } from '../../types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


const InfoBox = ({ info }: { info: Info }) =>
    <Table>
        <TableBody>
            <TableRow
                key="temperature"
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    Temperature ({'\u00b0'}F)
                </TableCell>
                <TableCell align="right">{info?.temperature}</TableCell>
            </TableRow>
            <TableRow
                key="feelsLike"
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    Feels Like  ({'\u00b0'}F)
                </TableCell>
                <TableCell align="right">{info?.feelsLike}</TableCell>
            </TableRow>
            <TableRow
                key="humidity"
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    Humidity (%)
                </TableCell>
                <TableCell align="right">{info?.relativeHumidity}</TableCell>
            </TableRow>
            <TableRow
                key="pressure"
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    Pressure (hPa)
                </TableCell>
                <TableCell align="right">{info?.pressure?.value}</TableCell>
            </TableRow>
            <TableRow
                key="wind"
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    Wind (KM/H)
                </TableCell>
                <TableCell align="right">{info?.wind?.direction}-{info?.wind?.speed}</TableCell>
            </TableRow>
        </TableBody>
    </Table>


export default InfoBox;




