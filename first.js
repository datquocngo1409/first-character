var string1 = "ABCde";
var string2 = "abcDE";
var reg = /^[A-Z]/;
if(reg.test(string1)) document.writeln("String's first character is uppercase<br>");
else document.writeln("String's first character is not uppercase<br>");
if(reg.test(string2)) document.writeln("String's first character is uppercase<br>");
else document.writeln("String's first character is not uppercase<br>");
