const itemsRef = document.querySelectorAll('.item');

console.log(`В списке ${itemsRef.length} категории.`);


itemsRef.forEach(item => {
    const titleRef = item.querySelector('h2').textContent;
    const subItemRef = item.querySelectorAll('li').length;

    console.log(`Категория: ${titleRef} \nКоличество элементов: ${subItemRef}`)
})
