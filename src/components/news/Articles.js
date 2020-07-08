import React from "react";
import { Articles } from "./data";
import {
    Card,
    CardBody,
    CardText,
} from 'reactstrap';

export const Items = () => {

    return (

        <div>
            {Articles.map((data, key) => {
                return (
                    <div key={key}>
                        {
                            <Card>
                                <a href={data.link} target="_blank" rel="noopener noreferrer"  title="Go to news article" style={{ textDecoration: "none" }}>
                                    <CardBody>
                                        <div className="row">
                                            <div className="small" ><CardText><h6 className="news-header">{data.name} <span className="small muted">(source: {data.provider})</span></h6>
                                                {data.content}</CardText>
                                                <div className="small muted ">{data.date}</div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </a>
                            </Card>
                        }
                    </div>
                );
            })}
        </div>
    );
};