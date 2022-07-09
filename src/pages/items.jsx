import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Items = () => {
    const [ob, setOb] = useState(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        try {
            async function fetchMyAPI() {
                setLoading(true);
                const response = await fetch(`http://hn.algolia.com/api/v1/items/${id}`);
                const res = await response.json();
                setOb(res);
                setLoading(false);
            }
            fetchMyAPI();
        } catch (e) {
            console.log(e);
        }
    }, [id]);
    return (
        <div className="w-[80%] ">
            {loading ? (
                <div>loading...</div>
            ) : (
                <div className="flex flex-wrap items-center justify-around gap-4">
                    {ob && (
                        <div className="w-40 h-20 text-center text-white bg-gray-400">
                            <p>{ob.author}</p>
                            <div className="mt-5">
                                <p>{ob.title}</p>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Items;
