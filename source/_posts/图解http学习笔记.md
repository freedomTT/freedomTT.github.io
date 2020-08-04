---
title: 《图解HTTP》学习笔记
date: 2020-07-03
categories:
- 学习笔记
tags: 
- 通信协议
cover: /images/http.jpg
---

浏览器与服务器之间的通信是web开发过程中不可缺少的一部分，读《图解HTTP》一书，作为http学习教程。

##### 1、基本概念：

Web 使用一种名为 HTTP（HyperText Transfer Protocol，超文本传输协议）的协议作为规范，完成从客户端到服务器端等一系列运作流 程。而协议是指规则的约定。可以说，Web 是建立在 HTTP 协议上通 信的。HTTP 通常被译为超文本传输协议，但这种译法并不严谨。严谨的译名应该 为“**超文本转移协议**”。

##### 2、HTTP 的诞生：
最初设想的基本理念是：借助多文档之间相互关联形成的超文本 （HyperText），连成可相互参阅的 WWW（World Wide Web，万维 网）。

   当时提出了三项技术：
   1、把 SGML（Standard Generalized Markup Language，标准通用标记语言）作为页面的文本标 记语言的 HTML（HyperText Markup Language，超文本标记语言）； 
   2、作为文档传递协议的 HTTP 
   3、指定文档所在地址的 URL（Uniform Resource Locator，统一资源定位符）。 
<!-- more -->


##### 3、TCP/IP： 

   1、基本描述：HTTP 是属于TCP/IP内部的一个子集；把与互联网相关联的协议集合起来总称为 TCP/IP。也有说法 认为，TCP/IP 是指 TCP 和 IP 这两种协议。还有一种说法认为，TCP/ IP 是在 IP 协议的通信过程中，使用到的协议族的统称。
   2、分层：
      - 应用层：决定了向用户提供应用服务时通信的活动。如：FTP、DNS
      - 传输层：提供处于网络连接中的两台计算机之间的数据 传输；在传输层有两个性质不同的协议：TCP（Transmission Control Protocol，传输控制协议）和 UDP（User Data Protocol，用户数据报 协议）。
      - 网络层：网络层用来处理在网络上流动的数据包。数据包是网络传输的最小数 据单位。该层规定了通过怎样的路径（所谓的传输路线）到达对方计 算机，并把数据包传送给对方。
      - 链路层：用来处理连接网络的硬件部分。包括控制操作系统、硬件的设备驱 动、NIC（Network Interface Card，网络适配器，即网卡），及光纤等 物理可见部分（还包括连接器等一切传输媒介）。硬件上的范畴均在 链路层的作用范围之内。
   3、 把数据信息包装起来的做法称为封装（encapsulate)，通过封装形成传输流。

##### 4、跟HTTP密切相关的几个协议：

   - IP 协议：作用于网络层；通过使用 ARP 协议凭借 MAC 地址进行通信。
   - TCP 协议 ：作用域传输层；提供可靠的字节流服务；TCP 协议采用了三次握手 （three-way handshaking）策略来保证通信的可靠性。
   -  DNS 服务：作用域应用层；提供域名转换为IP的解析服务；

##### 5、URI和URL：

URI 用字符串标识某一互联网资源，而 URL 表示资源的地点（互联 网上所处的位置）。URL 是 URI 的子集。 

{% img post-images /images/post_http_img/image-20200728135236884.png %}

##### 6、HTTP请求报文、响应报文的构成

{% img post-images /images/post_http_img/image-20200729104949428.png %}

##### 7、HTTP1.1支持keep-alive持久连接：

持久保持TCP连接，中途可以有多次HTTP请求响应。同时也支持管线化，能够同时发送多个请求。

##### 8、常见状态码：

   - 200 OK：表示从客户端发来的请求在服务器端被正常处理了。
   - 204 No Content：该状态码代表服务器接收的请求已成功处理，但在返回的响应报文中 不含实体的主体部分。
   - 206 Partial Content：表示客户端进行了范围请求，而服务器成功执行了这部分的 GET 请求。响应报文中包含由 Content-Range 指定范围的实体内容。 
   - 301 Moved Permanently：永久性重定向。该状态码表示请求的资源已被分配了新的 URI，以后 应使用资源现在所指的 URI。
   - 302 Found：临时性重定向。
   - 303 See Other：该状态码表示由于请求对应的资源存在着另一个 URI，应使用 GET 方法定向获取请求的资源。
   - 304 Not Modified：该状态码表示客户端发送附带条件的请求（带首部： If-Match，If-ModifiedSince，If-None-Match，If-Range，If-Unmodified-Since）时，服务器端允许请求访 问资源，但未满足条件的情况。
   - 307 Temporary Redirect ：临时重定向。
   - 401 Unauthorized：用 户认证失败。返回含有 401 的响应必须包含一个适用于被请求资源的 WWWAuthenticate 首部用以质询（challenge）用户信息。当浏览器初次接收 到 401 响应，会弹出认证用的对话窗口。 
   - 403 Forbidden：该状态码表明对请求资源的访问被服务器拒绝了。
   - 404 Not Found：该状态码表明服务器上无法找到请求的资源。
   - 500 Internal Server Error：该状态码表明服务器端在执行请求时发生了错误。
   - 503 Service Unavailable：该状态码表明服务器暂时处于超负载或正在进行停机维护，现在无法 处理请求。

##### 9、HTTP首部字段分类

###### 通用首部字段（General Header Fields）

   | HTTP1.1首部字段名 | 说明                       | 首部类型     |
   | ----------------- | -------------------------- | ------------ |
   | Cache-Control     | 控制缓存的行为             | 端到端首部   |
   | Connection        | 逐跳首部、连接的管理       | **逐跳首部** |
   | Date              | 创建报文的日期时间         | 端到端首部   |
   | Pragma            | 报文指令                   | 端到端首部   |
   | Trailer           | 报文末端的首部一览         | **逐跳首部** |
   | Transfer-Encoding | 指定报文主体的传输编码方式 | **逐跳首部** |
   | Upgrade           | 升级为其他协议             | **逐跳首部** |
   | Via               | 代理服务器的相关信息       | 端到端首部   |
   | Warning           | 错误通知                   | 端到端首部   |

   

######    请求首部字段（Request Header Fields）


   | HTTP1.1首部字段名   | 说明                                          | 首部类型     |
   | ------------------- | --------------------------------------------- | ------------ |
   | Accept              | 用户代理可处理的媒体类型                      | 端到端首部   |
   | Accept-Charset      | 优先的字符集                                  | 端到端首部   |
   | Accept-Encoding     | 优先的内容编码                                | 端到端首部   |
   | Accept-Language     | 优先的语言（自然语言）                        | 端到端首部   |
   | Authorization       | Web认证信息                                   | 端到端首部   |
   | Expect              | 期待服务器的特定行为                          | 端到端首部   |
   | From                | 用户的电子邮箱地址                            | 端到端首部   |
   | Host                | 请求资源所在服务器                            | 端到端首部   |
   | If-Match            | 比较实体标记（ETag）                          | 端到端首部   |
   | If-Modified-Since   | 比较资源的更新时间                            | 端到端首部   |
   | If-None-Match       | 比较实体标记（与 If-Match 相反）              | 端到端首部   |
   | If-Range            | 资源未更新时发送实体 Byte 的范围请求          | 端到端首部   |
   | If-Unmodified-Since | 比较资源的更新时间（与If-Modified-Since相反） | 端到端首部   |
   | Max-Forwards        | 最大传输逐跳数                                | 端到端首部   |
   | Proxy-Authorization | 代理服务器要求客户端的认证信息                | **逐跳首部** |
   | Range               | 实体的字节范围请求                            | 端到端首部   |
   | Referer             | 对请求中 URI 的原始获取方                     | 端到端首部   |
   | TE                  | 传输编码的优先级                              | **逐跳首部** |
   | User-Agent          | HTTP 客户端程序的信息                         | 端到端首部   |

######    响应首部字段（Response Header Fields）

   | HTTP1.1首部字段名  | 说明                         | 首部类型     |
   | ------------------ | ---------------------------- | ------------ |
   | Accept-Ranges      | 是否接受字节范围请求         | 端到端首部   |
   | Age                | 推算资源创建经过时间         | 端到端首部   |
   | ETag               | 资源的匹配信息               | 端到端首部   |
   | Location           | 令客户端重定向至指定URI      | 端到端首部   |
   | Proxy-Authenticate | 代理服务器对客户端的认证信息 | **逐跳首部** |
   | Retry-After        | 对再次发起请求的时机要求     | 端到端首部   |
   | Server             | HTTP服务器的安装信息         | 端到端首部   |
   | Vary               | 代理服务器缓存的管理信息     | 端到端首部   |
   | WWW-Authenticate   | 服务器对客户端的认证信息     | 端到端首部   |

   

######    实体首部字段（Entity Header Fields）

   | HTTP1.1首部字段名 | 说明                         | 首部类型   |
   | ----------------- | ---------------------------- | ---------- |
   | Allow             | 资源可支持的HTTP方法         | 端到端首部 |
   | Content-Encoding  | 实体主体适用的编码方式       | 端到端首部 |
   | Content-Language  | 实体主体的自然语言           | 端到端首部 |
   | Content-Length    | 实体主体的大小（单位：字节） | 端到端首部 |
   | Content-Location  | 替代对应资源的URI            | 端到端首部 |
   | Content-MD5       | 实体主体的报文摘要           | 端到端首部 |
   | Content-Range     | 实体主体的位置范围           | 端到端首部 |
   | Content-Type      | 实体主体的媒体类型           | 端到端首部 |
   | Expires           | 实体主体过期的日期时间       | 端到端首部 |
   | Last-Modified     | 资源的最后修改日期时间       | 端到端首部 |

   **补充：常用非HTTP1.1首部：Cookie、Set-Cookie 和 Content-Disposition （归纳在 RFC4229 HTTP Header Field Registrations中）**

   **Keep-Alive也是逐跳首部**

   端到端首部（End-to-end Header） ：分在此类别中的首部会转发给请求 / 响应对应的最终接收目标，且必 须保存在由缓存生成的响应中，另外规定它必须被转发。

   逐跳首部（Hop-by-hop Header）：分在此类别中的首部只对单次转发有效，会因通过缓存或代理而不再 转发。HTTP/1.1 和之后版本中，如果要使用 hop-by-hop 首部，需提 供 Connection 首部字段。

### 10、记录几个常用字段

Cookie：服务器接收到的Cookie信息；请求首部字段

set-Cookie：开始状态管理所使用的Cookie信息；响应首部字段 

  | 属性         | 说明                                                         |
  | ------------ | ------------------------------------------------------------ |
  | NAME=VALUE   | 赋予 Cookie 的名称和其值（必需项）                           |
  | expires=DATE | Cookie 的有效期（若不明确指定则默认为浏览器关闭前为止）      |
  | path=PATH    | 将服务器上的文件目录作为Cookie的适用对象（若不指定则默 认为文档所在的文件目录） |
  | domain=域名  | 作为 Cookie 适用对象的域名 （若不指定则默认为创建 Cookie 的服务器的域名） |
  | Secure       | 仅在 HTTPS 安全通信时才会发送 Cookie                         |
  | HttpOnly     | 加以限制，使 Cookie 不能被 JavaScript 脚本访问               |
  

- X-Frame-Options：首部字段 X-Frame-Options 属于 HTTP 响应首部，用于控制网站内容 在其他 Web 网站的 Frame 标签内的显示问题。其主要目的是为了防 止点击劫持（clickjacking）攻击。

- X-XSS-Protection：首部字段 X-XSS-Protection 属于 HTTP 响应首部，它是针对跨站脚本 攻击（XSS）的一种对策，用于控制浏览器 XSS 防护机制的开关。 首部字段 X-XSS-Protection 可指定的字段值如下。

    0 ：将 XSS 过滤设置成无效状态
    
    1 ：将 XSS 过滤设置成有效状态

- DNT：首部字段 DNT 属于 HTTP 请求首部，其中 DNT 是 Do Not Track 的简 称，意为拒绝个人信息被收集，是表示拒绝被精准广告追踪的一种方法。

- P3P：首部字段 P3P 属于 HTTP 相应首部，通过利用 P3P（The Platform for Privacy Preferences，在线隐私偏好平台）技术，可以让 Web 网站上 的个人隐私变成一种仅供程序可理解的形式，以达到保护用户隐私的 目的。

### 11、HTTP 的缺点

- 通信使用明文（不加密），内容可能会被窃听
- TCP/IP 是可能被窃听的网络
- 不验证通信方的身份，因此有可能遭遇伪装、
- 无法证明报文的完整性，所以有可能已遭篡改

### 12、HTTPS：添加了加密及认证机制的 HTTP 称为 HTTPS（HTTP Secure）。

HTTPS 并非是应用层的一种新协议，只是 HTTP 通信接口部分用 SSL（Secure Socket Layer）和 TLS（Transport Layer Security）协议代 替而已。

##### 13、HTTPS 通信步骤：

{% img post-images /images/post_http_img/image-20200803165612842.png %} 

1. 客户端通过发送 Client Hello 报文开始 SSL 通信。报文中包 含客户端支持的 SSL 的指定版本、加密组件（Cipher Suite）列表（所 使用的加密算法及密钥长度等）。

2. 服务器可进行 SSL 通信时，会以 Server Hello 报文作为应答。和客户端一样，在报文中包含 SSL 版本以及加密组件。服务器的 加密组件内容是从接收到的客户端加密组件内筛选出来的。

3. 之后服务器发送 Certificate 报文。报文中包含公开密钥证 书。

4. 最后服务器发送 Server Hello Done 报文通知客户端，最初阶 段的 SSL 握手协商部分结束。

5. SSL 第一次握手结束之后，客户端以 Client Key Exchange 报 文作为回应。报文中包含通信加密中使用的一种被称为 Pre-master secret 的随机密码串。该报文已用步骤 3 中的公开密钥进行加密。 

6. 接着客户端继续发送 Change Cipher Spec 报文。该报文会提 示服务器，在此报文之后的通信会采用 Pre-master secret 密钥加密。 

7. 客户端发送 Finished 报文。该报文包含连接至今全部报文的 整体校验值。这次握手协商是否能够成功，要以服务器是否能够正确 解密该报文作为判定标准。

8. 服务器同样发送 Change Cipher Spec 报文。 

9. 服务器同样发送 Finished 报文。 

10. 服务器和客户端的 Finished 报文交换完毕之后，SSL 连接 就算建立完成。当然，通信会受到 SSL 的保护。从此处开始进行应用 层协议的通信，即发送 HTTP 请求。 

11. 应用层协议通信，即发送 HTTP 响应。

12. 最后由客户端断开连接。断开连接时，发送 close_notify 报 文。上图做了一些省略，这步之后再发送 TCP FIN 报文来关闭与 TCP 的通信。
