svelte版本是3.4，对应文档:https://v4.svelte.dev/docs/introduction (最新是svelte5，网上文档大部分是这个版本，功能有很大不同)

`.svelte`后缀的文件在编译时会被编译成`js`文件，所以有很多文档说明的功能，适用范围都是`svelte`文件，我们自己定义的`js`文件里需要调用svelte库才能使用这些功能。

svlete里的`<script>`区域里的脚本是会被svelte引擎处理的，有些语法和标准js语法不同，但是标准js语法还是能用的。

响应式，store用`$`存取的时候是响应式的，对于组件会自动更新调用响应式的变量

`getCandidateValues($candidates, $possibleNumberSwitch)`其中任意一个改变都会触发函数。

store采用驼峰命名法，如`userGrid`

注意源代码的坐标`"cell row-start-{cellY} col-start-{cellX}"`，行号是Y值，列号才是X值。

他自己的提示有时候也会找不到解。。。
```
Uncaught Error Error: Max iterations reached. No solution found.
    at recursiveSolve (c:\Users\lante\Desktop\doc\软件工程\sudoku\node_modules\@mattflow\sudoku-solver\index.js:51:11)
```