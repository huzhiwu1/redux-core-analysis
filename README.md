# 手写 redux

## createStore

返回一个对象：

- dispatch: 分发一个 action

* getState: 返回仓库中的状态

* subscribe: 注册一个监听器，监听器是一个无参函数，当分发一个 action 之后，会运行注册的监听器，该函数会返回一个函数，用于取消监听
