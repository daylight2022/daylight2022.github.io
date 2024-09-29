var posts=["2024/09/24/Next-Auth + Prisma，Github OAuth 登录功能详解/","2024/09/27/会员积分系统设计开发/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };