export const required =(value) =>{
    if(value){
        return undefined
    } else{
        return 'Field is required '
    }
}

//ФУНКЦІЯ з замиканням - це функція яка повертває іншу функцію і ця інша функція може отримувати доступ до змінних які знаходяться в змінних які знаходяться у функції батька
//тепер з такою функцією при виклику її ми вкажемо значення довжини і нам вернеться унікальна функція з своєю унікальною довжиною
export const maxLengthCreator = (maxLength) => (value) =>{
    if(value.length > maxLength ) return `Max length is ${maxLength} symbols` 
    return undefined
}

