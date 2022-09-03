 # QuantumultX_xyfy
 
 <div align=center>
<img src="https://user-images.githubusercontent.com/57806936/188250273-4f02975f-9f9c-4d0f-b9d3-969400313489.png">
</div>

> 打卡最根本的问题就是通过支付宝这个接口登录需要支付宝app内部提供的auth_code用以xyfy服务器认证,但每次获取到的auth_code的有效期只有24小时,打卡的痛点又在于认证服务器的不响应,所以就想着做中间人攻击,每天拿到auth_code让脚本自己去尝试打卡.避免一直卡空白页等待.
 
**使用auth_code签到 auth_code的有效期为24小时 也就是说点一次小程序两天不用管 cron定时暴力美学 可以解决长时间卡白页的问题**
## 运行逻辑
判断今天是否已经使用脚本打卡成功 如未今日未打卡

尝试登录
 
如果登录成功,上传签到数据,记录今天打卡成功,推送通知消息 **如果第一次使用脚本 且已手动打卡则只会在日志记录不推送通知.**
  
<div align=center>
<img src="https://user-images.githubusercontent.com/57806936/187062036-a6bd9d52-addd-4f3d-8bdc-805cb82d48db.PNG" width="300px">
</div>

<div align=center>
<img src="https://user-images.githubusercontent.com/57806936/187062229-8650cb19-3aee-4ec9-9996-b5dc8b939594.PNG" width="300px">
</div>

登录失败,等待一段时间再次尝试重复上述步骤.

判断今天已经使用脚本打卡成功,则跳过尝试,直接结束.

## 更新日志
 2022/08/28
 - 修改了README文档,说明脚本运行逻辑
 
 2022/08/24 
 - fix setdata函数的错误使用的问题
 - 改进了打卡逻辑 避免无脑重复的向服务器发送打卡POST
 
# 正文部分

> 本文是在[main branch](https://github.com/zouhy2001/QuantumultX_xyfy/tree/main)的基础上修改的 使用方法大致一样 main branch是利用Cookie签到 Cookie的有效期在**1个小时**左右作用不大

QuanX脚本->江西高校支付宝校园防疫打卡 使用方法分为三个Part 如下
  - [Part1 配置QuanX](#part1-配置quanx)
  - [Part2 QuanX获取auth_code](#part2-quanx获取auth_code)
  - [Part3 配置定时任务](#part3-配置定时任务)
## Part1 配置QuanX
引用-资源重写-点击右上角添加新的资源
  - 资源标签随便填 资源路径填 这个 
  - https://raw.githubusercontent.com/zouhy2001/QuantumultX_xyfy/master/QuantumultX_Token.conf
  
<div align=center>
<img src="https://user-images.githubusercontent.com/57806936/187061592-98af291c-1d39-40db-ba2d-54328825ec3b.PNG" width="300px">
</div>
  - 保存启用
<div align=center>
<img src="https://user-images.githubusercontent.com/57806936/187061853-a34d5695-2f29-4af4-92fe-52570b2cad94.JPEG" width="300px">
</div>

## Part2 QuanX获取auth_code
  - 支付宝进入小程序即可完成auth_code的抓取
  - 获取完毕就可以退出,每日进入一次获取auth_code就可以
  - 将这个快捷指令添加到桌面,运行可以直接跳转到小程序获取auth_code https://www.icloud.com/shortcuts/0a6058ad85d14b049257060256b8b2c0 
<div align=center>
<img src="https://user-images.githubusercontent.com/57806936/187061602-d26de395-3dd9-4e6c-b0c7-cb78019590b0.JPEG" width="300px">
</div>

## Part3 配置定时任务
  - iPhone 打开 https://raw.githubusercontent.com/zouhy2001/QuantumultX_xyfy/master/xyfy_token_task_sample.js
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
  - 点击iCloud 找到刚刚保存的文件
  - 配置好 Cron 表达式 (如 0 30 * * * *  建议每1个小时的第三十分钟尝试打一次卡 解决高峰期主机拒绝连接的问题 即只显示空白页 晚上12点过服务器认为还是昨天)
    <div align=center>
    <img src="https://user-images.githubusercontent.com/57806936/187061785-0107d1bd-d18c-490b-9a3f-d58265589db4.PNG" width="300px">
    </div>
  - 配置完毕 请求列表右滑可以调试查看效果
## 感谢
[@chavy](https://github.com/chavyleung)

[@NobyDa](https://github.com/NobyDa)
