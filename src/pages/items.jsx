import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {FaUserAlt} from 'react-icons/fa';

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
                console.log(res);
                setOb(res);
                setLoading(false);
            }
            fetchMyAPI();
        } catch (e) {
            console.log(e);
        }
    }, [id]);
    return (
        <div className="w-full md:w-[80%] mx-auto">
            {loading ? (
                <div className="flex items-center justify-center h-full">loading...</div>
            ) : (
                <div className="">
                    {ob && (
                        <div className="px-10">
                          <div className="flex items-center justify-between">
                            <p className="flex items-center text-lg capitalize"> <FaUserAlt className="text-blue-400"/> <span className="ml-3">{ob.author}</span></p>
                            <p className="text-lg">Points: <span className="text-base text-blue-400">{ob.points}</span></p>
                          </div>
                            <div className="mt-5">
                                <p className="text-lg">Title: <span className="text-sm text-bold">{ob.title}</span></p>
                                <a className="text-red-500" href={ob.url} target="_blank">Read Blog</a>
                            </div>
                            <div className="mt-8">
                              <p className="pb-5 border-b border-gray-400">Comments:</p>
                              {ob.children && ob.children.map((item, ind)=> (
                                <div key={ind} className="px-3 mt-4 border border-gray-300">
                                  <div className="flex items-center justify-between border-b border-gray-300">
                                    <p className="text-lg">{item.author}</p>
                                    {item.points && <p className="text-lg">Points: <span className="text-base text-blue-400">{item.points}</span></p>}
                                  </div>
                                  <div className="pt-2 line-clamp-3" dangerouslySetInnerHTML={{__html: item.text}}></div>
                                </div>
                              ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Items;
