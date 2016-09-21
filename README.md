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