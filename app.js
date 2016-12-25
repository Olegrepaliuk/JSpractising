console.log('Задание №1');
console.log('Текст задания: Объявить массив 25 строк');
console.log('Вариант: фильмы');

var films = ['Зверополис', 'Доктор Стрэндж', 'Варкрафт',
'Омерзительная восьмерка', 'Форрест Гамп', 'Бен-Гур', 
'Кунг-фу Панда', 'Дэдпул', 'Книга джунглей', 'Выживший', 'В поисках Дори',
'Отряд самоубийц', 'Иллюзия обмана', '5-ая волна', 'Падение Лондона',
'Полицейский из Беверли-Хиллз', 'Нечто', 'Интерстеллар', 'Назад в будущее',
'Матрица', 'Звездные войны: Эпизод 3 - Месть Ситхов', 'Титаник', 'Аватар', 
'Крестный отец', 'Зеленая миля'];
console.log(films);


console.log('Задание №2');
console.log('Текст задания: Отфильтровать');
console.log('Вариант: должно содержать дефис');
var i;
for (i = 0; i < films.length; i++) {
  if (films[i].includes('-')){
	console.log(films[i]);  
  }
    
}




console.log('Задание №3');
console.log('Текст задания: Отсортировать');
console.log('Вариант: по кол-ву слов в названии');


var filmname;
var symbols;
var countw;
function DivideStr(afilm){
	return afilm.split(' ');
}
function CountWordsNum(asymbols) {
	var WordsNum = 0; 
    for	(g = 0; g<asymbols.length;g++) {
	  if (/[а-яА-Я]/.test(   asymbols[g]   )) {
        WordsNum++;
    }
  }
  return WordsNum;
}
function Compare(a,b)
{
	return CountWordsNum(DivideStr(a)) - CountWordsNum(DivideStr(b));
}
films.sort(Compare);
console.log(films);



console.log('Задание №4');
console.log('Текст задания: Для каждого элемента сгенерировать');
console.log('Вариант: массив встречающихся дифтонгов');
console.log('Вариант: массив кодов символов');
var StrCode;
var ArrayCode=[];
for (i=0; i<films.length;i++)
{
  StrCode = '';
  console.log(films[i]);
  for(g=0; g<films[i].length;g++)
  {
	  StrCode = StrCode + (films[i].charCodeAt(g));
  }
  ArrayCode[i] = StrCode; 
  console.log(StrCode);  
}

var c = new Array();
c = films;
console.log("Пусть дифтонги - это слова, в которых есть буква 'я', тогда дифтонги есть в следующих названиях:");
Array.prototype.incrementalSearch = function(s) {
  return this.filter(item => item.indexOf(s) >= 0);
};
console.log(c = c.incrementalSearch('я'));
console.log();





console.log('Задание №5');
console.log('Текст задания: Создать API для работы с массивом');
console.log('Вариант: шифрование и дешифрование');
console.log('Вариант: поиск строк в массиве по подстроке');

function encrypt(input) {
  var output = '';
  for (var i=0; i<input.length; i++) {
    output += String.fromCharCode(input.charCodeAt(i)+1);
  }
  return output;
}

function decrypt(input) {
  var output = '';
  for (var i=0; i<input.length; i++) {
    output += String.fromCharCode(input.charCodeAt(i)-1);
  }
  return output;
}


console.log('Зашифрованный массив');
var films_shifr = films;
for (i=0; i<films.length;i++)
{
  films_shifr[i] = encrypt(films_shifr[i]);
}
console.log(films_shifr);

console.log('Дешифрованный массив');
var films_shifr = films;
for (i=0; i<films.length;i++)
{
  films_shifr[i] = decrypt(films_shifr[i]);
}
console.log(films_shifr);



function search_sub(prefix, text) {
  console.log(prefix + '. Ищем подстроку "' + text + '"');
  for (i=0; i<films.length;i++) {
    if (films[i].toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) >= 0) {
      console.log(films[i]);
    }
  }
  console.log('---');
}


search_sub('1', 'ан');
search_sub('2', 'мат');
search_sub('3', 'да');
search_sub('4', 'би');