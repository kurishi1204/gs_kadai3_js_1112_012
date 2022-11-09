const todoValue = document.getElementById("js-todo-ttl"); //入力欄を取得
const todoRegister = document.getElementById("js-register-btn"); //登録するボタン取得
const todoDelete = document.getElementById("js-del-btn");//削除ボタンのid取得
const todoList = document.getElementById("js-todo-list"); //未完リストのul取得（移動してきた）

todoRegister.addEventListener('click', () => {
    const todoList = document.getElementById("js-todo-list"); //未完リストのul取得
    const todo = document.createTextNode(todoValue.value); //入力データを取得
    const litag = document.createElement('li'); //liタグを作る準備
    const ptag = document.createElement('p'); //pタグを作る準備

  //ul>li>p構造を作る
    ptag.appendChild(todo); //pタグの子要素に登録データを挿入
    litag.appendChild(ptag); //liタグの子要素にpタグを挿入
    todoList.appendChild(litag); //ulタグの子要素にliタグを挿入

  //削除機能追加
    delbtn.addEventListener('click', () => {    
    deleteTodo(delbtn);
    });
});

 //ボタンを入れるdiv要素追加
 const btn_box = document.createElement('div'); //divタグの準備
 btn_box.setAttribute('class', 'btn-box'); //class名の指定
 litag.appendChild(btn_box); //liタグの子要素に挿入

 //完了ボタン追加
 const donebtn = document.createElement('button');
 donebtn.setAttribute('id', 'js-done-btn');
 donebtn.innerHTML = '完了';
 btn_box.appendChild(donebtn); //li.appendChildからbtn_box.appendChildに変更

 //削除ボタン追加
 const delbtn = document.createElement('button');
 delbtn.setAttribute('id', 'js-del-btn');
 delbtn.innerHTML = '削除';
 btn_box.appendChild(delbtn); //li.appendChildからbtn_box.appendChildに変更
  
 const deleteTodo = (delbtn) => { //引数に削除ボタンを指定する（空欄だと４行目でエラーが出る）
    const delconfirm = this.confirm('本当に削除しますか？'); //誤って削除するのを防ぐ最終確認
    if (delconfirm === true) { //もし最終確認でOKが押されたら
      const choseTodo = delbtn.closest('li'); //押された削除ボタンから見て1番近いliタグを取得
      todoList.removeChild(choseTodo); //ToDoリストの子要素の内、上記で指定されたliタグを消す
    }
  };