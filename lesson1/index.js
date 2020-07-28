// var fs = require('fs');
// var  a = fs.readFileSync('./data.json',{encoding: 'utf8'});
// console.log(a);
var fs = require('fs');
var readLine = require('readline-sync');
let txt = fs.readFileSync('./data.json', {encoding:'utf8'});
contract = JSON.parse(txt);

function Menu(){
    console.log('1.Thêm danh bạ');
    console.log('2.Sửa danh bạ');
    console.log('3.Xóa danh bạ');
    console.log('4.Tìm kiếm danh bạ');
    console.log('5.xem danh bạ');
}

function showContract(){
    for(var item of contract){
        console.log('Name :'+item.name + '\n' + 'Phone : ' + item.numberPhone);
    }
}
function addContract(){
    let name = readLine.question('Typing Name : ');
    let sdt = readLine.question('typing Phone : ');
    var danhBas = {
        name: name,
        numberPhone: sdt
    }
    contract.push(danhBas);
    var out = JSON.stringify(contract);
    fs.writeFileSync('./data.json',out,{encoding:'utf8'});
}
function editContract(){
    seachContract();
}
function seachContract(){
    var name =  readLine.question('Nhap ten : ');
    for(var item of contract){
        if(item.name.toLowerCase() === name.toLowerCase()){
            console.log(item.name, item.numberPhone);

        }
    }
}
function main(){
Menu();
var menu = readLine.question('Moi chon Menu : ');
switch(menu){
    case '1': addContract();
    break;
    case '2': editContract();
    break;
    case '3': console.clear();
    break;
    case '4': seachContract();
    break;
    case '5': showContract();
    break;
}
}

main();