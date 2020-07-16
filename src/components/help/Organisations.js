import React from "react";
import { Organisations } from "./data";
import {
    Card,
    CardBody,
} from 'reactstrap';

export const Items = () => {

    return (

        <div>
            {Organisations.map((data, key) => {
                return (
                    <div key={key}>
                        {
                            <Card>
                                <a href={data.link} style={{textDecoration:"none"}}>
                                <h6 className="news-header">{data.name}</h6>
                                <div className="card-horizontal">
                                    <div class="img-square-wrapper">
                                        <img className="" style={{ width: "3rem", padding:".15rem" }} src={data.logo} alt="Card" />
                                    </div>
                                    <CardBody>
                                        <p className="card-text" style={{marginTop:"-1rem", fontSize:".75rem"}}>{data.content}</p>
                                    </CardBody>
                                </div>
                                </a>
                            </Card>

                        }
                    </div>
                );
            })}
        </div>
    );
};