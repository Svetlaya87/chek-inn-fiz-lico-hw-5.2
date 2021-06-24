let date = new Date (1899,11,31);
let birthdayDate=new Date();
let currentDate = new Date();
let years=0;
let currDate=[];
let birthDate=[];
let Obj={};
let isCorrect=true;
let sex = 'male';
let dateOfBirth=0; 
let fullYears=0;
let i=0;

let answer = function (arr) {

    let n10 = ( (-1*arr[0]+5*arr[1]+7*arr[2]+9*arr[3]+4*arr[4]+6*arr[5]+10*arr[6]+5*arr[7]+7*arr[8]) %11) %10;

    if (arr.length != 10){
        return 'Не правильно введен ИНН. ИНН состоит из 10 чисел';

    }

    //n10=((-1n1+5n2+7n3+9n4+4n5+6n6+10n7+5n8+7n9) mod 11) mod 10
    else if (arr[9] == n10) {

        let arr2 = [...arr].join('').slice(0,5)*1;
        console.log(arr2);
        birthdayDate = date.setFullYear(date.getFullYear());// получаю год в миллисекундах
        
        arr2=arr2*86400000;// перевожу дни в миллисекунды

        birthdayDate = birthdayDate +arr2;// получаю дату рождения в миллисекундах
        
       
        
        let date2=new Date(birthdayDate);// миллисекунды преобразовываю в объект Дата

        

        let DayMonthYear = function(date){
            
            let day= date.getDate();
            let month=date.getMonth();
            let year = date.getFullYear();

            // более длинный вариант решения
            //xDate.push(day); 
            //xDate.push(month+1);
            //xDate.push(year);
            let xDate=[day, month+1, year]; //в массиве указать переменные

            console.log(xDate);
                    

            return xDate;

        }

        currDate= DayMonthYear(currentDate);

       
        


        birthDate=DayMonthYear(date2);


       if (currDate[1]<birthDate[1]){
           years=currDate[2]-birthDate[2]-1;

       }else{
        years=currDate[2]-birthDate[2];
       }

        console.log(date2);
        console.log(arr);
       // birthdayDateFinal= date2.toString('dd MM yyyy');

        console.log(years);
        console.log(birthDate);
        //console.log(date.getFullYear());
       
        console.log(currDate );

        Obj.dateOfBirth= `${birthDate[2]}-${birthDate[1]}-${birthDate[0]}`;
        Obj.fullYears=years;
        
        Obj.isCorrect=true;

        if (arr[8] %2 == 0 ){

            
            Obj.sex='female';
            
            
            return `${JSON.stringify(Obj, null,' ')}`;
        } else {

            
            Obj.sex='male';
          
            


            return `${JSON.stringify(Obj, null,' ')}`;
        }

    } else {

        Obj.isCorrect=false;
        return  `${JSON.stringify(Obj, null,' ')}`;
    }
}





function chekInnX(inputElem, outputElem) {
    //innX
    let inn = inputElem.value;

    inn = inn.split('');

    function checkNumber( currentValue) {

        
        return !(currentValue === ' ' || typeof currentValue == 'undefined' || currentValue == '-');
    
    }

    inn = inn.filter(checkNumber);
    
    

    Obj.code=inn.join('');
    console.log(Obj);

   
        outputElem.innerText=`${answer(inn)}`;
   

}

//chekInnX(dataInput, Result);

//chekInnX(dataInput2, Result2);





