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
            <div className="flex flex-col items-center justify-center w-full border-2 border-red-300 md:w-2/3 lg:w-1/2 h-28">
               <h3 className="text-left">Type in query</h3>
                <form
                   className=""
                    onSubmit={(e) => {
                        e.preventDefault();
                        dispatch(storeQuery(e.target[0].value));
                        // setInp("");
                    }}
                > 
                    <input placeholder="Search..." className="border-2 border-gray-200 w-60" type="text" value={inp} onChange={(e) => setInp(e.target.value)} />
                    <button type="submit" className="px-4 text-white bg-gray-500">
                        click
                    </button>
                </form>
                <div>{searchArr.length > 0 && searchArr.map((item, ind) => <p key={ind} onClick={()=> {
                  dispatch(storeQuery(item));
                  setInp(item);
                }}>{item}</p>)}</div>
            </div>
            <div>
                <Card />
            </div>
        </div>
    );
};

export default Home;
