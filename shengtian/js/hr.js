/*鼠标滚轮*/
$.fn.extend({
    mousewheel: function (Func) {
        return this.each(function () {
            var t = this;
            t.D = 0;
            if ($.browser.msie || $.browser.webkit) {
                t.onmousewheel = function () {
                    t.D = event.wheelDelta;
                    event.returnValue = false;
                    Func && Func.call(t);
                };
            } else {
                t.addEventListener("DOMMouseScroll", function (e) {
                    t.D = e.detail > 0 ? -1 : 1;
                    e.preventDefault();
                    Func && Func.call(t);
                }, false);
            }
        });
    }
});

ST.hr = (function () {
    var win = $(window);
    var timer;
    win.resize(function () {
        timer && window.clearTimeout(timer);
        window.setTimeout(function () {
            resizeHandle();
        }, 100);
    });
    /*一些变量的定义*/
    var person_s = $("#person_s"); //睡觉小人
    var person_w = $("#person_w"); //工作小人
    var person_w_n = $("#person_w_nobag");//工作小人
    var person_x = $("#person_x"); //休闲小人
    var person_car = $("#person_car"); //汽车小人
    var scroll = $("#scroll");
    var scroll_h = $("#scroll_h");
    var keyboard_notice = $("#keyboard_notice");
    var stage = $("#stage");
    var ow = win.width();
    //获取屏幕宽度
    var getScreenW = (function (win) {
        return win.screen && win.screen.width;
    })(window);
    //小人移动速度为80/s
    var lastw;
    var fixw = (960 - (ow / 2)),
        fix = fixw / 80; //修正屏幕缩放
    fix = ~~(fix * 100) / 100;
    person_s.css("left", ow / 2);
    person_w.css("left", ow / 2);
    person_w_n.css("left", ow / 2);
    person_car.css("left", ow / 2);
    function resizeHandle() {
        var box_h = win.height();
        var box_w = win.width();
        var box_num = $(".box-wrap > .box").length;
        /*lastw = 1920-box_w;*/
        lastw = 0;
        $(".box-wrap").css("width", box_num * 1920);
        $(".box-box").css("height", box_h);

        if (ST.hr && ST.hr.tl && ST.hr.tl.progress() == 1) {
            stage.css("marginLeft", "-7680" - lastw + "px");
        }

    }

    resizeHandle();
    if ($.browser.msie && $.browser.version < 10) {
        //hack人物腿
        var leg_s_l = person_s.find(".p-foot1-l");
        var leg_s_r = person_s.find(".p-foot1-r");
        var leg_w_l = person_w.find(".p-foot2-l");
        var leg_w_r = person_w.find(".p-foot2-r");
        var leg_w_n_l = person_w_n.find(".p-foot2-l");
        var leg_w_n_r = person_w_n.find(".p-foot2-r");

        var leg_x_l = person_x.find(".p-foot3-l");
        var leg_x_r = person_x.find(".p-foot3-r");

        /*左腿上下动画*/
        var legs_s_l_tl = new TimelineLite({
            onComplete: function () {
                this.restart()
            }
        });
        legs_s_l_tl.to(leg_s_l, 0.5, {top: "135px"}, 0)
            .to(leg_s_l, 0.5, {top: "150px"})
            .to(leg_s_l, 0.5, {top: "135px"})
            .to(leg_s_l, 0.5, {top: "150px"});
        /*右腿上下动画*/
        var legs_s_r_tl = new TimelineLite({
            onComplete: function () {
                this.restart()
            }
        });
        legs_s_r_tl.delay(0.5).to(leg_s_r, 0.5, {top: "135px"}, 0)
            .to(leg_s_r, 0.5, {top: "150px"})
            .to(leg_s_r, 0.5, {top: "135px"})
            .to(leg_s_r, 0.5, {top: "150px"});

        /*左腿上下动画*/
        var legs_w_l_tl = new TimelineLite({
            onComplete: function () {
                this.restart()
            }
        });
        legs_w_l_tl.to(leg_w_l, 0.5, {top: "135px"}, 0)
            .to(leg_w_l, 0.5, {top: "150px"})
            .to(leg_w_l, 0.5, {top: "135px"})
            .to(leg_w_l, 0.5, {top: "150px"});

        /*右腿上下动画*/
        var legs_w_r_tl = new TimelineLite({
            onComplete: function () {
                this.restart()
            }
        });
        legs_w_r_tl.delay(0.5).to(leg_w_r, 0.5, {top: "135px"}, 0)
            .to(leg_w_r, 0.5, {top: "150px"})
            .to(leg_w_r, 0.5, {top: "135px"})
            .to(leg_w_r, 0.5, {top: "150px"});

        /*左腿上下动画*/
        var legs_w_n_l_tl = new TimelineLite({
            onComplete: function () {
                this.restart()
            }
        });
        legs_w_n_l_tl.to(leg_w_n_l, 0.5, {top: "135px"}, 0)
            .to(leg_w_n_l, 0.5, {top: "150px"})
            .to(leg_w_n_l, 0.5, {top: "135px"})
            .to(leg_w_n_l, 0.5, {top: "150px"});

        /*右腿上下动画*/
        var legs_w_n_r_tl = new TimelineLite({
            onComplete: function () {
                this.restart()
            }
        });
        legs_w_n_r_tl.delay(0.5).to(leg_w_n_r, 0.5, {top: "135px"}, 0)
            .to(leg_w_n_r, 0.5, {top: "150px"})
            .to(leg_w_n_r, 0.5, {top: "135px"})
            .to(leg_w_n_r, 0.5, {top: "150px"});

        /*左腿上下动画*/
        var legs_x_l_tl = new TimelineLite({
            onComplete: function () {
                this.restart()
            }
        });
        legs_x_l_tl.to(leg_x_l, 0.5, {top: "135px"}, 0)
            .to(leg_x_l, 0.5, {top: "150px"})
            .to(leg_x_l, 0.5, {top: "135px"})
            .to(leg_x_l, 0.5, {top: "150px"});

        /*右腿上下动画*/
        var legs_x_r_tl = new TimelineLite({
            onComplete: function () {
                this.restart()
            }
        });
        legs_x_r_tl.delay(0.5).to(leg_x_r, 0.5, {top: "135px"}, 0)
            .to(leg_x_r, 0.5, {top: "150px"})
            .to(leg_x_r, 0.5, {top: "135px"})
            .to(leg_x_r, 0.5, {top: "150px"});

    }
    //done;
    /*
     * 舞台对象
     * 包含
     *   人物
     *   场景
     * */
    var stages = {
        person: {
            "sleep": {},
            "work": {}
        },
        scenes: {
            "love": {
                /*场景 love 的时间轴*/
                getTimeLine: function () {
                    var tl = new TimelineLite();
                    var clock = $("#scene2_clock");
                    var cars_h = $("#person_car_head");
                    var fn = function () {
                        var o = this.target, n = o.attr("class");
                        o.toggleClass("css3-" + n, true);
                    }

                    //场景元素动效
                    tl.set(person_s, {left: "-120px"}, 1)
                        .set(person_s, {left: "-120px"}, 0)   //睡觉小人位置就绪
                        .set(clock, {opacity: 1}, 0)          //时钟准备就绪
                        .set(person_w, {left: "-120px"}, 0)  //工作小人位置就绪
                        .set(person_car, {left: "-340px", opacity: 0}, 0) //小车准备就绪
                        .set(person_w_n, {left: "-120px", bottom: "320px", opacity: 0}, 0)    //无包工作小人就绪
                        .to(scroll, 96, {width: "96%", ease: "linear"}, 0)      //进度条开始
                        .to(scroll_h, 96, {left: "444px", ease: "linear"}, 0)  //滑块开始
                        //move 1920
                        .to(stage, 96, {"marginLeft": -6670 - fixw + "px", ease: "linear"}, 0) //主场景动画开始
                        .to(person_x, 18, {left: "1920px", ease: "linear"}, 0)
                        //场景二元素开始
                        .to(person_s, 0.5, {opacity: 1}, 17)
                        .to(person_s, 24, {left: "1920px", ease: "linear"}, 17)
                        .to(person_w, 24, {left: "1920px", ease: "linear"}, 17)  //工作小人行走开始
                        .to(clock, 0.5, {opacity: 1, onComplete: fn}, 21)
                        //.set(clock,0.5,{opacity:1,onComplete:fn},21)
                        .to(person_s, 1, {opacity: 0}, 25.5)   //换装
                        .to(person_w, 1, {opacity: 1}, 26)   //工作小人出场
                        .to(person_w, 0.5, {opacity: 0}, 27)    //工作小人行走至阶梯
                        .set(person_w, {bottom: "120px"}, 27.5)
                        .to(person_w, 0.5, {opacity: 1}, 27.5)  //工作小人行走至二级阶梯
                        .to(person_w, 0.5, {opacity: 0}, 28)
                        .set(person_w, {bottom: "220px"}, 28.5)
                        .to(person_w, 0.5, {opacity: 1}, 28.5)  //工作小人行走至三级阶梯
                        .to(person_w, 0.5, {opacity: 0}, 29)
                        .set(person_w, {bottom: "320px"}, 29.5)
                        .to(person_w, 0.5, {opacity: 1}, 29.5)  //工作小人行走至三级阶梯
                        .to(person_w, 0.5, {opacity: 0}, 40)  //工作小人行走至场景结束
                        //场景三元素开始
                        .to(person_car, 1, {opacity: 1}, 40) //小车准备就绪
                        .to(person_car, 32, {left: "1920px", ease: "linear"}, 40)  //汽车小人行走开始
                        .to(cars_h, 0.5, {opacity: 1}, 41.5) //人物上车
                        .to(cars_h, 0.5, {opacity: 0}, 69)  //人物下车
                        .to(person_car, 2, {opacity: 0}, 70) //小车消失
                        //场景四元素开始
                        .to(person_w_n, 27, {left: "1920px", ease: "linear"}, 69)  //无包工作小人行走开始
                        .to(person_w_n, 1, {opacity: 1}, 69.5)    //无包工作小人出场
                        .to(person_w_n, 0.5, {opacity: 0}, 72)    //无包工作小人下阶梯
                        .set(person_w_n, {bottom: "60px"}, 72.5)
                        .to(person_w_n, 1, {opacity: 1}, 72.5)    //无包工作小人下阶梯
                        .to(person_w_n, 0.5, {opacity: 0}, 87)    //无包工作小人上阶梯
                        .set(person_w_n, {bottom: "210px"}, 87.5)
                        .to(person_w_n, 1, {opacity: 1}, 87.5)    //无包工作小人上阶梯
                        .to(person_w_n, 0.5, {opacity: 0}, 95);    //无包工作小人完成
                    return tl;
                }
            },
            "photo": {
                /*场景 life 的时间轴*/
                getTimeLine: function () {
                    var t = this;
                    if (!t.tl) {
                        //获取/缓存 场景一所有元素
                        t.tl = new TimelineLite();
                        //场景元素动效 如果分辨率小于1920则以右侧显示完全
                        // if(getScreenW < 1920){ // -7680px-(1920-getScreenW)
                        //   t.tl.to(stage,0.2,{"marginLeft": (-7680-(1920-getScreenW))+"px",ease:"Quad"}); //"-8160px"
                        //   t.tl.to(stage,0.2,{"marginLeft": "-7680px",ease:"Quad"});
                        // }else{
                        t.tl.to(stage, 0.2, {"marginLeft": "-7680" - lastw + "px", ease: "Quad"});
                        // }
                    } else {
                        t.tl.restart();
                    }
                    return t.tl;
                }
            }
        },
        initScenes: function () {
            var t = this;
            //获取/缓存 场景一所有元素
            var logo = $("#logo"), text = $("#love_text"), text_love = $("#love_text_love"), heart = $("#love_heart"), arrow = $("#love_arrow"), arrow_b = $("#love_arrow_b");
            var tl = new TimelineLite({
                onComplete: function () {
                    t.init()
                }
            });
            var fn = function () {
                var o = this.target, n = o.attr("class");
                o.toggleClass("css3-" + n, true);
            };
            //场景元素动效
            tl.to(person_x, 1, {left: "10%", opacity: 1, ease: "linear"}, 0)
                .to(person_x, 6, {left: Math.floor(ow / 2) + "px", ease: "linear"}, 1)
                .fromTo(logo, 1, {opacity: 0, top: "120px"}, {top: "140px", opacity: 1}, 2)
                .to(text, 1, {left: "105px", opacity: 1}, 3)
                .to(text, 1, {}, 4)
                .to(text_love, 1, {top: "430px", opacity: 1}, 4)
                .to(heart, 1, {top: "345px", opacity: 1, onComplete: fn}, 5)
                .to(arrow, 1, {opacity: 1, onComplete: fn}, 6)
                .to(arrow_b, 1, {opacity: 1}, 6);

            tl.timeScale(2);
            // tl.progress(1);

            return t;
        },
        init: function () {
            var t = this, bBtn = true, iWidth = 0, iHeight = 0, iScale = 0, oBoxImg;
            var tl = new TimelineLite({
                onComplete: t._takePhoto, onStart: function () {
                    keyboard_notice.hide()
                }
            });
            for (var i in t.scenes) {
                if (i == "love") {
                    if (t.scenes[i] && t.scenes[i].getTimeLine) tl.add(t.scenes[i].getTimeLine(), i);
                }
            }
            tl.pause();  //暂停播放
            t._changePeopleState(false);

            //最后一屏相关处理
            if (getScreenW < 1920) {
                //if(bBtn){
                //bBtn = false;
                $("#scene5_imgs").css("width", getScreenW);
                oBoxImg = $(".box5-stimg");
                iWidth = getScreenW / 6;
                iScale = (parseInt(oBoxImg.css("height")) / parseInt(oBoxImg.css("width"))).toFixed(2);
                iHeight = parseInt(iScale * iWidth);

                //最后一屏文字部分处理
                $(".box5-join").css({"width": iWidth * 4, "height": iHeight, "top": iHeight, "left": iWidth * 2});
                $(".box5-txt").css({"left": "40px", "top": "28px"});
                $(".box5-txt .txt-1").css({"font-size": "40px", "left": "-18px"});
                $(".box5-txt .txt-2").css({"font-size": "20px", "left": "-15px", "top": "56px"});
                $(".box5-txt .txt-3").css({"font-size": "20px", "left": "-14px", "top": "94px"});
                $(".box5-join-btn").css({"left": iWidth * 2, "top": "76px"});
                $(".box5-join-btn .j-btn").css({
                    "font-size": "30px",
                    "width": iWidth,
                    "height": "67px",
                    "line-height": "67px"
                });
                $(".box5 .box5-pencil").css({
                    "width": (iWidth + 20),
                    "height": iHeight * 2,
                    "left": (getScreenW - (iWidth + 20)),
                    "top": 0,
                    "backgroundPosition": "left -205px"
                });
                $(".box5-home").css({"top": "255px"});
                $(".box5-map").css({"left": (iWidth + 30), "top": (iHeight * 2 + 70)});
                $(".box5-phone").css({"left": (iWidth * 4 + 40), "top": (iHeight * 2 + 70)});

                //最后一屏各主区块重定位处理
                oBoxImg.each(function (i) {
                    i = i + 1;
                    switch (i) {
                        case 1:
                            $(".box5-st" + i).css({height: iHeight, width: iWidth});
                            break;
                        case 2:
                            $(".box5-st" + i).css({height: iHeight, width: iWidth, left: iWidth * 2});
                            break;
                        case 3:
                            $(".box5-st" + i).css({height: iHeight, width: iWidth, left: iWidth * 4});
                            break;
                        case 4:
                            $(".box5-st" + i).css({height: iHeight, width: iWidth, left: iWidth, top: iHeight});
                            break;
                        case 5:
                            $(".box5-st" + i).css({height: iHeight, width: iWidth, left: 0, top: iHeight * 2});
                            break;
                        case 6:
                            $(".box5-st" + i).css({
                                height: iHeight,
                                width: iWidth * 2,
                                left: iWidth * 2,
                                top: iHeight * 2
                            });
                            break;
                        case 7:
                            $(".box5-st" + i).css({height: iHeight, width: iWidth, left: iWidth * 5, top: iHeight * 2});
                            break;
                        case 8:
                            $(".box5-st" + i).css({height: iHeight, width: iWidth, left: iWidth});
                            break;
                        case 9:
                            $(".box5-st" + i).css({height: iHeight, width: iWidth, left: iWidth, top: iHeight * 2});
                            break;
                    }
                })

                //}
            }

            //tl.timeScale(3);
            //tl.play("distance");

            //tl.progress(0.2);
            // tl.play();
            //绑定事件
            t.tl = tl;
            t._bindEvent();
            delete t.init;
            return t;
        },
        _changePeopleState: function (a) {
            //小人控制
            person_x.toggleClass("css3-people", a);
            person_s.toggleClass("css3-people", a);
            person_w.toggleClass("css3-people", a);
            person_w_n.toggleClass("css3-people", a);
        },
        _takePhoto: function () {
            ST.hr.scenes["photo"].getTimeLine();
        },
        _bindEvent: function () {
            var t = this, l;
            /*滚动条小人拖动*/
            scroll_h.drag("start", function (ev, dd) {
                //开始
                t.tl.pause();  //暂停动画
                l = parseInt(scroll_h.css("left"), 10);
            }).drag(function (ev, dd) {
                //仅水平移动
                var diff = dd.deltaX, left;
                left = l + diff;
                //溢出处理
                if (left < 0) left = 0;
                if (left > 444) left = 444;
                scroll_h.css("left", left + "px");
                //保留2位小数
                var p = ~~(left / 444 * 100) / 100;
                t.tl.progress(p);
            }).drag("end", function (ev, dd) {

                //结束
                var diff = dd.deltaX, left;
                left = l + diff;
                //溢出处理
                if (left < 0) left = 0;
                if (left > 444) {
                    left = 444;
                    //修复bug ： 当已显示最后场景时，继续拖动滑块，场景切换到4~5场景之间，显示异常。
                    /*t._changePeopleState(true);
                     t.tl.resume(); */
                    return;
                }
                // totel 480
                //保留2位小数
                var p = ~~(left / 444 * 100) / 100;
                /*
                 * 一些hack处理*/
                t.tl.progress(p);
                //t._changePeopleState(true);
                // t.tl.resume(); //恢复动画
            });
            /*鼠标滚轮*/
            //添加mousewheel事件
            $(document).on("keydown", function (e) {

                switch (e.keyCode) {
                    //左
                    case 37:
                        t._changePeopleState(true);
                        t.tl.pause();  //暂停动画
                        var p = t.tl.progress();
                        p -= 0.001;
                        if (p < 0) p = 0;
                        if (p > 1) p = 1;
                        t.tl.progress(p);
                        break;
                    //右
                    case 39:
                        //小人控制
                        t._changePeopleState(true);
                        t.tl.pause();  //暂停动画
                        var p = t.tl.progress();
                        p += 0.001;
                        if (p < 0) p = 0;
                        if (p > 1) p = 1;
                        t.tl.progress(p);
                        break;
                }
            }).on("keyup", function (e) {
                switch (e.keyCode) {
                    //左
                    case 37:
                        //小人控制
                        window.setTimeout(function () {
                            t._changePeopleState(false);
                        }, 150);
                        //t.tl.resume();  //暂停动画
                        break;
                    //右
                    case 39:
                        //小人控制
                        window.setTimeout(function () {
                            t._changePeopleState(false);
                        }, 150);
                        //t.tl.resume();  //暂停动画
                        break;
                }
            });

            var flag = false, ptimer;
            $("#stage").mousewheel(function () {
                if (!flag) {
                    t._changePeopleState(true);
                    flag = true;
                }
                t.tl.pause();  //暂停动画
                var p = t.tl.progress();
                if (this.D > 0) {
                    //up
                    p -= 0.005;
                } else {
                    //down
                    p += 0.005;
                }
                ;
                if (p < 0) p = 0;
                if (p > 1) p = 1;
                t.tl.progress(p);
                ptimer && window.clearTimeout(ptimer);
                ptimer = "";
                ptimer = window.setTimeout(function () {
                    flag = false;
                    t._changePeopleState(false);
                }, 500);
                //t.tl.resume(); //恢复动画
            });
        },
        /*
         * 获取场景时间轴
         * */
        getSceneTimeLine: function () {

        },
        /*
         * 跳转至场景
         * */
        goScene: function () {

        }
    };

    //return stages.init();
    return stages.initScenes();
})();

