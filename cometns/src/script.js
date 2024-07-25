var name;

function add() {
    const name = document.getElementById("name");
    const messag = document.getElementById("message");
  
    if (name.value && messag.value) {
      let newDiv = document.createElement('div');
      newDiv.className = 'message';
  
      // Создаем копию картинки
      let trashIcon = document.querySelector('.message img').cloneNode(true); // Клонируем картинку
      trashIcon.onclick = function() { del(newDiv); }; // Добавляем обработчик клика
  
      let header = document.createElement('h2');
      header.innerText = `${name.value}:`;
  
      let span = document.createElement('span');
      span.innerText = `${messag.value}`;
  
// Добавляем клонированную картинку
      newDiv.appendChild(header);
      newDiv.appendChild(trashIcon); 
      newDiv.appendChild(span);
  
      document.querySelector('.chat').appendChild(newDiv);
  
      name.value = "";
      messag.value = "";
    } else {
      alert("ПОЖАЛУЙСТА! Выберите NickName\nи\nВведите сообщение!!!");
    }
  }
  
  function del(divToDelete) {
    divToDelete.remove();
  }