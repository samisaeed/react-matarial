import React, {useEffect, useState} from "react";
import {DataGrid} from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';

const DynamicTable = ({GetHeadCells, dataSource, Delete, onEdit}) => {

    const [rowIdS, setRowIdS] = useState([]);

    useEffect(() => {
    }, []);


    const handleChangeRowsPerPage = (prams) => {
        if (prams.rowIds.length > 0) {
            setRowIdS(prams.rowIds);
        } else {
            setRowIdS([]);
        }
    };

    const onDelete = () => {
        if (rowIdS.length > 0) {
            Delete(rowIdS);
        }
    };
    const onEditChange = () => {
        if (rowIdS.length > 1) {
            console.log('Please Select 1 row');
        } else {
            if(dataSource) {
                dataSource.map( res => {
                    if(res.id === +rowIdS[0] ) {
                        onEdit(res);
                    }
                })
            }
        }
    };

    return (
        <div>
            <div className="btn_main">
                <ButtonGroup color="secondary" aria-label="outlined secondary button group">
                    <Button onClick={onEditChange}><EditIcon/></Button>
                    <Button onClick={onDelete}><DeleteIcon/></Button>
                    <Button><VisibilityIcon/></Button>
                </ButtonGroup>

            </div>
            <div style={{height: 400, width: '100%'}}>
                <DataGrid
                    rows={dataSource} columns={GetHeadCells}
                    checkboxSelection
                    disableColumnMenu={true}
                    // hideFooterPagination={true }
                    pageSize={5}
                    onPageChange={(params) => {
                        console.log(params);
                    }}
                    onSelectionChange={handleChangeRowsPerPage}
                />
            </div>
        </div>
    )
};

export default DynamicTable;
