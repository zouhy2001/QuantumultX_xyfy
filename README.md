# QuantumultX_xyfy
本文是在main branch的基础上修改的 使用方法大致一样

**使用auth_code签到 auth_code的有效期为1天 cron后台暴力美学 可以解决长时间卡白页的问题 另一个branch是利用Cookie签到作用好像不大**

QuanX脚本->江西高校支付宝校园防疫打卡 使用方法分为三个Part 如下
  - [Part1 配置QuanX](#part1-配置quanx)
  - [Part2 QuanX获取auth_code](#part2-quanx获取auth_code)
  - [Part3 配置定时任务](#part3-配置定时任务)
## Part1 配置QuanX
引用-资源重写-点击右上角添加新的资源
  - 资源标签随便填 资源路径填 这个 
  - https://raw.githubusercontent.com/zouhy2001/QuantumultX_xyfy/master/QuantumultX_Token.conf
  - 保存启用
<div align=center>
<img src="https://user-images.githubusercontent.com/57806936/185795414-0371e010-c05d-422a-9bb8-a0945680b74b.PNG" width="300px">
</div>

## Part2 QuanX获取auth_code
  - 支付宝进入小程序即可完成auth_code的抓取
  - ~~QuanX日志也能看到 console.log 输出获取到的Cookie JSESSIONID~~
<div align=center>
<img src="https://user-images.githubusercontent.com/57806936/185795953-474ef2c5-3053-450a-828e-f0ee1ac005ba.jpg" width="300px">
</div>

## Part3 配置定时任务
  - iPhone 打开 https://raw.githubusercontent.com/zouhy2001/QuantumultX_xyfy/blob/master/xyfy_token_task_sample.js
  - 复制模板中的内容
  - QuanX APP - 工具&分析-构造HTTP请求-点击右下角新建js脚本
  - 删除其中的内容 粘贴刚刚复制的模板
  - 如实填写好相关参数
  - 保存文件 命名随意但后面要用到(如xyfy_task.js)
    <div align=center>
    <img src="https://user-images.githubusercontent.com/57806936/185796400-c2b0541e-67ff-498b-a2bb-cc268a9bcf5c.png" width="300px">
    </div>
  - 点击右上角小闹钟开启定时任务
  - 点击加号添加计划任务
    <div align=center>
    <img src="https://user-images.githubusercontent.com/57806936/185796529-8dbd0e13-07a0-43a5-9a24-52573d1b8b78.png" width="300px">
    </div>
  - 点击高级
    <div align=center>
    <img src="https://user-images.githubusercontent.com/57806936/185796592-ffe6e044-7be1-4abe-ae17-6730e31c493b.png" width="300px">
    </div>
  - 点击iCloud 找到刚刚保存的文件
  - 配置好 Cron 表达式 (如 0 0 */3 * * * 每三个小时的整点尝试打一次卡 避免高峰主机拒绝连接的问题 即只显示空白页)
  - 配置完毕 请求列表右滑可以调试查看效果
## 感谢
[@chavy](https://github.com/chavyleung)

[@NobyDa](https://github.com/NobyDa)
