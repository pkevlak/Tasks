const changeName = (arr) => { const arr2 = arr.filter((item) => item.isSubscribed == true);
  arr2.forEach(function(element) {
  console.log(`${element.name}, ваш заказ принят, подробности вашего заказа в письме, которое мы отправили на ${element.email}`);
});
}

const clients = [{
  name: 'Филип Фрай',
  email: 'fray@mail.un',
  isSubscribed: false,
  orders: [ 11700, 1980, 450, 5500 ]
}, {
  name: 'Бендер Сгибатель Родригес',
  email: 'bender.rodriges@rambler.un',
  isSubscribed: true,
  orders: [ 440, 226, 7650, 2990, 70 ]
}, {
  name: 'Доктор Джон Зоидберг',
  email: 'zoidberg-md@list.un',
  isSubscribed: true,
  orders: [ 720 ]
}];
changeName(clients);
