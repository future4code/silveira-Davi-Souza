import axios from "axios";
import { useEffect, useState } from "react";

export const useRequestData = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);
    
    const getData = () => {
        setIsLoading(true);
        setError(undefined);
        
        axios.get(url)
            .then((res) => {
                setIsLoading(false);
                setData(res.data.trips);
                console.log(res.data.trips)
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
        };

        useEffect(() => {
            getData();
        }, [url]);

  return [data, isLoading, error];

}

export const usePostData = (url, objBody) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const [body, setBody] = useState(objBody);


    const postData = () => {
        setIsLoading(true);
        setError(undefined);
        
        axios.post(url, body)
            .then((res) => {
                setIsLoading(false);
                setData(res.data);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
        };

        useEffect(() => {
            postData();
        }, [url]);

  return [data, isLoading, error];

}