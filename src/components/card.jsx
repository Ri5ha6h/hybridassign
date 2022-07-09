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
                    const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
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
        <div className="w-[80%]">
            {loading ? (
                <div>loading...</div>
            ) : (
                <div className="flex flex-wrap justify-around items-center gap-4">
                    {" "}
                    {val &&
                        val.hits.map((item, index) => (
                            <div key={index} className="w-40 h-20 text-center text-white bg-gray-400">
                                <p>{item.author}</p>
                                <div className="mt-5">
                                    <a className="p-2 ml-3 bg-green-400" href={item.url} target="_blank">
                                        blog
                                    </a>
                                    <Link to={`/item/${item.objectID}`}>obj</Link>
                                </div>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default Card;
