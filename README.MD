* press button navigate to the badge info page  
  * need to register app.json page  
    `wx.navigateTo`
* navihate back to the main page
* construst the topbar as component
  * In component, can not use id selector for css
  * For global use, Have to modify json and wxml file for each page
    * register component `usingComponents:{}`
* Make image resize 
  *  `mode="widthFix"`
* left side slide menu
  * wxs  
  * refer to [link](https://www.cnblogs.com/skuld-yi/p/15077427.html)
* update the background color of left side menu
* "The `TopBar` component is shared between the `InfoPage` and the `MainPage`. The left menu button within the `TopBar` is intended to be visible only on the `MainPage` and hidden on the `InfoPage`."
  * set the `properity:showButton`
  * `wx:if ` control visibility
  * `<Top-bar showButton="{{false}}"></Top-bar>` pass to the component with dynamic value. Notice `{{val}}`