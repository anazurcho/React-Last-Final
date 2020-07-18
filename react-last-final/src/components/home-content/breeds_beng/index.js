import React, {useEffect, useState, useContext} from "react";
import ServiceContext from "../../service-context/service-context";
import classes from "../../../style/index.css"

const BreedsBeng = () => {
    const Service = useContext(ServiceContext);
    const [data, setData] = useState([])
    const [metaData, setMetaData] = useState([])

    useEffect( () => {
        Service.getBreedBeng()
            .then( response => {
                setData(response.data[0]);
                console.log(response);
                setMetaData(response.data[0].breeds[0])
                // console.log(response.data[0].breeds[0])
            });
    }, [] );

// მთელი ინფორმაცია არ წამოვიღე უბრალოდ copy-paste იქნებოდა

    return (
        <div>
            <div className={classes['App']}>
                <img className={classes['image']}  src={data.url} alt="url" />
                <p className="text-danger">{metaData.name}</p>
                <div className="jumbotron">
                    <p className="text-danger">{metaData.name}</p>
                    <p>cfa_url - {metaData.cfa_url}</p> 
                    <p>vetstreet_url - {metaData.vetstreet_url}</p> 
                    <p>temperament - {metaData.temperament}</p> 
                    <p>origin - {metaData.origin}</p> 
                    <p>country_codes - {metaData.country_codes}</p> 
                    <p className="text-danger">description {metaData.description}</p> 
                    <p className="text-info"> life_span {metaData.life_span}</p> 
                    <p className="text-info"> adaptability {metaData.adaptability}</p> 
                </div>
            </div>
        </div>
    );
}

export default BreedsBeng;
