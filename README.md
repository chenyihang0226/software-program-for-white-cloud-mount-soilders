# 这是白云山五壮士的软工项目--数独乐乐

## 环境配置

### Node.js

1. 访问[Node.js官网](https://nodejs.org/zh-cn)
2. 下载安装LTS版本
3. 安装完成后重启命令提示符或 `VS Code`

#### 配置npm依赖

具体在执行过程中遇到缺失什么就安装什么

##### 可能存在的问题

###### PowerShell执行策略限制问题

1. 临时改变会话执行策略

   ```
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   ```
2. 永久改变策略

   ```
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
   ```

###### npm依赖冲突

在配置 `rimraf`等工具过程中出现 `npm`依赖版本冲突，具体是 `svelte-preprocess@4.6.1` 和 `postcss-load-config@3.0.0` 之间的版本不兼容

解决方法（我采用的）：

**降级** `b`

```
npm uninstall postcss-load-config
npm install postcss-load-config@2.1.2 --save-dev
```

### Svelte for VS Code

直接在vscode插件中安装

## 运行

```
npm run dev
```

打开链接即可
