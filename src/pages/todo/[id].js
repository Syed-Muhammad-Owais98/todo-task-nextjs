import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import todos from "../../data/itemList.json";

const TodoDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const todo = todos.find((t) => t.id.toString() === id);

  if (!todo) {
    return <p className="text-center">Todo not found!</p>;
  }

  return (
    <div className="p-4 bg-gray-100 h-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Todo Details</h1>
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">{todo.title}</h2>
        <p className="text-gray-800 font-semibold">Description:</p>
        <p className="text-gray-600 mb-4">{todo.description}</p>
        <p className="text-gray-800 font-semibold">Status:</p>
        <p className="text-gray-600 mb-4">{todo.status}</p>
        <p className="text-gray-800 font-semibold">Due Date:</p>
        <p className="text-gray-600 mb-4">{todo.dueDate}</p>
        <p className="text-gray-800 font-semibold">Priority:</p>
        <p className="text-gray-600 mb-4">{todo.priority}</p>
        <p className="text-gray-800 font-semibold">Additional Notes:</p>
        <p className="text-gray-600 mb-4">{todo.notes}</p>
        <Link href="/todo">
          <h4 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 text-center">
            Back to Listing
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default TodoDetails;
