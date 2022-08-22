const tokenName = '校园防疫'
const tokenKey = 'token_xyfy'
const chavy = init()
const auth_code = $request.body
//console.log(auth_code);
if (auth_code != chavy.getdata(tokenKey) && auth_code) {
  if (chavy.setdata(tokenKey, auth_code)) {
    chavy.msg(`${tokenName}`, '获取auth_code: 成功', '更新时间 '+new Date().toLocaleTimeString(‘cn’,{hour12:false}))
    chavy.log(`[${tokenName}] 获取auth_code: 成功, auth_code: ${auth_code}`)
  }
}else{
  chavy.log(`[${tokenName}] 获取auth_code: 成功, auth_code: ${auth_code}`)
}

function init() {
  isSurge = () => {
    return undefined === this.$httpClient ? false : true
  }
  isQuanX = () => {
    return undefined === this.$task ? false : true
  }
  getdata = (key) => {
    if (isSurge()) return $persistentStore.read(key)
    if (isQuanX()) return $prefs.valueForKey(key)
  }
  setdata = (key, val) => {
    if (isSurge()) return $persistentStore.write(key, val)
    if (isQuanX()) return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle, body) => {
    if (isSurge()) $notification.post(title, subtitle, body)
    if (isQuanX()) $notify(title, subtitle, body)
  }
  log = (message) => console.log(message)
  get = (url, cb) => {
    if (isSurge()) {
      $httpClient.get(url, cb)
    }
    if (isQuanX()) {
      url.method = 'GET'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  post = (url, cb) => {
    if (isSurge()) {
      $httpClient.post(url, cb)
    }
    if (isQuanX()) {
      url.method = 'POST'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}
chavy.done()
