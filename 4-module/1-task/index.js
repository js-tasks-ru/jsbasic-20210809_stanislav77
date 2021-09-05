function makeFriendsList(friends) {
  let arrFullNames = friends.map ( item => `${item.firstName} ${item.lastName}`);

  let listHTML = document.createElement('ul');
  document.body.appendChild(listHTML);
  
  arrFullNames.forEach(item => {
      let elemListHTML = document.createElement('li');
      listHTML.appendChild(elemListHTML);
      elemListHTML.textContent = item;
  });

  return listHTML;
}
