//可以一次取出多层次的json数据
Object.resolve = function(path, obj) {
    return path.split('.').reduce(function(prev, curr) {
        return prev ? prev[curr] : undefined
    }, obj || self)
}

/**
Object.resolve("document.body.style.width")
// or
Object.resolve("style.width", document.body)
// or even use array indexes
// (someObject has been defined in the question)
Object.resolve("part3.0.size", someObject) 
// returns undefined when intermediate properties are not defined:
Object.resolve('properties.that.do.not.exist', {hello:'world'})

*/