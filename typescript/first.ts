function test(labelledObj: {label: string}) {
    console.log(labelledObj.label)
}

let myObj = {
    size: 10,
    label: "Size 10 Object"
}

test(myObj)
