//    QUESTION#1
var students=[]
students[0]='anas'
students[1]='usman'
students[2]='umar'
students[3]='hamza'
console.log(students)


    //    QUESTION#3
var student=['anas','raza','mesum','hamza']
console.log(student)


     //    QUESTION#4
var number=[1,2,56,82]
console.log(number)


//    QUESTION#5
var boolean=[true,false]
console.log(boolean)

//    QUESTION#6
var mixed=['anas',false,32,undefined]
console.log(mixed)


//    QUESTION#7
var study=['M.Phil','MBBS','B.Com']
console.log(study)


//    QUESTION#8
var stud=['michael','john','tony']
var marks=[230,320,480]
console.log('score of ' + stud[0] + ' is ' +  marks[0] + '. percentage: ' + marks[0]/500*100 + '%' )
console.log('score of ' + stud[1] + ' is ' +  marks[1] + '. percentage: ' + marks[1]/500*100 + '%' )
console.log('score of ' + stud[2] + ' is ' +  marks[2] + '. percentage: ' + marks[2]/500*100 + '%' )



//    QUESTION#9
    
col=[]
col[0]='pink'
col[1]='blue'
col[2]='grey'
col[3]='green'
col[4]='purple'
var color=prompt('enter a color to start')
var color1=prompt('enter a color to end')
var color2=prompt('delete a color from start')
var color3=prompt('delete a color to end')
col.unshift(color)
col.push(color1)
col.shift(color2)
col.pop(color3)
console.log(col)



//    QUESTION#10

var score=[460,210,390,100]
score.sort()
console.log(score)



//    QUESTION#11

var city=['karachi','lahore','multan','quetta','peshawar']
var city1= city.slice(0,3)
console.log(city)
console.log(city1)



//    QUESTION#12
var arr=['This','is','my','cat']
 pet=arr.join(' ')
console.log(pet) 



//    QUESTION#13

var device=['keyboard','monitor','mouse','speaker']
device.shift()
device.shift()
device.shift()
device.shift()
console.log(device)



//    QUESTION#14

var tech=['keyboard','monitor','mouse','speaker']
tech.pop()
tech.pop()
tech.pop()
tech.pop()
console.log(tech)




//    QUESTION#15

var phone=['Apple','Motorola','Samsung','Nokia','Infinix']
document.write(phone)





