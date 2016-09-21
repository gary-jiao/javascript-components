# javascript-components
 一些可能会常用到的javascript小组件，也许只是一个小的方法，收集一下，以免日后需要时再找。有些是网上收集来的创意，有些只是把其他好用的组件收集过来而已。

## object-sort.js
Javascript里自带的有array.sort方法可以对数组进行排序，但对于有些json对象，希望按照key进行排序，这个小函数就提供了这个功能。
目前只有一种默认的排序方式，如果有特殊需求，请自行扩展。

## jquery.livequery.js
默认情况下，jQuery只能判断对文档加载完成之后进行操作，但有些时候，我们可能需要针对某个特殊的Div加载完成之后再进行某些操作，那么此时这个组件就管用了，调用方式也非常简单：
```javascript
$('#divId:visible').livequery(function() {
	//do something after div loaded
});
```

## jquery.serialize-object.js
jQuery自带的form.serialize可以将form拼成查询字符串，或者 serializeArray方法可以将参数拼成数组，但很明显这个数组和我们正常项目里处理的数据结构是不一样的（具体哪里不一样，一试便知），这个组件生成的Json对象就是在一般提交时会使用到的方式。
```javascript
form.serialize     		//结果应该是类似于 username=dd&age=12&date=20120122 这样的格式
form.serializeArray   	//结果应该是类似于  [{name: ‘username', value: 'dd'}, {name: 'age', value: 12}]
form.serializeObject 	//结果应该是： {'username': 'dd', 'age': 12, 'date': ''20120122}   (一般提交应该是需要这种格式吧)
```

