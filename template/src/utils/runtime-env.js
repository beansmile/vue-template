export const rte = {
  match(reg) {
    const regExp = reg instanceof RegExp ? reg : new RegExp(reg, 'i')
    return regExp.test(navigator.userAgent)
  },

  get isWechat() {
    return this.match('MicroMessenger')
  },

  get isIOS() {
    return !this.match('wechatdevtools') && this.match(/(iPhone|iPad|MacWechat)/i)
  },
}
