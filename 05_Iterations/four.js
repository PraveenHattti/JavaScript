
// for in loop

const myObject={
    js: 'javaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift By Apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["Js", "rb", "py", "java", "cpp"]

for (const key in programming) {
     console.log(programming[key])
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")

for (const key in map) {
    console.log(key)
}
