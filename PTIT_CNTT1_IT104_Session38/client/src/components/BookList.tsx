import type { BookI } from "../interfaces/book.interface";
import BookItem from "./BookItem";
import React from "react";

interface Props {
  books: BookI[];
  onEdit: (b: BookI) => void;
  onDelete: (id: string) => void;
}

const BookList: React.FC<Props> = ({ books, onEdit, onDelete }) => {
  if (books.length === 0) {
    return <div className="text-center text-gray-500 py-8">No books found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {books.map((b) => (
        <BookItem key={b.id} book={b} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BookList;
