import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import React, {useEffect, useState} from "react";
import Paper from '@material-ui/core/Paper';
import makeStyles from "@material-ui/core/styles/makeStyles";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Table from '@material-ui/core/Table';
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";

const DynamicTable = ({GetHeadCells, dataSource}) => {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
    ];

    const [headCell, setHeadSells] = useState({});

    useEffect( () => {
        setHeadSells(GetHeadCells);
    }, []);
const TablePaginationActions = (prams) => {
    console.log('TablePaginationActions',prams);
};
const handleChangeRowsPerPage = (prams) => {
    console.log('handleChangeRowsPerPage', prams);
};

    function handleChangePage(prams) {
        console.log('handleChangePage', prams);
    }

    return (
        <div >
            <div className="sami">
                <ButtonGroup color="secondary" aria-label="outlined secondary button group">
                    <Button><EditIcon /></Button>
                    <Button><DeleteIcon /></Button>
                    <Button><VisibilityIcon/></Button>
                </ButtonGroup>

            </div>
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={dataSource} columns={GetHeadCells}
                checkboxSelection
                disableColumnMenu={true}
                // hideFooterPagination={true }
                pageSize={5}
                onPageChange={(params) => {
                    console.log(params);
                }}
                onSelectionChange={(newSelection) => {
                    console.log('onSelectionChange',newSelection);
                }}
            />
        </div>
        </div>
        )
 };

export default DynamicTable;
