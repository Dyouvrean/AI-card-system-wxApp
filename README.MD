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
* use button of top-bar to control the left side menu
  * wxs can not access the data field of Page
  * can not use wxs and js together 
  * rewrite the code from wxs file to `index.js`
  * child component pass value to parent 
    * triggle event 
     * `<Top-bar showButton="{{true}}" bind:toggleMenu="toggleDrawer"></Top-bar>` means  bind event listener on Top-bar with an event "toggleMenu",when `toggleMenu`happens, call `toggleDrawer` in parent component
     * in parent component,declare `toggleDrawer`,can get data from chlid through `event`
     * For child component,send event to parent component `this.triggerEvent('toggleMenu')`
     * [reference](https://cloud.tencent.com/developer/article/1744959)
* Chat interface with alternating user and system messages.
  * Alternating User and System Messages
    * The `data` object in `index.js` defines messages with a `sender` property (`user` or `system`) and `text` content.
      *  Data in `index.js
      ```javascript
          Page({
            data: {
              messages: [
                { id: 1, sender: 'user', text: 'Hello, what is this about?' },
                { id: 2, sender: 'system', text: 'This is an example chat application.' },]}
          });
          ```
    * Using `wx:for` in WXML, messages are dynamically rendered from the `messages` array.
    * Conditional CSS styling ensures different alignment for user and system messages:
      - `message.user` aligns the icon to the **left** of the text.
      - `message.system` aligns the icon to the **right** of the text using the `order` property in Flexbox.
  * System Icons on the Right
    * ``` css
      .message.system .icon {order: 1;} 
      ```







