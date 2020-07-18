import React, {useEffect, useState, useContext} from "react";
import ServiceContext from "../../service-context/service-context";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import classes from "../../../style/index.css"
import { connect } from "react-redux";

const Images = ({firstName}) => {
    const Service = useContext(ServiceContext);
    const [data, setData] = useState([]);

    function favorite( id ) {
        Service.getFavorite( id, {firstName} )
            .then( response => {
                console.log(id)
                console.log(response)
            } );
    }

    const columns = [ 
        {name: 'id', selector: 'id', sortable: true},
    ];
     const ExpanableComponent = ({data}) => (
        <>
            {data.id ? (
                <>
                    <img className={classes['image']}  src={data.url} alt="url" />
                    <button className="btn btn-primary" onClick={() => favorite(data.id)}>favorite</button>
                    {data.categories ? <p>{data.categories.name}</p> : null}
                </>
            ) : (
                <span>cant find</span>
            )}
        </>
    );

    useEffect( () => {
        Service.getImages()
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
        <div className={classes['App']}>
            <p className="text-danger">{data.length}</p>
            {dataTable}
        </div>
    );
}

const mapStateToProps = ( state ) => {
    return {
        firstName: state.firstName,
    };
}
export default connect( mapStateToProps, null )( Images );