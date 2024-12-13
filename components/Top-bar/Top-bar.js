// components/Top-bar.js
Component({
  options: {
    styleIsolation: 'isolated'
  },
  /**
   * Component properties
   */
  properties: {
    showButton: {
      type: Boolean,
      value: false // 默认值
  }
  },

  /**
   * Component initial data
   */
  data: {
  },

  /**
   * Component methods
   */
  methods: {
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
    },
    onToggleDrawer(){
      this.triggerEvent('toggleMenu'); // 向父组件发送事件
    } 
  }
})