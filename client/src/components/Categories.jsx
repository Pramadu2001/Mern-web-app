 import { categories } from "../data";
import "../styles/Categories.scss"
import { Link } from "react-router-dom";


// ... (import statements)

const Categories = () => {
  return (
    <div className="categories">
      <h1>Explore Top Categories</h1>
      <p>
        Discover our extensive selection of holiday accommodations designed to suit every kind of traveler. Immerse yourself in the essence of local culture, relish the familiar comforts of home, and forge indelible memories in the destination of your dreams.
      </p>

      <div className="categories_list">
        {categories?.slice(1, 7).map((category) => (
          <Link to={`/properties/category/${category.label}`} key={category.label}>
            <div className="category">
              <img src={category.img} alt={category.label} />
              <div className="overlay"></div>
              <div className="category_text">
                <div className="category_text_icon">{category.icon}</div>
                <p>{category.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
