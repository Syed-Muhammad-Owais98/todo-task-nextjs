import React from "react";
import Link from "next/link";
import data from "../../data/itemList.json";

const Listing = () => {
  return (
    <div className="p-4 bg-gray-100 h-full ">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Items List</h1>
      <div className="flex flex-wrap items-center justify-start">
        {data.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 p-2">
            <Link href={`/todo/${item.id}`}>
              <h4 className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <div className="p-5">
                  <h2 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h2>
                  <h4 className="text-gray-600">{item.description}</h4>
                  <span
                    className={`text-sm ${
                      item.status === "Complete"
                        ? "text-green-500"
                        : item.status === "Incomplete"
                        ? "text-red-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
