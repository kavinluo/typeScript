全局配置
方案一： 安装包 ts-node  全局安装
编译跑在node
同时依赖 安装tslib 和@types/node
执行 ts-node xxx.ts

方案二：webpack编译
顾名思义就是依靠webpack来帮我们打包编译
 mkdir webpack-TS
 cd webpack-TS 
 init
 touch webpack.config.js
 tsc --init // 必须的 不然打包会报错
 cd webpack.config 配置打包工具
 安装依赖 
 yarn add webpack webpack-cli -D
 yarn ts-loader typescript -D
 webpack-dev-server // 作为服务启动
 html-webpack-plugin // 作为HTML模板合并使用




 