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

## deeplyMerge.js
jQuery的$.extend方法只是合并一层的数据，对于第二层的数据，会强制覆盖，而不是我们需要的合并，如下例：

```javascript

	var objA = {name: 'Jacky', show: true, options: { ajax : true}};
	var objB = {age: 12, show: false, options: { url : 'http://www.google.com'}};

	$.extend(objA, objB);
	//上面这个合并语句，我们期待的结果其实应该是：
	{name: 'Jacky', age: 12, show: false, options: { ajax : true, url : 'http://www.google.com'}};
	//但实际上返回的是：
	{name: 'Jacky', age: 12, show: false, options: {url : 'http://www.google.com'}};
	//也就是options里面的ajax没有了，因为jQuery只合并第一层

	//这个时候如果调用以下语句，返回的就是期待的最大集合了
	objA = deeplyMerge(objA, objB);
```

## jquery.isotope.js
实现页面上根据不同条件过滤显示部分列表项，这个组件已经全部完成，只需要写html页面即可，非常方便，而且效果不错。
具体演示可以参见jquery.isotope.html。

## numeral-1.5.3.1.zip
Javascript里用来格式化字符串的，看下来功能还是比较好用的。具体的使用方式请参考：http://numeraljs.com/
  
Numbers

```
	Number	Format	String
	10000	'0,0.0000'	10,000.0000
	10000.23	'0,0'	10,000
	10000.23	'+0,0'	+10,000
	-10000	'0,0.0'	-10,000.0
	10000.1234	'0.000'	10000.123
```

Currency

```
	Number	Format	String
	1000.234	'$0,0.00'	$1,000.23
	1000.2	'0,0[.]00 $'	1,000.20 $
	1001	'$ 0,0[.]00'	$ 1,001
	-1000.234	'($0,0)'	($1,000)
```
## jquery-dateFormat
可以对日期进行格式的组件，具体请参考目录下的README文件
  
## Datejs
另外一个对日期进行扩展的库，同时支持对字符串格式的日期进行解析，得到日期对象。
  
## loading
在Loading目录下有3个页面加载时显示遮罩层的组件，使用上都非常方便。
  
## bootstrap-spinner
基于Bootstrap的数字上下按键功能，比较小巧易用。参见 [bootstrap-spinner.html](bootstrap-spinner.html)
  
## jquery-spinner
完全基于jQuery的数字组件，可以支持上下按键的数字加减。查看使用的方法，请点击 <a href="http://nakupanda.github.io/number-updown/" target="_blank">这里</a>
  


