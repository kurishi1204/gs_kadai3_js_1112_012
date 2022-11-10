'use strict';

const storage = localStorage;

const table = document.querySelector('table');  //表
const todo = document.getElementById('todo'); //todo
const priority = document.querySelector('select'); //優先度
const deadline = document.querySelector('input[type="date"]'); //日付(締め切り日）
const submit = document.getElementById('submit'); //登録ボタン

//TODO リストの全データを「オブジェクトの配列」としてプログラムで持っておいて、それをストレージに書き出す処理
let list = []; // TODOリストのデータ

document.addEventListener('DOMContentLoaded', () => {
  // 1. ストレージデータ（JSON）の読み込み
  const json = storage.todoList;
  if (json == undefined) { // ストレージデータがない場合は何もしない
    return;
  }

  // 2. JSONをオブジェクトの配列に変換して配列listに代入
  list = JSON.parse(json); 
  console.log(list);

  // 3. 配列listのデータを元にテーブルに要素を追加
  for (const item of list) {
  addItem(item);
  console.log(item);
  }
});

//item内にある情報を表示する処理を繰り返すための処理
const addItem = (item) => {
  const tr = document.createElement('tr'); // tr要素を生成

  // オブジェクトの繰り返しはfor-in文、ループ定数（prop）のプロパティとしてitemを指定。
  for (const prop in item) {
    const td = document.createElement('td'); // td要素を生成

    if (prop == 'done') { // 完了欄の場合の処理
      const checkbox = document.createElement('input'); // 要素生成
      checkbox.type = 'checkbox'; // type属性をcheckboxに
      checkbox.checked = item[prop]; // checked属性を設定
      td.appendChild(checkbox); // td要素の子要素に
      checkbox.addEventListener('change', checkBoxListener);
    } else { //完了欄以外の場合の処理
      td.textContent = item[prop];
    }
    tr.appendChild(td);
  }

  table.append(tr);
};

const checkBoxListener = (ev) => {
  const trList = Array.from(document.getElementsByTagName('tr'));
  const currentTr = ev.currentTarget.parentElement.parentElement;
  const idx = trList.indexOf(currentTr) - 1;
  list[idx].done = ev.currentTarget.checked;
  storage.todoList = JSON.stringify(list);
};

// 登録ボタンを押した際の処理。
submit.addEventListener('click', () => {
  const item = {}; //入力情報を一時保存するためのボックス

  // todoに情報が入っていない場合はダミーtodoと表示
  if (todo.value != '') {todo.value
    item.todo = todo.value;
  } else {
    item.todo = 'ダミーTODO';
  }

  //優先度
  item.priority = priority.value;

  //日付（締め切り日）、入力がない場合は本日を入力
  if (deadline.value != '') {
    item.deadline = deadline.value;
  } else {
    window.alert('期日を入力してください');
    return;
    // 以下、警告を出すのではなく本日の日付を入れる形で代替する場合。
      // const date = new Date(); // 本日の日付情報を取得
      // item.deadline = date.toLocaleDateString().replace(/\//g, '-'); // /ではなく-へ置き換えて表示
  }

  item.done = false;
  console.log(item); // 入力情報の確認

  //フォーム情報のリセット
  todo.value = '';
  priority.value = '普通';
  deadline.value = '';

  addItem(item);

  // ストレージに保存する前に、配列 list に最新 TODO データである item を追加（push）
  list.push(item);
  storage.todoList = JSON.stringify(list);
});

//絞り込み機能の処理
const filterButton = document.createElement('button');
filterButton.textContent = '優先度（高い）で絞り込み';
filterButton.id = 'priority';
const main = document.querySelector('main');
main.appendChild(filterButton);

filterButton.addEventListener('click', () => {
  clearTable(); //テーブル情報をクリアして、該当する優先順位のものに絞って表示する
  for (const item of list) {
    if (item.priority == '高い') {
      addItem(item);
    }
  }
});

const clearTable = () => {
  const trList = Array.from(document.getElementsByTagName('tr'));
  trList.shift();
  for (const tr of trList) {
    tr.remove();
  }
};

const remove = document.createElement('button');
remove.textContent = '完了したTODOを削除する';
remove.id = 'remove';
const br = document.createElement('br');
main.appendChild(br);
main.appendChild(remove);

remove.addEventListener('click', () => {
  clearTable();
  list = list.filter((item) => item.done == false);
  for (const item of list) {
    addItem(item);
  }
  storage.todoList = JSON.stringify(list);
});