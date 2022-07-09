import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = () => {
    const [val, setVal] = useState(null);
    const [loading, setLoading] = useState(false);
    const query = useSelector((state) => state.query.query);
    useEffect(() => {
        try {
            async function fetchMyAPI() {
                if (query === "" || query === null) {
                    return;
                } else {
                    setLoading(true);
                    const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
                    const res = await response.json();
                    setVal(res);
                    setLoading(false);
                }
            }
            fetchMyAPI();
        } catch (e) {
            console.log(e);
        }
    }, [query]);

    return (
        <div className="w-[80%] h-full mx-auto mt-20">
            {loading ? (
                <div className="flex items-center justify-center h-full">loading...</div>
            ) : (
                <div className="flex flex-wrap items-center justify-around gap-4">
                    {" "}
                    {val &&
                        val.hits.map((item, index) => (
                            <Link to={`/item/${item.objectID}`} key={index}>
                                <div className="border border-gray-400 rounded-sm h-36 w-60">
                                    <div className="flex items-center h-10 pl-4 capitalize bg-gray-300 border-b border-gray-300">
                                        <p>{item.author}</p>
                                    </div>
                                    <div className="p-5">
                                        <p className="line-clamp-2">{item.title}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            )}
        </div>
    );
};

export default Card;
