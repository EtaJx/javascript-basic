#### Vuex和单纯的全局对象有以下两点不同：

- Vuex的状态存储是响应式的。当Vue组件从store中读取状态的时候，若store中的状态发生变化，那么相应的组件也会相应地得到高效更新
- 你不能直接改变store中的状态。改变store状态中的唯一途径就是显示的提交(commit) mutaions。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。

#### 组件仍然保有局部状态

使用Vuex并不意味着你需要将所有的状态放入Vuex。虽然更显示和易调试，但是也会使得代码变得冗长和不直观。如果有些状态严格属于单个组件，最好还是做为组件的局部状态。应该根据应用开发需要进行权衡和确定。

#### Mutations

更改Vues的store中的状态的唯一方法是提交mutation。Vuex中的mutations非常类似于事件：每个mutation都有一个字符串的事件类型（type）和一个回调函数（handler）。这个回调函数就是我们实际进行状态更改的地方，并且它会接受state作为第一个参数

#### 一个关于mutation问题的理解

原来以前一直都先入为主了，以为在store中的state是单文件组件的局部state，其实不然，通过commit改变的state，是属于store的state，和单文件组件中的局部state可以说没有任何直接关联，在单文件组件中，通过commit来改变store中的state，然后通过this.$store.state或者是getter函数来获取计算过后的store中的state，然后再来改变单文件组件中的局部state一次来达到一个通信的目的。

```JavaScript
const moduleA = {
    state,// 在store中创建的state
    actions,
    mutations,
    getters
}
```
