/**
 * 获取查询参数
 * @param name
 * @returns {string}
 */
export const getQueryStringByName = function (name) {
    let result = document.location.search.match(new RegExp('[\?\&]' + name + '=([^\&]+)', 'i'))
    if (result == null || result.length < 1) return ''
    return result[1]
}

export const getSystem = function () {
    var ua = navigator.userAgent.toLowerCase()
    if (ua.match(/iPhone/i) == 'iphone') {
        return 'ios'
    } else if (ua.match(/Android/i) == 'android') {
        return 'android'
    }
}
