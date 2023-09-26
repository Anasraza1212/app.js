//**************** Chapter 21 (Changing Case)**************

                      // QUESTION#1
// round brackets after case are missing

                      // QUESTION#2
var x='anas'
x=x.toLowerCase()

                      // QUESTION#3

 var y='anas'
 y=y.toUpperCase()

                       // QUESTION#4
 var a='anas'
 b=a.toUpperCase()

                       // QUESTION#5
var city=['karachi','peshawar','lahore']
var change=city[0].toUpperCase()

                       // QUESTION#6
var msg='be careful'
alert(msg.toUpperCase())

                       // QUESTION#7
var city=('karachi')
var firstchar=city.slice(0,1).toUpperCase()
var remchar=city.slice(1).toLowerCase()
var complete=firstchar+remchar
console.log(complete)



// *************************Chapter 22 - 25 (Strings)*************************
                              
                              // QUESTION#1
var sameWords='captain'
var change=sameWords.slice(1,3)
console.log(change)

                       // QUESTION#3
var animal='elephant'
var seg=animal.slice(2,6)
console.log(seg)

                     // QUESTION#4
// var value=prompt('write a sentence')
// var num1=value(1)

//                        // QUESTION#5
//  var value=prompt('write a sentence')
//  var num1=value(1)
                       
                        // QUESTION#6

 // index of 'be' is 3

                        // QUESTION#8
var msg='please go'
var index=msg.indexOf('go')
console.log(index)

                        // QUESTION#9
// var message=prompt('enter a msg')
// var mes=message.indexOf()
// if(mes<=12){alert('fulfilled')}

                        // QUESTION#10
var sent='abcde'
var value=sent.charAt(4)

                        // QUESTION#11
 var country='I lives in Pakistan'
 var place=country.charAt(13)

                         // QUESTION#12
var firstname='anas raza hfuihefjhfiubbb'
var res=firstname.slice(-1)

                        // QUESTION#13
var input='your name'
var cha=input.charAt(5)
console.log(cha)

                        // QUESTION#14

var userinput=prompt('enter you live')
if(userinput.charAt(5)==='b'){alert('matched')}

                        // QUESTION#15
var cities='karachi'                       
for(i=1;i<=cities.length;i++){console.log(cities)}   
var value0=cities.slice(0,1) + 'a'
var value1=cities.slice(1,2) + 'a' 
var value2=cities.slice(2,3) + 'a' 
var value3=cities.slice(3,4) + 'a' 
var value4=cities.slice(4,5) + 'a' 
var value5=cities.slice(5,6) + 'a' 
var value6=cities.slice(6,7) + 'a' 

console.log(value0)
console.log(value1)
console.log(value2)
console.log(value3)
console.log(value4)
console.log(value5)
console.log(value6)


                        // QUESTION#16
var str='11213141516171819101'
var newstr=str.replaceAll('1','2')
console.log(newstr)

                        // QUESTION#17
var a = 'zain'.replaceAll("a", "z");
var b = 'ul'.replaceAll("u", "t");
var c = 'abideen'.replaceAll("e", "g");
console.log(a +' '+b+' '+c)


//  ******************Chapter 26 (Rounding Numbers)********************

                          // QUESTION#1

var val=2.6
val=Math.round(2.6)
console.log(val)

                        // QUESTION#2
var origNum=8.6
var roundNum=Math.round(origNum)

                        // QUESTION#3
  var origNum1=6.3
  var roundNum1=Math.round(origNum1)
  console.log(roundNum1)

  
                         // QUESTION#4
var no=0.5
var rounding=Math.floor(no)
console.log(rounding)


// *********************Chapter 27 (Random Numbers)*******************

                         // QUESTION#1
var dig=Math.random()*50
console.log(dig)

                          // QUESTION#2
var dig1=Math.random()*10
var dig2=dig1
console.log(dig2)


// *********************Chapter 28, 29 (Converting Strings)*******************

                         // QUESTION#1
// BY ADDING 'parseInt' OR 'Number' OR '+'

                         // QUESTION#2
var value=Number('123')
console.log(typeof(value))

                         // QUESTION#3
var value1=Number('123.6')
console.log(typeof(value1))

                          // QUESTION#4
//  we can check if a string  is  successfully converted to
//  an integer or decimal in JavaScript before performing the
//  conversion  by 'typeof' tag 

                          // QUESTION#5
var abc=123
var xyz= abc
console.log(typeof xyz.toString())

                          // QUESTION#6
var numbers=3.14
var res=numbers
console.log(typeof res.toString())


// ***************Chapter 30 (Controlling the length of decimals)****************

                         // QUESTION#1
var price=Number(prompt('enter you shirts price'))
var expense=Number( price.toFixed(2))
alert(expense)
console.log(Math.round(expense))

                         // QUESTION#2
var price1=Number(prompt('enter price of your shoes'))
 var price2=price1.toString()
var price3=Number(price2)
var price4=(price1.toFixed(2))
price4=Math.round(price1)
console.log((price4))

                         // QUESTION#3
var input=Number(prompt('enter a value'))
if(input>=5){input.toString(),console.log('its a string')}
if(input<5){console.log('its a number')}

                         // QUESTION#4
var number8=Number(prompt('enter a number'))
secnum=Number(number8.toFixed(2))
alert(secnum)
