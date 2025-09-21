import type { IProduct } from "../interfaces/product.interface";

export const products: IProduct[] = [
  {
    id: "1",
    name: "Pizza",
    image:
      "https://imgs.search.brave.com/dIBxYjnlx9VWtlY8gdgoIb98sm_barNYQ8eilvTXjDU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM3/NzM3MjIzNC9waG90/by9waXp6YS13aXRo/LXNhbGFtaS1iZWxs/LXBlcHBlci10b21h/dG9lcy1hbmQtY2hl/ZXNlLXBpY2tsZXMt/YmFjb24tYW5kLXNh/dXNhZ2VzLW9uLWEt/bGlnaHQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUN3Mkds/TFk0NzRzRkxtQm00/SUZzU29TWFY0d0ha/TS11YjY5MWFhRHFM/bHc9",
    description: "Delicious cheese pizza with tomato sauce and toppings.",
    price: 30,
    quantity: 60,
  },
  {
    id: "2",
    name: "Hamburger",
    image:
      "https://imgs.search.brave.com/fkDyLb_z5VbsHQLt0tfkMDgbuLqj0u55kZVcvWE1yGU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9oYW1i/dXJnZXItZnJpZXMt/c2lkZS1wbGF0dGVy/LTM3MDc4MTI3MC5q/cGc",
    description: "Juicy beef burger with fresh vegetables and cheese.",
    price: 15,
    quantity: 60,
  },
  {
    id: "3",
    name: "Bread",
    image:
      "https://imgs.search.brave.com/4fX-MbTZjgHM1lk0I9Tao1QcaE9y81YZLk1_Xs0eIlg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMTg2/ODY0NDk4L3N0b2Nr/LXBob3RvLWJha2Vy/LWhvbGRpbmctdHJh/eS1mcmVzaC1sb2F2/ZXMtYnJlYWQ",
    description: "Freshly baked bread with a crispy crust.",
    price: 20,
    quantity: 60,
  },
  {
    id: "4",
    name: "Cake",
    image:
      "https://imgs.search.brave.com/bzHsZk3DijsSyFslwEpc4EdrAxtj0kXrepfnIOgCuQE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bm90aGluZ2J1bmR0/Y2FrZXMuY29tL21l/ZGlhL2NhdGFsb2cv/cHJvZHVjdC9wL2Qv/cGRwX2hhcHB5ZXZl/cnl0aGluZ2J1bmR0/Y2FrZV9saWZlc3R5/bGVfMS5qcGc_cXVh/bGl0eT04MCZmaXQ9/Ym91bmRzJmhlaWdo/dD0yNTAmd2lkdGg9/MjUw",
    description: "Soft sponge cake with cream and strawberries.",
    price: 10,
    quantity: 60,
  },
  {
    id: "5",
    name: "Pasta",
    image:
      "https://imgs.search.brave.com/THheMcBtsYFQCYKU4WpcVIXNCrTKW9yKo6g911lCZnk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9mdXNpbGxp/LXBhc3RhLXNwaXJh/bC1zcGlyYWxpLXRv/bWF0by0yNjBudy0y/NTYyMTE5ODI5Lmpw/Zw",
    description: "Italian pasta with creamy sauce and parmesan.",
    price: 25,
    quantity: 60,
  },
  {
    id: "6",
    name: "Sushi",
    image:
      "https://imgs.search.brave.com/whvngRt4x-xkHgTLJQjFz7RmrUZPiPHXUNA_3C7YlKY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9hc3NvcnRl/ZC1zdXNoaS1yb2xs/cy1zZWxlY3Rpb24t/ZnJlc2gtMjYwbnct/MjQyNjg1MDU0Ny5q/cGc",
    description: "Assorted sushi rolls with fresh fish and vegetables.",
    price: 40,
    quantity: 60,
  },
];
