// components/Top-bar.js
Component({
  options: {
    styleIsolation: 'isolated'
  },
  /**
   * Component properties
   */
  properties: {

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
    } 
  }
})