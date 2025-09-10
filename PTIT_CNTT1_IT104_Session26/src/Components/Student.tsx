import React, { useRef } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function Student() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { name } = useParams();
  console.log("Name: ", name);

  const [searchParams, setSearchParams] = useSearchParams();
  const nameP = searchParams.get("name");
  console.log("NameP:", nameP);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ name: inputRef.current?.value || "" });
  };

  return (
    <div>
      Student
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={inputRef} />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}
