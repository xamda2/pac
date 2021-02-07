var PROXY_DIRECT = "DIRECT";
var DIRECT = "DIRECT";
var BLACK = "PROXY 127.0.0.1:8021";
var WHITE = PROXY_DIRECT;

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
    if (d(h, "wl.is") || d(h, "weblockapp.com") || n(h, "17.0.0.0", "255.0.0.0")) {
        return PROXY_DIRECT;
    }
    if (b == "com") {
        if (t == "3") {
            if (d(h, "wafmedia3.com") || d(h, "admtpmp123.com")) return BLACK;
        }
        if (t == "2") {
            if (d(h, "aimg.fc2.com") || d(h, "adshost2.com") || d(h, "affiliate.fc2.com")) return BLACK;
        }
        if (t == "4") {
            if (d(h, "admtpmp124.com") || d(h, "clk1004.com")) return BLACK;
        }
        if (t == "a") {
            if (z == "i") {
                if (d(h, "engine.a.redditmedia.com") || d(h, "vdopia.com") || d(h, "wigetmedia.com") || d(h, "amazemobilemedia.com") || d(h, "tremormedia.com") || d(h, "xtendmedia.com") || d(h, "cdn.millennialmedia.com") || d(h, "lfstmedia.com") || d(h, "andomedia.com") || d(h, "conversantmedia.com")) return BLACK;
            } else if (z == "v") {
                if (d(h, "kochava.com") || d(h, "mojiva.com") || d(h, "adelva.com")) return BLACK;
            } else if (d(h, "atemda.com") || d(h, "adtoma.com") || d(h, "atwola.com") || d(h, "bnmla.com") || d(h, "komoona.com") || d(h, "eclkmpsa.com") || d(h, "transpera.com") || d(h, "atedra.com") || d(h, "admeta.com") || d(h, "plista.com") || d(h, "de17a.com") || d(h, "videoplaza.com")) return BLACK;
        }
        if (t == "c") {
            if (z == "i") {
                if (d(h, "cxpublic.com") || d(h, "pubmatic.com") || d(h, "adsymptotic.com")) return BLACK;
            } else if (d(h, "contentabc.com") || d(h, "adztec.com")) return BLACK;
        }
        if (t == "b") {
            if (z == "a") {
                if (d(h, "crosspromo.zeptolab.com") || d(h, "bms.zeptolab.com") || d(h, "asp.animelab.com")) return BLACK;
            } else if (z == "e") {
                if (d(h, "ucweb.com") || d(h, "ox\u002Dd.advanceweb.com") || d(h, "sa.entireweb.com")) return BLACK;
            } else if (z == "o") {
                if (d(h, "admob.com") || d(h, "hot\u002Dmob.com") || d(h, "revmob.com")) return BLACK;
            } else if (d(h, "m2pub.com") || d(h, "tremorhub.com")) return BLACK;
        }
        if (t == "e") {
            if (z == "c") {
                if (d(h, "startappservice.com") || d(h, "valuecommerce.com") || d(h, "adnetworkperformance.com") || d(h, "widespace.com") || d(h, "delivery.trafficforce.com")) return BLACK;
            } else if (z == "g") {
                if (d(h, "bounceexchange.com") || s(u, "*admax*") && d(h, "nexage.com") || d(h, "tradeadexchange.com") || d(h, "startappexchange.com")) return BLACK;
            } else if (z == "n") {
                if (d(h, "admngronline.com") || d(h, "algovid.com") && s(u, "*watchcartoononline*") || d(h, "madsone.com")) return BLACK;
            } else if (z == "s") {
                if (d(h, "clickfuse.com") || d(h, "adinfuse.com") || d(h, "mobilefuse.com") || d(h, "openxenterprise.com") || d(h, "adhese.com") || d(h, "postrelease.com") || d(h, "uauniverse.com") || d(h, "trafficposse.com") || d(h, "cxense.com")) return BLACK;
            } else if (z == "v") {
                if (d(h, "adsnative.com") || d(h, "quantserve.com") || d(h, "swrve.com") || d(h, "inner\u002Dactive.com") || d(h, "pushnative.com") || d(h, "advertserve.com") || d(h, "redirectnative.com")) return BLACK;
            } else if (d(h, "delivery.brokerbabe.com") || d(h, "adotube.com") || d(h, "amobee.com") || d(h, "adblade.com") || d(h, "lockerdome.com") || d(h, "ad4game.com") || d(h, "vungle.com") || d(h, "greystripe.com") || d(h, "omniture.com") || d(h, "awempire.com") || d(h, "pubdirecte.com")) return BLACK;
        }
        if (t == "d") {
            if (z == "a") {
                if (d(h, "brucelead.com") || d(h, "opt.ximad.com") || d(h, "restartad.com") || d(h, "mediamixad.com") || d(h, "dotandad.com") || d(h, "sbs\u002Dad.com") || d(h, "bead\u002Dad.com")) return BLACK;
            } else if (d(h, "adspeed.com") || d(h, "mgid.com") || d(h, "innovid.com") || d(h, "360yield.com") || d(h, "appflood.com") || d(h, "unityads.unity3d.com") || d(h, "untd.com")) return BLACK;
        }
        if (t == "g") {
            if (z == "n") {
                if (d(h, "bnserving.com") || d(h, "billytesting.com") || d(h, "flashtalking.com") || d(h, "cold\u002Dcold\u002Dfreezing.com") || d(h, "mobileapptracking.com") || d(h, "advertising.com") || d(h, "integral\u002Dmarketing.com")) return BLACK;
            } else if (d(h, "mathtag.com") || d(h, "trafmag.com")) return BLACK;
        }
        if (t == "i") {
            if (z == "b") {
                if (d(h, "zumobi.com") || d(h, "inmobi.com") || d(h, "bebi.com")) return BLACK;
            } else if (d(h, "insightexpressai.com") || d(h, "cdn.media.amp.avai.com") || d(h, "upsight\u002Dapi.com") || d(h, "mobusi.com") || d(h, "dotomi.com")) return BLACK;
        }
        if (t == "h") {
            if (z == "c") {
                if (d(h, "scorecardresearch.com") || d(h, "clmbtech.com") || d(h, "adinch.com") || d(h, "aimatch.com") || d(h, "adnotch.com")) return BLACK;
            } else if (z == "s") {
                if (d(h, "europacash.com") || d(h, "airpush.com") || d(h, "adcash.com")) return BLACK;
            } else if (d(h, "adbooth.com") || d(h, "sharethrough.com")) return BLACK;
        }
        if (t == "k") {
            if (d(h, "iconpeak.com") || d(h, "ackak.com") || d(h, "exoclick.com") || d(h, "openclick.com") || d(h, "adapi.addealsnetwork.com") || d(h, "adzerk.com") || s(u, "*get_ad.php*") && d(h, "tapatalk.com")) return BLACK;
        }
        if (t == "m") {
            if (z == "e") {
                if (d(h, "dra.amazon\u002Dadsystem.com") || d(h, "s.amazon\u002Dadsystem.com") || d(h, "api.unthem.com") || d(h, "aax\u002Deu.amazon\u002Dadsystem.com") || d(h, "aax\u002Dus\u002Deast.amazon\u002Dadsystem.com") || d(h, "c.amazon\u002Dadsystem.com") || d(h, "ir\u002Dna.amazon\u002Dadsystem.com") || d(h, "aax\u002Dus\u002Dpdx.amazon\u002Dadsystem.com") || d(h, "aax.amazon\u002Dadsystem.com")) return BLACK;
            } else if (d(h, "redtram.com") || d(h, "epom.com") || d(h, "sessionm.com") || d(h, "ad131m.com") || d(h, "ad120m.com") || d(h, "crittercism.com") || d(h, "ad132m.com") || d(h, "gumgum.com") || d(h, "adnium.com") || d(h, "mdotm.com") || d(h, "ad127m.com") || d(h, "adcel.vrvm.com") || d(h, "adform.com") || d(h, "castplatform.com")) return BLACK;
        }
        if (t == "l") {
            if (z == "a") {
                if (d(h, "appodeal.com") || d(h, "ad.prismamediadigital.com") || d(h, "exponential.com") || d(h, "adversal.com")) return BLACK;
            } else if (z == "l") {
                if (d(h, "btrll.com") || d(h, "adroll.com") || d(h, "misterbell.com") || d(h, "brightroll.com")) return BLACK;
            } else if (d(h, "mixpanel.com") || d(h, "padsdel.com") || d(h, "liverail.com") || d(h, "adwhirl.com") || d(h, "projectwonderful.com")) return BLACK;
        }
        if (t == "o") {
            if (z == "e") {
                if (d(h, "criteo.com") || d(h, "veeseo.com") || d(h, "wbdds.jeuxvideo.com")) return BLACK;
            } else if (z == "o") {
                if (d(h, "adserver.yahoo.com") || d(h, "analytics.yahoo.com") || d(h, "ads.yahoo.com") || d(h, "gemini.yahoo.com") || d(h, "beap\u002Dbc.yahoo.com") || d(h, "m.yap.yahoo.com") || d(h, "soundwave.mobile.yahoo.com")) return BLACK;
            } else if (d(h, "globaltraffico.com") || d(h, "sekindo.com") || d(h, "zedo.com") || d(h, "chango.com") || d(h, "yieldmo.com") || d(h, "smaato.com")) return BLACK;
        }
        if (t == "n") {
            if (z == "r") {
                if (d(h, "ziiporn.com") || d(h, "turn.com") || d(h, "mtburn.com")) return BLACK;
            } else if (z == "d") {
                if (d(h, "eacdn.com") || d(h, "c.jsrdn.com") || d(h, "akncdn.com") || d(h, "cb\u002Dcdn.com") || d(h, "inmobicdn.com")) return BLACK;
            } else if (z == "o") {
                if (d(h, "amazonaws.com") && s(u, "*/adversion*") || d(h, "adition.com") || d(h, "mopub.com") && !s(u, "*filmon*") || d(h, "tribalfusion.com") || d(h, "trackimpression.com") || d(h, "nspmotion.com") || d(h, "adfalcon.com") || d(h, "performancehorizon.com") || d(h, "clkmon.com")) return BLACK;
            } else if (d(h, "applovin.com") || d(h, "playhaven.com")) return BLACK;
        }
        if (t == "p") {
            if (z == "a") {
                if (d(h, "a.jumptap.com") || d(h, "heyzap.com") || d(h, "appserver\u002Dap.com")) return BLACK;
            } else if (z == "p") {
                if (d(h, "testflightapp.com") || d(h, "startapp.com") || d(h, "user\u002Dagent\u002Dtracker.herokuapp.com")) return BLACK;
            } else if (d(h, "urbanairship.com") || d(h, "rtbpop.com") || d(h, "adtop.com")) return BLACK;
        }
        if (t == "s") {
            if (z == "c") {
                if (d(h, "medialytics.com") || d(h, "crashlytics.com") || d(h, "localytics.com") || !s(u, "*/ga.js") && !s(u, "*/analytics.js") && d(h, "google\u002Danalytics.com")) return BLACK;
            } else if (z == "d") {
                if (d(h, "marsads.com") || d(h, "buysellads.com") || d(h, "moatads.com") || d(h, "1phads.com") || d(h, "ketads.com") || d(h, "mng\u002Dads.com") || d(h, "onclkds.com") || d(h, "juicyads.com") || d(h, "bcfads.com") || d(h, "beaverads.com") || d(h, "exoticads.com") || d(h, "mobile.aws.weather.com") && s(u, "*/ads.json") || d(h, "hotwords.com") || d(h, "zestads.com") || d(h, "carbonads.com") || d(h, "openvideoads.com") || d(h, "pflexads.com") || d(h, "tapjoyads.com") || d(h, "youtube.com") && s(u, "*/_get_ads*") || d(h, "appads.com") || d(h, "mads.com") || d(h, "propellerads.com") || d(h, "mellowads.com") || d(h, "medyanetads.com")) return BLACK;
            } else if (z == "k") {
                if (d(h, "mobtrks.com") || d(h, "keywordblocks.com") || d(h, "terraclicks.com") || d(h, "ecpmrocks.com") || d(h, "yumenetworks.com") || d(h, "infolinks.com") || d(h, "ox\u002Dd.majorgeeks.com") || d(h, "mobytrks.com") || d(h, "adtaxinetworks.com") || d(h, "hkg1.aastocks.com")) return BLACK;
            } else if (z == "t") {
                if (d(h, "adacts.com") || d(h, "medialets.com") || d(h, "bbelements.com")) return BLACK;
            } else if (d(h, "admeasures.com") || d(h, "addthis.com") && !d(h, "s7.addthis.com") || d(h, "clkdeals.com") || d(h, "otherlevels.com") || d(h, "propellerpops.com") || d(h, "traffpartners.com") || !s(u, "*.gif*") && d(h, "mpnrs.com") || d(h, "ligatus.com") || d(h, "traffichaus.com") || d(h, "ad\u002Dsys.com") || d(h, "serving\u002Dsys.com") || d(h, "adnxs.com") || d(h, "drnxs.com")) return BLACK;
        }
        if (t == "r") {
            if (z == "a") {
                if (d(h, "adgear.com") || d(h, "apsalar.com") || d(h, "cpmstar.com")) return BLACK;
            } else if (z == "e") {
                if (d(h, "kixer.com") || d(h, "yieldmanager.com") || d(h, "eyewonder.com") || d(h, "mob\u002Dserver.com") || d(h, "adkeeper.com") || d(h, "appsflyer.com") || d(h, "ad\u002Dcenter.com") || d(h, "fyber.com") || d(h, "smartadserver.com") || d(h, "wwwpromoter.com") || d(h, "statcounter.com") || !s(u, "*/click*") && !s(u, "*itunesredir*") && d(h, "tradedoubler.com") || d(h, "sitemeter.com") || d(h, "liveadexchanger.com") || d(h, "bidvertiser.com") || d(h, "applifier.com")) return BLACK;
            } else if (z == "o") {
                if (d(h, "image.click.livedoor.com") || d(h, "exelator.com") || d(h, "adtailor.com")) return BLACK;
            } else if (d(h, "ad\u002Dstir.com") || d(h, "clickmngr.com")) return BLACK;
        }
        if (t == "u") {
            if (!d(h, "media.sailthru.com") && d(h, "sailthru.com") || d(h, "leadzu.com")) return BLACK;
        }
        if (t == "t") {
            if (z == "f") {
                if (d(h, "igpiphone.gameloft.com") || d(h, "ingameads.gameloft.com") || d(h, "201205igp.gameloft.com") || d(h, "igp06.gameloft.com") || d(h, "578756.gameloft.com") || d(h, "cdn.applift.com")) return BLACK;
            } else if (z == "n") {
                if (d(h, "adsinstant.com") || d(h, "revcontent.com") || d(h, "quantcount.com") || d(h, "liveintent.com")) return BLACK;
            } else if (d(h, "chartbeat.com") || d(h, "rubiconproject.com") || d(h, "adsmarket.com") || d(h, "questionmarket.com") || d(h, "appsdt.com") || d(h, "lijit.com") || d(h, "mobiright.com") || d(h, "atdmt.com") || d(h, "leadbolt.com") || !s(u, "*configure*") && d(h, "adtilt.com") || d(h, "avocarrot.com") || d(h, "georiot.com") || d(h, "apprupt.com") || d(h, "admost.com") || d(h, "chartboost.com") || d(h, "reklamport.com") || d(h, "adexprt.com") || d(h, "scanscout.com") || d(h, "intellitxt.com") || d(h, "appnext.com")) return BLACK;
        }
        if (t == "w") {
            if (d(h, "adnow.com") || d(h, "bannerflow.com")) return BLACK;
        }
        if (t == "v") {
            if (d(h, "onclasrv.com") || d(h, "n208adserv.com") || d(h, "directrev.com") || d(h, "clkrev.com") || d(h, "tom.itv.com")) return BLACK;
        }
        if (t == "y") {
            if (z == "l") {
                if (d(h, "parsely.com") || d(h, "adsupply.com") || d(h, "4dsply.com") || d(h, "adtaily.com")) return BLACK;
            } else if (z == "r") {
                if (d(h, "mobiletheory.com") || d(h, "ads.flurry.com") || d(h, "flurry.com")) return BLACK;
            } else if (d(h, "sponsorpay.com") || d(h, "doubleverify.com") || d(h, "trafficjunky.com") || d(h, "tapjoy.com") || d(h, "adcolony.com")) return BLACK;
        }
        if (t == "x") {
            if (d(h, "atlassbx.com") || d(h, "mediaplex.com") || d(h, "adpdx.com") || d(h, "mobclix.com") || d(h, "mobfox.com") || d(h, "servedbyopenx.com") || d(h, "openx.com") || d(h, "adk2x.com")) return BLACK;
        }
        if (t == "z") {
            if (d(h, "adbuddiz.com") || d(h, "zestadz.com") || d(h, "altrooz.com")) return BLACK;
        }
        if (d(h, "ximad.com") && s(u, "*/ad3/*") || d(h, "movi11.com") || d(h, "wafmedia5.com") || d(h, "admtpmp127.com")) return BLACK;
    } else if (b == "net") {
        if (t == "a") {
            if (d(h, "adorika.net") || d(h, "clickterra.net") || d(h, "chitika.net")) return BLACK;
        }
        if (t == "e") {
            if (d(h, "redintelligence.net") || d(h, "accesstrade.net") || d(h, "mobilefuse.net") || d(h, "adglare.net") || d(h, "yen.appsfire.net") || d(h, "trafficgate.net") || d(h, "adverserve.net") || d(h, "api.pubnative.net")) return BLACK;
        }
        if (t == "d") {
            if (!d(h, "heise.nuggad.net") && d(h, "nuggad.net") || d(h, "rnmd.net") || d(h, "content\u002Dad.net")) return BLACK;
        }
        if (t == "k") {
            if (d(h, "fastclick.net") || d(h, "connect.decknetwork.net") || d(h, "adzerk.net")) return BLACK;
        }
        if (t == "m") {
            if (d(h, "adform.net") || d(h, "adverticum.net") || d(h, "alea.adam.daum.net")) return BLACK;
        }
        if (t == "o") {
            if (d(h, "reporo.net") || d(h, "criteo.net") || d(h, "adsmogo.net") || d(h, "smaato.net")) return BLACK;
        }
        if (t == "n") {
            if (d(h, "mxcdn.net") || d(h, "inmobicdn.net") || d(h, "s1.2mdn.net") || d(h, "popadscdn.net")) return BLACK;
        }
        if (t == "p") {
            if (d(h, "adformdsp.net") || d(h, "lduhtrp.net") || d(h, "smartclip.net")) return BLACK;
        }
        if (t == "s") {
            if (z == "d") {
                if (d(h, "everestads.net") || d(h, "onclickads.net") || d(h, "carbonads.net") || d(h, "popads.net") || d(h, "msads.net")) return BLACK;
            } else if (d(h, "playnomics.net") || d(h, "vaxadserver.azurewebsites.net") || d(h, "zucks.net") || d(h, "leadboltapps.net") || d(h, "intermarkets.net")) return BLACK;
        }
        if (t == "r") {
            if (z == "e") {
                if (d(h, "admaster.net") || d(h, "adjuggler.net") || d(h, "readserver.net") || d(h, "admixer.net")) return BLACK;
            } else if (d(h, "adadvisor.net") || d(h, "adsfactor.net")) return BLACK;
        }
        if (t == "t") {
            if (d(h, "adsrocket.net") || d(h, "leadbolt.net") || d(h, "kontagent.net")) return BLACK;
        }
        if (t == "y") {
            if (d(h, "buzzcity.net") || d(h, "trafficjunky.net")) return BLACK;
        }
        if (d(h, "2o7.net") || d(h, "cubecdn.net") && s(u, "*/js/loader_*") || d(h, "adfonic.net") || d(h, "yieldlab.net") || d(h, "e\u002Dplanning.net") || d(h, "revsci.net") || d(h, "adbooth.net") || d(h, "crwdcntrl.net") || d(h, "uimserv.net") || d(h, "openx.net")) return BLACK;
    } else if (b == "kr") {
        if (t == "o") {
            if (z == "c") {
                if (d(h, "theprimead.co.kr") || d(h, "adapi.about.co.kr") || d(h, "cauly.co.kr") || d(h, "tpmn.co.kr") || d(h, "realssp.co.kr") || d(h, "ad.about.co.kr") || d(h, "imadrep.co.kr") || d(h, "ad4989.co.kr")) return BLACK;
            }
        }
    } else if (b == "de") {
        if (t == "l") {
            if (d(h, "damoh.spiegel.de") || d(h, "brightroll.de")) return BLACK;
        }
        if (d(h, "madvertise.de") || d(h, "movad.de") || d(h, "adtech.de") || d(h, "de.ioam.de") || d(h, "advolution.de") || d(h, "adspirit.de")) return BLACK;
    } else if (b == "org") {
        if (t == "s") {
            if (d(h, "4chan\u002Dads.org") || d(h, "openvideoads.org")) return BLACK;
        }
        if (t == "r") {
            if (d(h, "adsrvr.org") || d(h, "zwaar.org")) return BLACK;
        }
        if (d(h, "adtrace.org") || d(h, "ketchapp.org") || d(h, "info.a7.org") || d(h, "openx.org")) return BLACK;
    } else if (b == "mobi") {
        if (d(h, "yoc.mobi") || d(h, "inner\u002Dactive.mobi") || d(h, "adsmogo.mobi") || d(h, "mocean.mobi") || d(h, "mydas.mobi") || d(h, "adver.mobi") || d(h, "vserv.mobi")) return BLACK;
    } else if (b == "pl") {
        if (d(h, "adtaily.pl") || d(h, "hit.gemius.pl") || d(h, "i\u002Dstream.pl") || d(h, "adidm.idmnet.pl") || d(h, "adocean.pl")) return BLACK;
    } else if (b == "vn") {
        if (d(h, "vcmedia.vn") || d(h, "ad360.vn") || d(h, "eclick.vn") || d(h, "adtimaserver.vn") || d(h, "admicro.vn")) return BLACK;
    } else if (b == "info") {
        if (d(h, "print.theyeshivaworld.info") || d(h, "spotscenered.info") || d(h, "appshelf.ttpsdk.info") || d(h, "houseads.ttpsdk.info")) return BLACK;
    } else if (b == "jp") {
        if (d(h, "advg.jp") || d(h, "openxmarket.jp") || d(h, "openx.jp") || d(h, "zucks.co.jp")) return BLACK;
    } else if (b == "tv") {
        if (d(h, "teads.tv") || d(h, "adap.tv") || d(h, "videoplaza.tv")) return BLACK;
    } else if (b == "se") {
        if (d(h, "adrotator.se") || d(h, "fusion.dn.se") || d(h, "emediate.se")) return BLACK;
    } else if (b == "io") {
        if (d(h, "firstimpression.io") || d(h, "liftoff.io")) return BLACK;
    } else if (b == "asia") {
        if (d(h, "snapmobile.asia") || d(h, "pixels.asia")) return BLACK;
    } else if (b == "biz") {
        if (d(h, "trafficfactory.biz") || d(h, "rarenok.biz")) return BLACK;
    } else if (b == "cz") {
        if (d(h, "imedia.cz")) return BLACK;
    } else if (b == "il") {
        if (d(h, "fus.yad2.co.il")) return BLACK;
    } else if (b == "co") {
        if (d(h, "adk2.co")) return BLACK;
    } else if (b == "tw") {
        if (d(h, "adspending01.bwnet.com.tw")) return BLACK;
    } else if (b == "me") {
        if (d(h, "kiip.me")) return BLACK;
    } else if (b == "cn") {
        if (d(h, "admaster.com.cn")) return BLACK;
    } else if (b == "ru") {
        if (d(h, "admobi.ru")) return BLACK;
    } else if (b == "dk") {
        if (d(h, "emediate.dk")) return BLACK;
    } else if (b == "fr") {
        if (d(h, "ad2play.ftv\u002Dpublicite.fr")) return BLACK;
    } else if (b == "si") {
        if (d(h, "interseek.si")) return BLACK;
    } else if (b == "gr") {
        if (d(h, "adman.gr")) return BLACK;
    } else if (b == "li") {
        if (d(h, "kau.li")) return BLACK;
    } else if (b == "ua") {
        if (d(h, "holder.com.ua")) return BLACK;
    } else if (b == "ad") {
        if (d(h, "content.ad")) return BLACK;
    } else if (b == "at") {
        if (d(h, "ad.adworx.at")) return BLACK;
    } else if (b == "space") {
        if (d(h, "dlski.space")) return BLACK;
    } else if (b == "eu") {
        if (d(h, "emediate.eu")) return BLACK;
    } else if (b == "es") {
        if (d(h, "kimia.es")) return BLACK;
    } else if (b == "uk") {
        if (d(h, "ad\u002Dx.co.uk")) return BLACK;
    }
    if ((s(u, "*/adview/*")) || (s(u, "*/adclick/*")) || ((!s(u, "*/aclk*") && !s(u, "*/pagead/conversion.js") && d(h, "googleadservices.com")) || (!s(u, "*/gpt_mobile.js") && d(h, "googletagservices.com") && !s(u, "*/gpt.js")) || (d(h, "pagead2.googlesyndication.com") || d(h, "pagead1.googlesyndication.com") || d(h, "pagead3.googlesyndication.com") || d(h, "pagead.googlesyndication.com"))) || (!d(h, "economist.com") && !d(h, "apple.com") && !d(h, "fwmrm.net") && s(u, "*/ad/*") && !d(h, "mzstatic.com")) || (s(u, "*/banner/*")) || s(h, "*.cj.com") || ((d(h, "connect.facebook.net") && s(u, "*/sdk/xfbml.ad.*")) || (s(u, "*/plugins/ad.*") && d(h, "facebook.com"))) || ((s(u, "*/*adname*") && d(h, "flipboard.com")) || (s(u, "*/flare/*") && d(h, "flipboard.com")) || (d(h, "flipboard.com") && s(u, "*/flipmag/admanager.js")) || (d(h, "flipboard.com") && s(u, "*/adcreative/*"))) || ((s(u, "*mobile.php*") && d(h, "pub.sapo.pt")) || (s(u, "*vast.php*") && d(h, "pub.sapo.pt"))) || (s(u, "*/adz/*")) || (n(h, "89.207.18.1", "255.255.255.0")) || (s(h, "*.manage.com") || s(h, "manage.com")) || (s(u, "*/adserv/*")) || s(u, "*/openx/www/delivery/*.php*") || (d(h, "doubleciick.net") || d(h, "doubleclick.net") || d(h, "pubads.g.doubleclick.net") || d(h, "googleads.g.doubleclick.net") || (!s(u, "*ythome*") && !d(h, "stats.g.doubleclick.net") && d(h, "doubleclick.net") && !d(h, "static.doubleclick.net"))) || (s(h, "banners.*") || s(h, "*.banners.*")) || s(h, "inmobisdk*.akamaihd.net") || ((s(u, "*/delivery/*") && d(h, "supersonicads.com")) || (s(u, "*supersonicads*.akamaihd.net/*")) || (d(h, "ultraadserver.com") && s(u, "*/api*")) || (d(h, "ssacdn.com"))) || (!d(h, "apple.com") && s(u, "*/adserver/*") && !d(h, "mzstatic.com")) || (s(u, "*/adasset/*")) || (s(h, "*.adsrv.*") || s(h, "adsrv.*")) || s(h, "media.net") || (s(h, "ad.*") || s(h, "*.ad.*")) || (s(h, "adx.*") || s(h, "*.adx.*")) || (d(h, "h2.msn.com") || d(h, "rad.msn.com") || (s(u, "*/adsadclient*") && d(h, "msn.com")) || d(h, "stjjp.msn.com") || d(h, "udc.msn.com")) || (s(h, "*.adasset.*") || s(h, "adasset.*")) || (!d(h, "lightsource.ca") && s(u, "*/banners/*")) || (s(h, "*.advertorial.*") || s(h, "advertorial.*")) || s(u, "*/interstitiel/interstitiel.xml*") || (s(u, "*/adserve/*")) || ((d(h, "graph.facebook.com") && s(u, "*/network_ads")) || (s(u, "*/network_ads*") && d(h, "graph.facebook.com")) || (s(u, "*advertise*") && d(h, "graph.facebook.com"))) || s(u, "*/openx/www/images/*") || (!d(h, "otomoto.pl") && !d(h, "apple.com") && !s(h, "*.kijiji.*") && !s(h, "*.olx.*") && !d(h, "watchdisneyxd.go.com") && !d(h, "mzstatic.com") && !d(h, "fortune.com") && !d(h, "ads\u002Dtrk.vidible.tv") && s(u, "*/ads/*") && !s(h, "olx.*") && !d(h, "gumtree.com")) || (s(h, "adz.*") || s(h, "*.adz.*")) || (s(h, "*.adview.*") || s(h, "adview.*")) || (s(h, "viewad.*") || s(h, "*.viewad.*")) || (s(h, "*.adclick.*") || s(h, "adclick.*")) || ((s(h, "adserver.*") && !d(h, "adtechus.com")) || s(h, "*.adserver.*")) || (s(h, "*.adresult.*") || s(h, "adresult.*")) || (s(u, "*/adx/*")) || (s(u, "*/viewad/*")) || (s(h, "*.adv.*") || s(h, "adv.*")) || s(h, "cj.com") || (s(h, "adserv.*") || s(h, "*.adserv.*")) || (s(u, "*/adv/*")) || (s(h, "*.advert.*") || s(h, "advert.*")) || ((!s(u, "*goalmobileapp*") && d(h, "taboola.com")) || d(h, "taboolasyndication.com")) || (s(u, "*/adresult/*")) || (s(u, "*speednetwor*.com/*xbanner.*") || s(u, "*speednetwor*.com/*xpopup.*") || s(u, "*speednetwor*.com*smart.js") || s(u, "*speednetwor*.com*adclickurl*")) || (s(h, "*.ad\u002Dtraffic.*") || s(h, "ad\u002Dtraffic.*")) || ((s(h, "ads.*") && !d(h, "radioactive.sg") && !d(h, "foxnews.com")) || s(h, "*.ads.*")) || s(u, "*/openx/www/api/v*/*.php*") || (s(h, "*.adserve.*") || s(h, "adserve.*")) || ((d(h, "amazonaws.com") && s(u, "*admarvel*")) || d(h, "admarvel.com")) || (s(h, "*.adverts.*") || s(h, "adverts.*")) || (s(u, "*/advertorial/*")) || (s(u, "*/adverts/*")) || s(h, "*.media.net") || (s(u, "*/advert/*") && !d(h, "autotrader.co.uk")) || (s(u, "*/ad\u002Dtraffic/*")) || s(h, "m*.2mdn.net") || (s(h, "banner.*") || s(h, "*.banner.*"))) return BLACK;
    if ((d(h, "yahoo.com") || s(u, "*://crashlytics.com/*") || d(h, "wzrkt.com"))) {
        return BLACK;
    }
    if (d(h, "adtechus.com")) return "PROXY 216.58.209.78:80";
    if (d(h, "fwmrm.net")) return "PROXY 216.58.209.78:80";
    return PROXY_DIRECT;
}
