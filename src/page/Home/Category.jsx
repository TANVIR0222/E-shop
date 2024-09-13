import category1 from "../../assets/category-1.jpg";
import category2 from "../../assets/category-2.jpg";
import category3 from "../../assets/category-3.jpg";
import category4 from "../../assets/category-4.jpg";
import { Link } from "react-router-dom";
const Category = () => {
  const category = [
    { name: "Accessories", path: "ccessories", image: category1 },
    { name: "Dress Collecton", path: "dress", image: category2 },
    { name: "Jewellery", path: "jewellery", image: category3 },
    { name: "Cosmetics", path: "cosmetics", image: category4 },
  ];
  return (
    <>
      <div className=" product__grid">
        {category.map((item, index) => (
          <Link key={index} className="categories__card"  to={`categories/${item.path}`} >
            <img className=" text-center rounded-full w-20" src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Category;
