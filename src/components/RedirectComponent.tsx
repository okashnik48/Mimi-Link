import React, { FC, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import linkService from "../services/link.service";
import { useAppDispatch } from "../store/store";



const RedirectComponent: FC = () => {
    const navigate = useNavigate()
    const { shortUrl } = useParams();
    const dispatch = useAppDispatch()
    useEffect(() =>{
        const uuId = shortUrl?.replace("http://localhost:8080/", "");
        dispatch(linkService.endpoints.getFullLink.initiate(uuId as string)).unwrap().then((uuId) =>{
            window.location.href = uuId;
        }).catch(() =>{
            navigate("/error")
        })
      
    }, [])
    
    return null;
  };
export default RedirectComponent  