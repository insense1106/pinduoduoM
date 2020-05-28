# toString

- toString()函数用于将当前对象以字符串的形式返回。
- 该方法属于 Object 对象，由于所有的对象都"继承"了 Object 的对象实例，因此几乎所有的实例对象都可以使用该方法。

* 所有主流浏览器均支持该函数。

- toString()函数的返回值为 String 类型。返回当前对象的字符串形式。
- JavaScript 的许多内置对象都重写了该函数，以实现更适合自身的功能需要。

# 检测对象类型

- `Object.prototype.toString.call(new Date); // [object Date]`

# 这两个方法一般是交由 JS 去隐式调用，以满足不同的运算情况。

- valueOf()：返回最适合该对象类型的原始值；
- toString(): 将该对象的原始值以字符串形式返回。

# Number

- number.toString(radix=10)
- radix 进制

#

- null 和 undefined 能不能转换为字符串 javascript
