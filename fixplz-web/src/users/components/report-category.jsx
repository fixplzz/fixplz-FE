import React, { useState } from "react";
import "../asset/styles/template-page.scss";

function ReportCategory() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categoryGroups = [
    ["청소가 필요해요", "수리가 필요해요"],
    ["설치를 건의해요", "이용이 불편해요"],
    ["기타사항"],
  ];

  return (
    <div>
      {categoryGroups.map((categories, groupIndex) => (
        <div key={groupIndex} className="categoryGroup">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={
                selectedCategory === category
                  ? { color: "white", backgroundColor: "#86a789" }
                  : null
              }
              className="reportCategorybtn"
            >
              {category}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ReportCategory;
