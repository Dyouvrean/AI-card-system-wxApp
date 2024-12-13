// index.js
Page({
  data: {
    sideslipMenuArr: ['1', '2', '3', '4', '5', '6', '7'],
    drawerOffset: 0,
    drawerWidth: 150, // Width of the drawer
    isDrawerOpen: false, // Drawer state
  },
  toggleDrawer:function(event){
    const { drawerOffset, drawerWidth } = this.data;
    const isDrawerOpen = drawerOffset === 0;

    this.setData({
      drawerOffset: isDrawerOpen ? drawerWidth : 0,
      isDrawerOpen: !isDrawerOpen
    })
  },

  // Handle touch start
  onTouchStart(event) {
    this.startMark = event.touches[0].pageX;
  },

  // Handle touch move
  onTouchMove(event) {
    const { drawerWidth, isDrawerOpen } = this.data;
    const currentMark = event.touches[0].pageX;
    const offset = currentMark - this.startMark;

    let newOffset;
    if (offset > 0 && !isDrawerOpen) {
      newOffset = Math.min(drawerWidth, offset);
    } else if (offset < 0 && isDrawerOpen) {
      newOffset = Math.max(-drawerWidth, offset - drawerWidth);
    }

    this.setData({
      drawerOffset: newOffset || (isDrawerOpen ? drawerWidth :0),
    });
  },

  // Handle touch end
  onTouchEnd(event) {
    const { drawerWidth } = this.data;
    const offset = event.changedTouches[0].pageX - this.startMark;

    if (offset > drawerWidth * 0.7) {
      this.setData({ drawerOffset: drawerWidth, isDrawerOpen: true });
    } else if (offset < -drawerWidth * 0.7) {
      this.setData({ drawerOffset: 0, isDrawerOpen: false });
    } else {
      this.setData({
        drawerOffset: this.data.isDrawerOpen ? 0 : -drawerWidth,
      });
    }
  },
})
