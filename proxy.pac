function s(u, r) {
    return shExpMatch(u, r);
}

function d(h, r) {
    return dnsDomainIs(h, r);
}

function n(h, r, m) {
    return isInNet(h, r, m);
}

function e(u) {
    var h;
    if (u.indexOf("://") > -1) {
        h = u.split('/')[2];
    } else {
        h = u.split('/')[0];
    }
    h = h.split(':')[0];
    var s = h.split('.').reverse();
    return s;
}

function FindProxyForURL(url, host) {
    var u = url.toLowerCase();
    var h = host.toLowerCase();
    var a = e(u);
    var b = a[0];
    var c = a[1];
    var f = c.length;
    var t = c[f - 1];
    var z = c[f - 2];
     if (d(h, "NbxwZk.configtest.wl.is")) {
        return "PROXY 5.9.40.99:80";
    }
    if (n(h, "17.0.0.0", "255.0.0.0")) {
        return "DIRECT";
    }
    
if (d(h, "graph.facebook.com") || 
d(h, "0-24bpautomentes.hu") || 
d(h, "00-gov.cn") || 
d(h, "000.gaysexe.free.fr") || 
d(h, "0007.name") || 
d(h, "000free.us") || 
d(h, "000tristanprod.free.fr") || 
d(h, "0024aaaa.com") || 
d(h, "003store.com") || 
d(h, "zzxhx.com") || 
d(h, "zzyonghao.com") || 
d(h, "zzz.clickbank.net")) {
        return "PROXY 127.0.0.1:8021";
    }
    
return "DIRECT";
}
