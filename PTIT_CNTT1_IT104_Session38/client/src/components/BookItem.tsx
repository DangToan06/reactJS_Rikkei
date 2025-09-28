import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import React from "react";
import type { BookI } from "../interfaces/book.interface";

interface Props {
  book: BookI;
  onEdit: (b: BookI) => void;
  onDelete: (id: string) => void;
}

const BookItem: React.FC<Props> = ({ book, onEdit, onDelete }) => {
  return (
    <Card className="rounded-xl shadow-sm">
      <CardContent className="flex justify-between items-center">
        <div>
          <Typography variant="h6">{book.title}</Typography>
          <Typography variant="body2" className="text-gray-600">
            {book.author} • {book.year} • {book.category}
          </Typography>
        </div>
        <div className="flex gap-2">
          <IconButton size="small" onClick={() => onEdit(book)}>
            <Edit fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <Delete fontSize="small" onClick={() => onDelete(book.id)} />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookItem;
