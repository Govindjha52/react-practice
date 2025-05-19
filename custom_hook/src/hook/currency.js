import { useEffect, useState } from "react";

function UseCurrency(currency) {
    const [data, setdata] = useState({})
    useEffect(() => {

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-03-04/v1/currencies/usd.json`)
            .then((res) => res.json())
            .then((res) => setdata(res[currency]))
            // console.log(data)
    }, [currency])
    console.log(data);
    return data;
}

export default UseCurrency;