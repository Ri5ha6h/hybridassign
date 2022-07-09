import React, { useState } from "react";
import Card from "../components/card";
import { useDispatch, useSelector } from "react-redux";
import { storeQuery } from "../store/actions/query";

const Home = () => {
    const [inp, setInp] = useState("");
    const searchArr = useSelector((state) => state.query.arr);
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col items-center justify-start h-full m-5 md:m-8 lg:m-20">
            <div className="flex flex-col items-center justify-center w-full md:w-2/3 lg:w-1/2">
                <form
                    className="relative flex justify-center w-full mt-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                        dispatch(storeQuery(e.target[0].value));
                        // setInp("");
                    }}
                >
                    <input placeholder="Query..." className="w-[90%] rounded-sm border-2 text-lg border-gray-200 pl-3 py-2" type="text" value={inp} onChange={(e) => setInp(e.target.value)} />
                    <button type="submit" className="absolute h-12 px-4 text-white bg-blue-500 rounded-tr-sm rounded-br-sm hover:bg-blue-400 right-4">
                        Search
                    </button>
                </form>
                {searchArr.length > 0 && <div className="w-full p-5 mt-10">
                    <div className="border-b border-gray-300">
                        <span>Recent Search Results..</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mt-4">
                        {searchArr.length > 0 &&
                            searchArr.map((item, ind) => (
                                    <button
                                      className="px-4 py-1 capitalize bg-yellow-400 rounded-md hover:bg-yellow-300"
                                        key={ind}
                                        onClick={() => {
                                            dispatch(storeQuery(item));
                                            setInp(item);
                                        }}
                                    >
                                        {item}
                                    </button>
                            ))}
                    </div>
                </div>}
            </div>
            <div className="h-full">
                <Card />
            </div>
        </div>
    );
};

export default Home;
