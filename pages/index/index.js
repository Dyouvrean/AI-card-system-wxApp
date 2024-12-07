// index.js
Page({
goInfo(){
  console.log(1)
  wx.navigateTo({
    url: '/pages/badgeInfo/badgeInfo'
  })
} ,
goMain(){
  console.log(2)
  wx.navigateTo({
    url: '/pages/index/index'
  })
} 
})
