const categoriesItems = document.querySelectorAll('#categories .item');
console.log('Number of categories:', categoriesItems.length);

categoriesItems.forEach( item => {
    const itemTitle = item.firstElementChild;
    const itemList = item.lastElementChild.querySelectorAll('li');

    console.log('Category:', itemTitle.textContent);
    console.log('Elements:', itemList.length);
});
