import users from "./users.js"

// ============== Задание 1 ==============
// Получить массив имен всех пользователей (поле name).

const getUserNames = users => {
  // твой код
    const userName = users.map(user => user.name);
    return userName;
};

console.log('Задание 1', getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// ============== Задание 2 ==============
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  // твой код
    const colorFilteredUser = users.filter(user => user.eyeColor === color)
    return colorFilteredUser
};

console.log('Задание 2',getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// ============== Задание 3 ==============
// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
  // твой код
    const genderFiltredUser = users.filter(user => user.gender === gender).map(user => user.name)
    return genderFiltredUser
};

console.log('Задание 3',getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ============== Задание 4 ==============
// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
  // твой код
    const userNoActive = users.filter(user => !user.isActive)
    return userNoActive
};

console.log('Задание 4',getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// ============== Задание 5 ==============
// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
  // твой код
    const UserByEmail = users.find(user => user.email === email);
    return UserByEmail;
};

console.log('Задание 5.1',getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log('Задание 5.2',getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
// ============== Задание 6 ==============
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) => {
  // твой код
    const UserByAge = users.filter(user => user.age >= min && user.age <= max);
    return UserByAge;
};

console.log('Задание 6.1',getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log('Задание 6.2',getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// ============== Задание 7 ==============
// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
  // твой код
    const total = users.reduce((sum, user) => sum += user.balance, 0);
    return total;
};

console.log('Задание 7',calculateTotalBalance(users)); // 20916

// ============== Задание 8 ==============
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  // твой код
    const filteredUser = users
        .filter(user => user.friends.includes(friendName))
        .map(user => user.name);
        
    return filteredUser;
};

console.log('Задание 8.1',getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log('Задание 8.2',getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// ============== Задание 9 ==============
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
const getNamesSortedByFriendsCount = users => {
  // твой код
    const sortedUser = users
        .sort((prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length)
        .map(user => user.name);
    return sortedUser;
};

console.log('Задание 9',getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// ============== Задание 10 ==============
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
const getSortedUniqueSkills = users => {
  // твой код
  
  // вариант 1 через .reduce
    // const allSkills = users
    //     .reduce((acc, user) => { acc.push(...user.skills); return acc }, [])
    //     .filter((item, index, arr) => { return arr.indexOf(item) === index; })
    //     .sort();
  
  // вариант 2 через .flatMap
  const allSkills = users
    .flatMap(user => user.skills)
    .filter((item, index, arr) => { return arr.indexOf(item) === index; })
    .sort();
  
  // вариант 3 через.lastIndexOf с удалением всех дублирующихся значений полностью
  // const allSkills = users
  //   .flatMap(user => user.skills)
  //   .filter((item, _index, arr) => { return arr.indexOf(item) === arr.lastIndexOf(item); })
  //   .sort();
  
    return allSkills;
};

console.log('Задание 10',getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum',
// 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]