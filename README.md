# waterfall-layout
瀑布流布局探索

1. 纯css，使用column-count/column-width。特点：从左到右。基本等高。当没有设置column-width时，容器内每一项宽度等于容器的n（n等于column-count）分之一。如果设置column-width，子项宽度计算方式： `容器宽度/Math.floor(容器宽度/column-width)`。column-width优先级高于column-count。缺点：兼容性；当数据源是一维数组时，渲染列表不太友好（顺序感觉上是错乱的）。