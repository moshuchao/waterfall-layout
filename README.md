# waterfall-layout
瀑布流布局探索

1. 纯css，使用column-count/column-width。特点：从左到右。基本等高。当没有设置column-width时，容器内每一项宽度等于容器的n（n等于column-count）分之一。如果设置column-width，子项宽度计算方式： `容器宽度/Math.floor(容器宽度/column-width)`。column-width优先级高于column-count。缺点：兼容性；当数据源是一维数组时，渲染列表不太友好（顺序感觉上是错乱的）。
2. 纯css，使用flexbox。缺点：多加一层dom结构，渲染数据难做，各列之间不一定等高。
3. 使用js定位。以masonry.js为例，需要定义columnWidth（或者在css中定义）。如果内容中包含图片，需待图片加载成功后重新布局（调用`layout()`方法）。.item在有border情况下，需要设置盒模型为`border-box`。