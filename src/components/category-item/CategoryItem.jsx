import "./category-item.styles.scss";
import { useNavigate } from "react-router-dom";

const transformText = (text) => {
  const arrStr = text.split(" ");
  text = "";
  for (let str of arrStr) {
    text += str[0].toUpperCase() + str.slice(1) + " ";
  }
  return text;
};
function CategoryItem({ category }) {
  const navigate = useNavigate();
  console.log(category);
  const newName = category.name.replace("-", " ").toLowerCase();
  return (
    <div
      className="category-container"
      onClick={() => navigate(`/category/${category.slug}`)}
    >
      <div className="image-container">
        <img className="image" src={`./${category.slug}.png`} />
      </div>
      <div className="category-body-container">
        <h2>{transformText(category.name.replace("-", " "))}</h2>
      </div>
    </div>
  );
}

export default CategoryItem;
