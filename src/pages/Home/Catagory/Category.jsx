import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
  const { id } = useParams();
  const CategoryNews = useLoaderData();
  console.log(CategoryNews);
  return (
    <div>
      {id && <h3>This category News : {CategoryNews.length} </h3>}
      {CategoryNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
