/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

$(function () {
  $('.skip').click (function () {
    $('.animation_frame').addClass ('skip');
  });
  setTimeout (function () {
    $('.animation_frame').addClass ('skip');
  }, 4000);
});