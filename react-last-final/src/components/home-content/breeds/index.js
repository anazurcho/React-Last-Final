import React, {useEffect, useState, useContext} from "react";
import ServiceContext from "../../service-context/service-context";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import classes from "../../../style/index.css"

const Breeds = () => {
    const Service = useContext(ServiceContext);
    const [data, setData] = useState([])
    
    const ExpanableComponent = ({data}) => (
        <>
            {data.id ? (
                <>
                    <p className="text-danger">details</p>
                    <p>{data.description}</p>
                    <p>{data.temperament}</p>
                    <p> cfa_url -{data.cfa_url}</p>
                </>
            ) : (
                <span>cant find</span>
            )}
        </>
    );

    const columns = [
        {name: 'id', selector: 'id', sortable: true},
        {name: 'name', selector: 'name', sortable: true},
        {name: 'origin', selector: 'origin', sortable: true},
    ];
    
    useEffect( () => {
        Service.getBreeds()
            .then( response => {
                setData(response.data);
                console.log(response.data)
            });
    }, [] );

    const dataTable = (
        <DataTableExtensions columns={columns} data={data}>
            <DataTable
                defaultSortField = "id"
                highlightOnHover={true}
                noHeader={true}
                pagination={true}
                subHeader={true}
                pointerOnHover={true}
                expandableRows={true}
                defaultSortField = "id"
                expandOnRowClicked={true}
                expandableRowsComponent={<ExpanableComponent />}
            />
        </DataTableExtensions>
    )

    return (
        <div>
            <div className={classes['App']}>
                <p className="text-danger">all Breeds- {data.length}</p>
                {dataTable}
            </div>
        </div>
    );
}

export default Breeds;
