const response = {
  data: {
    id: 1,
    title: "Destructuring in JavaScript",
    author: {
      name: "Dev",
      email: "Dev@gmail.com",
    },
  },
};

const extractData = ({ data }) => {
  const { title, id } = data;
  const { name: authorName, email: authorEmail } = data.author;

  console.log("Title: ", title);
  console.log("Title: ", data.author);
  console.log("AuthorName: ", authorName);
  console.log("AuthorEmail: ", authorEmail);
};

extractData(response);
