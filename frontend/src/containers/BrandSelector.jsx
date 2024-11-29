import { useEffect, useState } from "react";


function BrandSelector() {

    const [brands, setBrands] = useState()
    const [companies, setCompanies] = useState()

    async function fetchCompanies() {
        const url = "http://localhost:8000/product/companies/"
        const resp = await fetch(url)
        const json = await resp.json()
        setCompanies(json);
    }

    async function fetchBrands() {
        const url = "http://localhost:8000/product/brands/"
        const resp = await fetch(url)
        const json = await resp.json()
        setBrands(json);
    }

    useEffect(() => {
        fetchCompanies();
        fetchBrands();
    }, [])

    console.log(companies)
    console.log(brands)

    return (
        <div>

        </div>
    )
}

export default BrandSelector