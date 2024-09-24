var posts=["2024/09/24/Next-Auth + Prisma，Github OAuth 登录功能详解/","2024/08/19/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };