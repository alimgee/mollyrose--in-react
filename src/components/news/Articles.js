import React, { useState } from "react";
import { Articles } from "./data";
import {
    Card,
    CardBody,
    CardText,
    Collapse,
    Button
} from 'reactstrap';

    

export const Items = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            {Articles.map((data, key) => {
                return (
                    <div key={key}>
                        {
                            <Card>
                                <a href={data.link} target="_blank" rel="noopener noreferrer" title="Go to news article" style={{ textDecoration: "none" }}>
                                    <CardBody>
                                        <div className="row">
                                            <div >
                                                <CardText>
                                                    <p className="news-header">{data.name} </p>
                                                    <p className="news-content">{data.content}</p>
                                                    <span className="small muted">(source: {data.provider})</span>
                                                </CardText>
                                                <div className="small muted ">{data.date}</div>
                                            </div>
                                            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text="Driving awareness of childhood cancer." data-hashtags="ChildhoodCancer" data-related="mollyrosecancer" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                                        </div>
                                    </CardBody>
                                </a>
                            </Card>
                        }
                    </div>
                );
            })}
            <div>
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1.5rem',  padding: '0.5rem 1.5rem 0.5rem  1.5rem' }}>Toggle</Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>
                            Anim pariatur cliche reprehenderit,
                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident.
          </CardBody>
                    </Card>
                </Collapse>
            </div>
        </div>
    );
};