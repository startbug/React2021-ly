## 4.求和案例react-redux的基本使用
(1).明确两个概念
    1)UI组件:不能使用任何redux的api,只负责页面的呈现和交互等等
    2)容器组件:负责和redux通信,将结果交给UI组件
(2).如何创建一个容器组件---靠react-redux的connect函数
    connect(mapStateToProps, mapDispatchToProps)(UI组件)
        -mapStateToProps:映射状态,返回一个对象
        -mapDispatchToProps:映射操作状态的方法,返回值是一个对象
(3).备注1:容器组件中的store是靠props传进去的,而不是在容器中直接引入
(4).备注2:mapDispatchToProps也可以是一个对象

## 5.球和案例react-redux优化
(1).容器组件和UI组件整合一个文件
(2)无需自己给容器组件传递store,给<App/>包裹一个<Provider store={store}>即可
(3).使用react-redux后在不用自己检测redux中状态的变化,容器组件可以自动完成这个工作
(4).mapDispatchToProps可以简写成一个对象
(5).一个组件要和redux打交道要经过那几个步骤?
    1)定义好UI组件---不暴露
    2)引入connect生成一个容器组件,并暴露,写法如下:
        connect(
            state=>({key:value}),    //映射状态
            {key:xxxAction}          //映射操作状态的方法
        )(UI组件)
    3)在UI组件中通过this.props.xxx读取和操作状态

## 6.球和案例react-redux数据共享版
    (1)定义一个Person组件，和Count组件通过redux共享数据
    (2)为Person组件编写：reducer、action，配置constant常量
    (3)重点：Person的reducer和Count的Reducer要使用combineReducers进行合并
        合并后结构是一个对象
    (4)交给store的是总reducer，注意：最后从状态中取出状态的时候，需要注意取到位