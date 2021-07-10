// //LENGHT
// var str1 = "Hello"
// var str2 = `world`
// var str3 = 'Hello world'
// var str4 = new String("A string OBJECT") //object için new şart

// console.log(typeof str1);
// console.log(typeof str2);
// console.log(typeof str3);
// console.log(typeof str4);
// console.log(str4);

// console.log("hello merhaba".length);
// console.log(str3.length);
// console.log(str4.length);
// console.log(str1.length);

// //CONCAT
// var s1 = "Hello";
// var s2 = "World";
// var s3 = s1.concat(s2);
// console.log(s1);
// console.log(s2);
// console.log(s3);
// console.log(s1.concat(s2));
// console.log(s1+` `+s2);

// //CHARAT
// var a = "primitive.\nlerin properti veya metodu olmaz."
// console.log(a.charAt(0));
// console.log(a[0]);
// console.log(a);
// console.log("Harry".charAt(3));
// console.log(a.charAt(a.length-1));

// //İNCLUDES
// var str = "lorem ıpsum is simply dummy text of the printing and type setting industyr"
// console.log(str.includes("simply"));  //true
// console.log(str.includes("Simply"));   //false
// console.log("harry".includes("rr"));   //true

// //İNDEXOF
// var str = "lorem ıpsum is simply dummy text of the simply printing and type setting industry"
// var n = str.indexOf("simply");  //15nci karakter
// var n = str.indexOf("x");  //30ncu karakter
// var n = str.indexOf("xx");  //-1 yani yok
// console.log(n);

// //LASTİNDEXOF
// var str = "lorem ıpsum is simply dummy text of the simply printing and type setting industry"
// console.log(str.lastIndexOf("t"));
// console.log(str.length);

// //REPLACE Sadece ilk gördüğünü değiştirir!
// var first = "Hello Harry"
// var second = first.replace("Hello", "Hi")
// console.log(first);
// console.log(second);

// //SEARCH
// var s =
//   'lorem ıpsum is simply dummy text of the simply printing and type setting industry';
// console.log(s.search('Dummy'));
// console.log(s.search(/Dummy/i)); //CASE SENSİTİVE KALDIR
// console.log(s.search('dummy'));


// //SLİCE
// var str = "lorem ıpsum is simply dummy text of the simply printing and type setting industry"
// console.log(str.slice(0,5));
// console.log(str.slice(6,11));
// console.log(str.slice(12));
// console.log(str.slice(12,-10));

// //SPLİT
// var str = "lorem ıpsum is simply dummy text of the simply printing and type setting industry"
// var arr = str.split(" "); //içerdeki öğeyi siler ordan ayırır
// console.log(arr);

