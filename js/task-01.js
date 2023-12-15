const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

const getHeadings = categories.forEach(category => {
  const categoryName = category.firstElementChild.textContent;
  const categoryLength = category.lastElementChild.children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryLength}`);
});
