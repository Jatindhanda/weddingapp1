$(document).ready(function() {
     var appid = '67c6a1e7ce56d3d6fa748ab6d9af3fd7';
//    var appid = 'a1d0c6e83f027327d8461063f4ac58a6'; 
//    var base_url = 'http://localhost/harish/wedding/index.php';
        // var appid = 'd645920e395fedad7bbbed0eca3fe2e0';   
    var base_url = 'http://www.myweddingicon.com';

var datetimecounter = '';
     $.ajax({
           url: base_url+'/dashboard/weddingapp/'+appid,
           type: "GET",
           data: "",
           dataType:'json',
          success: function(wedresponseData) {
                          var groomName='',brideName='',groomImg='',brideImg='',email='',invitation='',gname='',bname='',counter='',inviatedate='';
                  $.each(wedresponseData, function(index,appdata){
//                 alert(appdata.groom);
//              return false;
                 groomName += appdata.groom;

                 brideName += appdata.bride;
                groomImg +=appdata.groomimage;
                 brideImg +=appdata.brideimage;
                 datetimecounter +=appdata.counter;
                // alert(counter);
                 gname +=appdata.groom;
                 bname  +=appdata.bride;
                 invitation +=appdata.invitation;
                 email +=appdata.email;
                 inviatedate +=appdata.inviatedate;
                 
            });
                var groomImgs="http://www.myweddingicon.com/uploads/groomimg/"+groomImg;
                var brideImgs="http://www.myweddingicon.com/uploads/groomimg/"+brideImg;
                 $("#groomajax").html(groomName);  
                 $("#brideajax").html(brideName);
                 $("#gajax").html(gname);
                 $("#bajax").html(bname);
                 $("#invitationajax").html(invitation);
                 $("#emailajax").html(email);
                 $("span#inviatedate").html(inviatedate);
                 $("span#groomimg img").attr('src',groomImgs);
                 $("span#brideimg img").attr('src',brideImgs);
                 $("#").html(brideImg);
                 $("input#counter").val(counter);
                  
          }
         
       });
       
       $.ajax({
                url:  base_url+'/dashboard/weddingEventGet/'+appid,
                type: "GET",
                data: "",
                dataType:'json',
                success: function(responseData) {
                
                 var i=1;
                 var strHtml='';
                 $.each(responseData, function(index,eventdata){
                     
              if(i%2==0){
              strHtml +='<div class="col-lg-1 centered"><img alt="" src="" class="img-responsive"></div><div class="col-lg-4"> <p style="font-weight:bold;">'+eventdata.name+'</p><p>'+eventdata.date+'&nbsp;&nbsp&nbsp&nbsp;'+eventdata.time+'</p> <p>Venue:'+eventdata.street+'&nbsp;&nbsp&nbsp&nbsp'+eventdata.city+'</p></div>';
            
              }else{
             strHtml +='<div class="col-lg-1 centered"><img alt="" src="" class="img-responsive"></div> <div class="col-lg-6"><p style="font-weight:bold;">'+eventdata.name+'</p><p>'+eventdata.date+'&nbsp;&nbsp&nbsp&nbsp'+eventdata.time+'</p><p>Venue :  '+eventdata.street+'&nbsp;&nbsp&nbsp&nbsp'+eventdata.city+'</p></div>';
            // alert (eventRightConatiner);		
                   
			
		}		
              
              i++;
          });
              
                $("#eventajax").html(strHtml);
                }
            });
            
             $.ajax({
                url:  base_url+'/dashboard/weddingGallery/'+appid,
                type: "GET",
                data: "",
                dataType:'json',
                success: function(responseData) {
                 // alert();
                 var strHtml='';
                 $.each(responseData, function(index,data){
          strHtml += '<li><a href="http://www.myweddingicon.com/uploads/'+data.galleries+'"); "> <img src="http://www.myweddingicon.com/uploads/'+data.galleries+'"); " alt=""></a></li>';
             });
                 
                  $("#photo_gallery ul").html(strHtml);
                }
            });
            
            $.ajax({
                url:  base_url+'/dashboard/weddingContactGet/'+appid,
                type: "GET",
                data: "",
                dataType:'json',
                success: function(responseData) {
                var strHtml='';
                var i=1;
               $.each(responseData, function(index,contactdata){
                 
                        strHtml +='<li><div data-animation-delay="'+100*i+'" data-animation="flipInY" class=" animated flipInY visible"><div class="blog-img"> <img src="http://www.myweddingicon.com/uploads/contactimage/'+contactdata.contactimg+'" alt="" style="width: 148px; height: 148px;"></div> <h3>'+contactdata.name+'</h3><p>'+contactdata.event+'</p><div class="col-lg-10">  <div class="icon-par-prt"> <div class="col-lg-3 centered"><img alt=" " src="" width="16" height="16" class="img-responsive"></div><div class="col-lg-8"><p>'+contactdata.phone1+'</p></div><div class="col-lg-3 centered"><img alt="" src=""  width="16" height="16" class="img-responsive"> </div><div class="col-lg-8">	<p>'+contactdata.email+'</p></div> </div> </div> </div></li>';
 i++
            
              });
              
                $("#contactajax ul").html(strHtml);
                }
            });
  $("#contact-submit").click(function() {
                
   var name = $("#name").val();
     if (name == "" ) {
     $('#name_error').show();
        return false;
        }
    var email = $("#email").val();
     if (email == "" ) {
     $('#email_error').show();
        return false;
      }
      if(!validateEmail(email)){
     $('#email_errorvalidate').show();
      return false;
     }
  var message = $("#contact-msg").val();
      if (message == "" ) {
     $('#message_error').show();
        return false;
        }
          var dataString = 'name=' + name + '&email=' + email + '&message=' + message + '&appid=' + appid;
         $.ajax({  
           url:base_url+'/dashboard/wishesSave/'+appid,
           type: "POST",
           data:dataString,
              'success' : function(data){ 
               
               if (data == '1') {
                   
              $('#wishesDataSaved').text('wishes  saved successfully');
		setTimeout(function(){$('#wishesDataSaved').text('')}, 3000);
              
            }  
              }
        });    
    function validateEmail(email){
	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
}
});
           
      function fixIntegers(e){return 0>e&&(e=0),10>e?"0"+e:""+e}setInterval(function(){
  
  var e=new Date(datetimecounter),
  t=new Date,r=Math.floor((e.getTime()-t.getTime())/1e3),n=fixIntegers(r%60);r=Math.floor(r/60);var a=fixIntegers(r%60);r=Math.floor(r/60);var o=fixIntegers(r%24);r=Math.floor(r/24);var f=r;$("#seconds").text(n),$("#minutes").text(a),$("#hours").text(o),$("#days").text(f)},1e3);
   });