import React from 'react'
import { Link } from 'react-router-dom';
import "./Card.css"
import Detail from './Detail';
import { useHistory } from "react-router-dom";
var maxLength=165;

function Card(props) {
    let history=useHistory();

    return (
        // <Link to="detail" className="link">
            <div onClick={()=>history.push({pathname:"/detail",state:props})} className="card">
                {/* {console.log(props)} */}
                <img className="picture" src={props.image} alt="" />
                <div className="tags">
                    {props.tags.map((tag)=>
                        <button className="tag-name">{tag}</button>
                    )}
                </div>
                
                <h3 className="title">{props.title}</h3>
                
                <p className="meta">{props.content.substr(0,maxLength)}...</p>
                
                <p className="read-more">Read more</p>
            </div>
        //  </Link>
    )
}

export default Card;