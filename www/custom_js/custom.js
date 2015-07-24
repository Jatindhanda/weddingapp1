$(document).ready(function () {
    var appid = 'c0c7c76d30bd3dcaefc96f40275bdc0a';
//    var appid = 'a1d0c6e83f027327d8461063f4ac58a6'; 
//    var base_url = 'http://localhost/harish/wedding/index.php';
    // var appid = 'd645920e395fedad7bbbed0eca3fe2e0';   
    var base_url = 'http://www.myweddingicon.com';

    var datetimecounter = '';
    $.ajax({
        url: base_url + '/appsget/weddingapp/' + appid,
        type: "GET",
        data: "",
        dataType: 'json',
        success: function (wedresponseData) {
            var groomName = '', brideName = '', groomImg = '', brideImg = '', email = '', invitation = '', gname = '', bname = '', counter = '', inviatedate = '';
            $.each(wedresponseData, function (index, appdata) {
//                 alert(appdata.groom);
//              return false;
                groomName += appdata.groom;

                brideName += appdata.bride;
                groomImg += appdata.groomimage;
                brideImg += appdata.brideimage;
                datetimecounter += appdata.counter;
                // alert(counter);
                gname += appdata.groom;
                bname += appdata.bride;
                invitation += appdata.invitation;
                email += appdata.email;
                inviatedate += appdata.inviatedate;

            });
            var groomImgs = "http://www.myweddingicon.com/uploads/groomimg/" + groomImg;
            var brideImgs = "http://www.myweddingicon.com/uploads/groomimg/" + brideImg;
            $("#groomajax").html(groomName);
            $("#brideajax").html(brideName);
            $("#gajax").html(gname);
            $("#bajax").html(bname);
            $("#invitationajax").html(invitation);
            $("#emailajax").html(email);
            $("span#inviatedate").html(inviatedate);
            $("span#groomimg img").attr('src', groomImgs);
            $("span#brideimg img").attr('src', brideImgs);
            $("#").html(brideImg);
            $("input#counter").val(counter);

        }

    });

    $.ajax({
        url: base_url + '/appsget/getFbUrl/' + appid,
        type: "POST",
        data: "",
        dataType: 'json',
        success: function (responseSocialData) {
            // alert();
            var strHtmls = '';
            var iconname = '';
            $.each(responseSocialData, function (index, socialdata) {
//                     alert( socialdata.url);
//                     return false;
                if (socialdata.social_icon == 'facebook') {
                    iconname = '<li><a href=' + socialdata.url + '  target="_blank"><i class="fa fa-facebook"></i></a></li>';
                }
                if (socialdata.social_icon == 'twitter') {
                    iconname = '<li><a href=' + socialdata.url + '  target="_blank"><i class="fa fa-twitter"></i></a></li>';
                }
                if (socialdata.social_icon == 'google') {
                    iconname = '<li><a href=' + socialdata.url + '  target="_blank"><i class="fa fa-google-plus"></i></a></li>';
                }
                if (socialdata.social_icon == 'youtube') {
                    iconname = '<li><a href=' + socialdata.url + '  target="_blank"><i class="fa fa-twitter"></i></a></li>';
                }
                if (socialdata.social_icon == 'linkedIn') {
                    iconname = '<li><a href=' + socialdata.url + '  target="_blank"><i class="fa fa-linkedin"></i></a></li>';
                }
                if (socialdata.social_icon == 'whatapp') {
                    iconname = '<li><a href=' + socialdata.url + '  target="_blank"><i class="fa fa-whatsapp"></i></a></li>';
                }
                if (socialdata.social_icon == 'instagram') {
                    iconname = '<li><a href=' + socialdata.url + '  target="_blank"><i class="fa fa-instagram"></i></a></li>';
                }
                if (socialdata.social_icon == 'pinterest') {
                    iconname = '<li><a href=' + socialdata.url + '  target="_blank"><i class="fa fa-pinterest"></i></a></li>';
                }
                if (socialdata.social_icon == 'skype') {
                    iconname = '<li><a href=' + socialdata.url + '  target="_blank"><i class="fa fa-skype"></i></a></li>';
                }
                if (socialdata.social_icon == 'vine') {
                    iconname = '<li><a href=' + socialdata.url + '  target="_blank"><i class="fa fa-vine"></i></a></li>';
                }
                if (socialdata.social_icon == 'snapchat') {
                    iconname = '<li><a href=' + socialdata.url + '  target="_blank"><i class="fa fa-twitter"></i></a></li>';
                }



                strHtmls += '' + iconname + '';
                //  alert(strHtml);    
            });

            $("#socailicon ul").html(strHtmls);
        }
    });


    $.ajax({
        url: base_url + '/appsget/weddingEventGet/' + appid,
        type: "GET",
        data: "",
        dataType: 'json',
        success: function (responseData) {

            var i = 1;
            var strHtml = '';
            $.each(responseData, function (index, eventdata) {

                if (i % 2 == 0) {
                    strHtml += '<div class="col-lg-1 centered"><img alt="" src="img/flwr.png" class="img-responsive"></div><div class="col-lg-4"> <p style="font-weight:bold;">' + eventdata.name + '</p><p>' + eventdata.date + '&nbsp;&nbsp&nbsp&nbsp;' + eventdata.time + '</p> <p>Venue:' + eventdata.street + '&nbsp;&nbsp&nbsp&nbsp' + eventdata.city + '</p></div>';

                } else {
                    strHtml += '<div class="col-lg-1 centered"><img alt="" src="img/flwr.png" class="img-responsive"></div> <div class="col-lg-6"><p style="font-weight:bold;">' + eventdata.name + '</p><p>' + eventdata.date + '&nbsp;&nbsp&nbsp&nbsp' + eventdata.time + '</p><p>Venue :  ' + eventdata.street + '&nbsp;&nbsp&nbsp&nbsp' + eventdata.city + '</p></div>';
                    // alert (eventRightConatiner);		


                }

                i++;
            });

            $("#eventajax").html(strHtml);
            $('.scrollpanel').scrollpanel();
        }
    });

    $.ajax({
        url: base_url + '/appsget/weddingGallery/' + appid,
        type: "GET",
        data: "",
        dataType: 'json',
        success: function (responseData) {
            // alert();
            var strHtml = '';
            $.each(responseData, function (index, data) {
                strHtml += '<li><a href="' + base_url + '/uploads/' + data.galleries + '"> <img src="' + base_url + '/uploads/' + data.galleries + '" alt=""></a></li>';
            });

            $("#photo_gallery ul").html(strHtml);
        }
    });

    $.ajax({
        url: base_url + '/appsget/weddingContactGet/' + appid,
        type: "GET",
        data: "",
        dataType: 'json',
        success: function (responseData) {
            var strHtml = '';
            var i = 1;
            $.each(responseData, function (index, contactdata) {

                strHtml += '<li class="amazingcarousel-item"><div class="amazingcarousel-item-container"><div class="amazingcarousel-image"><a href="" title="mate-1"  class="html5lightbox" data-group="amazingcarousel-1"><img src="' + base_url + '/uploads/contactimage/' + contactdata.contactimg + '" alt=""  /></a></div><div class="amazingcarousel-text"><cite> <h3>' + contactdata.name + '</h3></cite><p>' + contactdata.relation + '</p><div class="col-lg-10">   <div class="icon-par-prt"><div class="col-lg-3 centered"><img alt=" " src="img/mobile.png" width="16" height="16" class="img-responsive"></div><div class="col-lg-8"><p>' + contactdata.phone1 + '</p></div><div class="col-lg-3 centered"><img alt="" src="img/g-mil.png" width="16" height="16" class="img-responsive"></div><div class="col-lg-8">	<p>' + contactdata.email + '</p></div></div></div></div><div style="clear:both;"></div> </div></li>';
                i++;
            });
            //alert(strHtml);
            $("#contactajax ul").html(strHtml);
            var scripts = document.getElementsByTagName("script");
            var jsFolder = base_url+"/js/carouselengine/";
//            for (var i = 0; i < scripts.length; i++)
//            {
//                if (scripts[i].src && scripts[i].src.match(/amazingcarousel\.js/i))
//                    jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
//            }
            if (typeof html5Lightbox === "undefined")
            {
                html5Lightbox = jQuery(".html5lightbox").html5lightbox({
                    skinsfoldername: "",
                    jsfolder: jsFolder,
                    barheight: 64,
                    showtitle: true,
                    showdescription: false,
                    shownavigation: false,
                    thumbwidth: 80,
                    thumbheight: 60,
                    thumbtopmargin: 12,
                    thumbbottommargin: 8,
                    titlebottomcss: '{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}',
                    descriptionbottomcss: '{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}'
                });
            }
            //Initializing amazing carousel --- Start
            jQuery("#amazingcarousel-1").amazingcarousel({
                jsfolder: jsFolder,
                width: 280,
                height: 240,
                skinsfoldername: "",
                interval: 3000,
                itembottomshadowimagetop: 99,
                donotcrop: false,
                random: false,
                showhoveroverlay: false,
                height:240,
                        arrowheight: 32,
                showbottomshadow: false,
                itembackgroundimagewidth: 100,
                imageheight: 120,
                skin: "TestimonialCarousel",
                responsive: true,
                lightboxtitlebottomcss: "{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",
                enabletouchswipe: true,
                navstyle: "bullets",
                backgroundimagetop: -40,
                arrowstyle: "mouseover",
                bottomshadowimagetop: 95,
                transitionduration: 1000,
                itembackgroundimagetop: 0,
                hoveroverlayimage: "hoveroverlay-64-64-9.png",
                itembottomshadowimage: "itembottomshadow-100-98-3.png",
                lightboxshowdescription: false,
                width:280,
                        navswitchonmouseover: false,
                showhoveroverlayalways: false,
                transitioneasing: "easeOutExpo",
                lightboxshownavigation: false,
                showitembackgroundimage: false,
                itembackgroundimage: "",
                playvideoimagepos: "center",
                circular: true,
                arrowimage: "arrows-32-32-2.png",
                scrollitems: 1,
                direction: "horizontal",
                lightboxdescriptionbottomcss: "{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",
                supportiframe: false,
                navimage: "bullet-16-16-1.png",
                backgroundimagewidth: 110,
                showbackgroundimage: false,
                lightboxbarheight: 64,
                showplayvideo: true,
                spacing: 4,
                lightboxthumbwidth: 80,
                navdirection: "horizontal",
                itembottomshadowimagewidth: 100,
                backgroundimage: "",
                lightboxthumbtopmargin: 12,
                autoplay: false,
                arrowwidth: 32,
                transparent: false,
                bottomshadowimage: "bottomshadow-110-95-0.png",
                scrollmode: "page",
                navmode: "page",
                lightboxshowtitle: true,
                lightboxthumbbottommargin: 8,
                arrowhideonmouseleave: 600,
                showitembottomshadow: false,
                lightboxthumbheight: 60,
                navspacing: 4,
                pauseonmouseover: false,
                imagefillcolor: "FFFFFF",
                playvideoimage: "playvideo-64-64-0.png",
                visibleitems: 4,
                imagewidth: 120,
                usescreenquery: false,
                bottomshadowimagewidth: 110,
                screenquery: {
                    tablet: {
                        screenwidth: 900,
                        visibleitems: 2
                    },
                    mobile: {
                        screenwidth: 600,
                        visibleitems: 1
                    }
                },
                navwidth: 16,
                loop: 0,
                navheight: 16
            });
            //Initializing amazing carousel----END 

        }
    });
    $("#contact-submit").click(function () {

        var name = $("#name").val();
        if (name == "") {
            $('#name_error').show();
            return false;
        }
        var email = $("#email").val();
        if (email == "") {
            $('#email_error').show();
            return false;
        }
        if (!validateEmail(email)) {
            $('#email_errorvalidate').show();
            return false;
        }
        var message = $("#contact-msg").val();
        if (message == "") {
            $('#message_error').show();
            return false;
        }
        var dataString = 'name=' + name + '&email=' + email + '&message=' + message + '&appid=' + appid;
        $.ajax({
            url: base_url + '/appsget/wishesSave/' + appid,
            type: "POST",
            data: dataString,
            'success': function (data) {

                if (data == '1') {

                    $('#wishesDataSaved').text('wishes  saved successfully');
                    setTimeout(function () {
                        $('#wishesDataSaved').text('')
                    }, 3000);

                }
            }
        });
        function validateEmail(email) {
            var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            var valid = emailReg.test(email);

            if (!valid) {
                return false;
            } else {
                return true;
            }
        }
    });

    function fixIntegers(e) {
        return 0 > e && (e = 0), 10 > e ? "0" + e : "" + e
    }
    setInterval(function () {

        var e = new Date(datetimecounter),
                t = new Date, r = Math.floor((e.getTime() - t.getTime()) / 1e3), n = fixIntegers(r % 60);
        r = Math.floor(r / 60);
        var a = fixIntegers(r % 60);
        r = Math.floor(r / 60);
        var o = fixIntegers(r % 24);
        r = Math.floor(r / 24);
        var f = r;
        $("#seconds").text(n), $("#minutes").text(a), $("#hours").text(o), $("#days").text(f)
    }, 1e3);
});