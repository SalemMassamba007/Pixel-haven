let Name="blessed"
let surname="manana"

function fullName(str, str2){
    console.log(`${str.charAt(0).toUpperCase(0)}${str.slice(1)} ${str2.charAt(0).toUpperCase(0)}${str2.slice(1)}`)
}

fullName(Name, surname)


console.log(Name[0].toUpperCase(0)+Name.slice(1)+" "+surname[0].toUpperCase(0)+surname.slice(1))

