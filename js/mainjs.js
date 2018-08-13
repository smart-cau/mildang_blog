$(document).ready(function() {
  console.log($(".navlist li"));

  /************************ to highlight on which section you are ****************/

  $(".navlist li").click(function() {
    $(this).addClass("iamselected");
    $(".navlist li")
      .not(this)
      .removeClass("iamselected");
  });

  /********************* highlight active link when scrolled **************************/

  $(window).scroll(function() {
    console.log($(this).scrollTop());
    $(".page").each(function() {
      var sectionoffset = $(this.hash).offset().top; // saves dist of that hash trom top
      if (sectionoffset <= $(this).scrollTop()) {
        $(this).addClass("iamselected");
      }
    });
  });

  /**************** to change from trans to black when scrolled *************/

  console.log($(document).scrollTop());

  $(document).scroll(function() {
    if ($(document).scrollTop() > 95) {
      $(".navwrapper").addClass("notonhomepage");
      $(".logo").addClass("hideme");
    } else {
      $(".navwrapper").removeClass("notonhomepage");
      $(".logo").removeClass("hideme");
    }
  });
  /******************** hide n show nav *************************/

  $(".toggleMenu").click(function() {
    $(".sidemenu").addClass("showmenu");
    $(".toggleMenu").addClass("changeopacity");
  });

  $(".close").click(function() {
    $(".sidemenu").removeClass("showmenu");
    $(".toggleMenu").removeClass("changeopacity");
  });

  /************************* menu scales when scrolled ****************************/
  $(document).scroll(function() {
    //--------모바일 버젼 최적화를 위해 여기 수정!! -------
    if ($(document).scrollTop() > 250) {
      // $(".mobilelogo").addClass("hideme");
      // $(".toggleMenu").css("padding", "9px 12px 9px 9px");
    } else {
      $(".mobilelogo").removeClass("hideme");
      // $(".toggleMenu").css("padding", "15px 20px 15px 15px");  ----이 부분 때문에 메뉴 아이콘 크기가 변함
    }
  });

  function wrapWindowByMask() {
    //화면의 높이와 너비를 구한다.
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    console.log(`높이 : ${maskHeight}`);

    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
    $(".close").css({ width: maskWidth, height: maskHeight });

    //애니메이션 효과 - 일단 1초동안 까맣게 됐다가 80% 불투명도로 간다.
    $("#mask").fadeIn(1000);
    $("#mask").fadeTo("slow", 0.8);

    //윈도우 같은 거 띄운다.
    $(".window").show();
  }

  //검은 막 띄우기
  $(".openMask").click(function(e) {
    e.preventDefault();
    wrapWindowByMask();
  });

  //닫기 버튼을 눌렀을 때
  $(".window .close").click(function(e) {
    //링크 기본동작은 작동하지 않도록 한다.
    e.preventDefault();
    $("#mask, .window").hide();
  });

  //검은 막을 눌렀을 때
  $("#mask").click(function() {
    $(this).hide();
    $(".window").hide();
  });
});
