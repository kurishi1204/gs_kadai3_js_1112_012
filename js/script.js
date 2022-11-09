const todoValue = document.getElementById("js-todo-ttl"); //入力欄を取得
const todoRegister = document.getElementById("js-register-btn"); //登録するボタン取得

todoRegister.addEventListener('click', () => {
  const todoList = document.getElementById("js-todo-list"); //未完リストのul取得
  const todo = document.createTextNode(todoValue.value); //入力データを取得
  const litag = document.createElement('li'); //liタグを作る準備
  const ptag = document.createElement('p'); //pタグを作る準備

  //ul>li>p構造を作る
  ptag.appendChild(todo); //pタグの子要素に登録データを挿入
  litag.appendChild(ptag); //liタグの子要素にpタグを挿入
  todoList.appendChild(litag); //ulタグの子要素にliタグを挿入
});

