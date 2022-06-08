 let Name = "Dalida";
 let age = 18;
 let message = (age >= 18) ?
     () => console.log("Nu ok") :
     () => console.log("harow");

 message(); 
 // 1 
 const Name1 = "Dalida";
 let age1 = 18;
 // 2
 let k = true;
 let = false;
 let b = undefined;
 let priceOfShop = 10000000;
 let string = null;
 // 3
 let Dalida = {
     name: "Dalida",
     age: 18,
     number: 19.5

 };
 console.log(Dalida["name"]);
 console.log(Dalida.age);
 console.log(Dalida.number);
 // // 4
 let arr = new Array();
 let arr1 = new Array();
 arr.push(1);
 arr.push(2);
 arr.push(3);
 arr.push(4);
 arr.push(5);
 arr.push(6);
 arr.splice(0, 1);
 console.log(arr);
 console.log(arr.slice(0, 1))
 console.log(arr.map());
 arr1.push("orange");
 arr1.push("pomidor");
 arr1.push("tykva");
 arr.pop();
 console.log(arr.concat(arr1))

 if ("1" == 1) {
     console.log("false")
 } else {
     console.log("true")
 }
 let p = ("1" == 1) ? true : false;
 let j = ("1" >= 1) ? true : false;
 let m = (1 != 2) ? true : false;


 let array1 = [1, 4, 9, 16];
 array1 = array1.map(x => x + "tyloh");
 console.log(array1)
     // pass a functionto map
 const map1 = arr.map(x => (x + " " + "567"));
 console.log(map1);
 const filter1 = arr.filter(n => n % 2 == 0);
 console.log(map1);
 console.log(filter1)
 let s = "";
 let t = new Array();

 let c = function a(name, ...yerbol) {
     s = name;
     t.push(...yerbol)
 }
 c("12", 4566, "2345", "fdfvbdfif");
 console.log(t)
 console.log(s)
 let h = (a, b) => a + b;

 console.log(h(1, 2));