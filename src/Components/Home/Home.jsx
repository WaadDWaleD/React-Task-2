import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Category from "./Category/Category";
export default function Home() {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const navigate = useNavigate();

    useEffect(() => {
        getProductList();
    }, [selectedCategory]); 

    function getProductList() {
        setLoading(true);
        const url =
            selectedCategory === "All"
                ? "https://www.themealdb.com/api/json/v1/1/search.php?s="
                : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;

        axios
            .get(url)
            .then((res) => {
                setProductList(res.data.meals || []);
            })
            .catch((error) => {
                console.error("Error fetching product data:", error);
                setProductList([]);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <div className="main-content w-10/12 mx-auto my-6">
            <header>
                <h1 className="mainTitle">Learn, Cook, Eat Your Food</h1>
            </header>

        
            <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />  

            {loading ? (
                <div className="loader"></div>
            ) : (
                <div className="main-div ">
                    {productList.map(({ idMeal, strMealThumb, strMeal, strArea }) => (
                        <div key={idMeal} className="item p-2 mb-2 hover:border border-main duration-500 group ">
                            <img src={strMealThumb} className="api-img" alt={strMeal} />
                            <h5 className="text-main">{strMeal}</h5>
                            <div className="main-details">
                                <FontAwesomeIcon icon={faEarthAmericas} className="palnet" />
                                <p>{strArea}</p>
                            </div>
                            <button
                                className="bg-main border border-transparent px-2 text-white "
                                onClick={() => navigate(`/item/${idMeal}`)} 
                            >
                                View Recipe
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}