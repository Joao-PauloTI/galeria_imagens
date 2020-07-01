import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import BannerImage from "./BannerImage";

export default function Product({ match }) {
    return (
        <div>
            <BannerImage children={match.params.id}/>
        </div>
    )
}