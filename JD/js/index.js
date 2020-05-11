// 轮播图函数
function swiper(width, item_right, item_left, item_inner, sum) {
  var i = -width;
  // 向右翻页
  function right() {
    i -= width;
    $(item_inner).animate({ left: i });
  }
  // 向左翻页
  function left() {
    i += width;
    $(item_inner).animate({ left: i });
  }
  // 右边按钮点击效果
  $(item_right).click(function () {
    if (i >= -(sum - 1) * width) {
      right();
    } else {
      i = 0;
      $(item_inner).css("left", i);
      right();
    }
  });
  // 左边按钮点击效果
  $(item_left).click(function () {
    if (i <= -width) {
      left();
    } else {
      i = -sum * width;
      $(item_inner).css("left", i);
      left();
    }
  });
}
function swiper_timer() {
  $(".seckill-brand_inner_page").toggle();
}
// 中间大轮播图
swiper(590, ".fs_col2 .btn_right", ".fs_col2 .btn_left", ".fs_col2_inner", 5);
//秒杀区域，中间的轮播图，一区域四个小商品图
swiper(
  800,
  ".slider_list .btn_right",
  ".slider_list .btn_left",
  ".slider_list_inner",
  3
);
//秒杀区域，竖排三个小图轮播图
swiper(190, ".fs_col3 .btn_right", ".fs_col3 .btn_left", ".fs_col3_inner", 3);
// 秒杀区域，右边自动播放轮播图
var timer = setInterval(swiper_timer, 4000);
// 鼠标放上图片，图片变亮,说明文字变红（给包含图片的a链接加上 class="fade_in"）
$(".fade_in").hover(
  function () {
    $(this).addClass("change");
    $(this).siblings(".hover_red").css("color", "#e1251b");
  },
  function () {
    $(this).removeClass("change");
    $(this).siblings(".hover_red").css("color", "#333");
  }
);
// 鼠标放上第二部分竖排轮播图时，左右切换按钮出现
$(".fs_col3 ").hover(
  function () {
    $(".fs_col3 button").fadeIn();
  },
  function () {
    $(".fs_col3 button").fadeOut();
  }
);
// 中间轮播图部分，最右边的话费等图标切换效果
$(".service i").hover(
  function () {
    $(this).children().eq(0).show().siblings().hide();
  },
  function () {
    $(this).children().eq(1).show().siblings().hide();
  }
);

// 头部：鼠标放上去，卡片展示更多信息
$(".shortcut .dt").hover(function () {
  $(this).toggleClass("bgWhite").siblings(".dd").toggle();
});
$(".shortcut .dd").hover(function () {
  $(this).toggle().siblings(".dt").toggleClass("bgWhite");
});
// 倒计时
var starttime = new Date("2022/5/20");
setInterval(function () {
  var nowtime = new Date();
  var time = starttime - nowtime;
  var hour = parseInt((time / 1000 / 60 / 60) % 24);
  var minute = parseInt((time / 1000 / 60) % 60);
  var seconds = parseInt((time / 1000) % 60);
  $(".timmer .hour").html(hour);
  $(".timmer .minute").html(minute);
  $(".timmer .seconds").html(seconds);
}, 1000);
// 首页文字信息栏，鼠标放上去显示更多
