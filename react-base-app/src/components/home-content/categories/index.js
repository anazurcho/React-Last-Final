import React, {useState, useContext,useEffect} from "react";
import ServiceContext from "../../service-context/service-context";
import DataTable from "react-data-table-component";
import DataTableExtensions from 'react-data-table-component-extensions';

const Categories = () => {
    const Service = useContext(ServiceContext);
    const [ data, setData ] = useState( [] );
    const [categoriesData, setCategoriesData] = useState( [] );
    const [getData,setGetData] = useState(false);

    const columns = [ 
        {name: 'ID', selector: 'id', sortable: true},
        {name: 'Name', selector: 'name', sortable: true},
    ];
    
    useEffect( () => {
        Service.getCategories()
            .then( response => {
                setData(response.data);
                console.log(response.data)
            });
    }, [] );

    function getCategoriesData(category_id) {
        Service.getCategoriesData(category_id)
            .then( response => {
                setCategoriesData(response.data[0])
                setGetData(true)
            });
    }

     const ExpanableComponent = ({data}) => (
        <>
            {data.id ? (
                <>
                    <button className="btn btn-primary" onClick={() => getCategoriesData(data.id)}>Get Categories Data</button>
                     
                </>
            ) : (
                <span>cant find</span>
            )}
        </>
    );
    const img = (
        <div>
            <img className='image' src={categoriesData.url} alt="url" />
        </div>
    )

    const dataTable = (
        <DataTableExtensions columns={columns} data={data}>
            <DataTable
                highlightOnHover={true}
                noHeader={true}
                pagination={true}
                subHeader={true}
                pointerOnHover={true}
                expandableRows={true}
                expandOnRowClicked={true}
                expandableRowsComponent={<ExpanableComponent />}
            />
        </DataTableExtensions>
    )
    return (
        <div className='App'>
           <p className="text-danger">categories</p>
           {getData ? img : null}
           {dataTable}
        </div>
    );
}

export default Categories;