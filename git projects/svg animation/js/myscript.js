/* begin script me */
 $(function(){
      //Keep track of last scroll
      var lastScroll = 0;
      $(window).scroll(function(event){
          //Sets the current scroll position
          var st = $(this).scrollTop();
          //Determines up-or-down scrolling
          if (st > lastScroll){
             //Replace this with your function call for downward-scrolling
             $('#Layer_1').css({'opacity': 0, 'position':'absolute', });
       $('#Layer_2').css({'opacity': 1});
          }
          else {
             //Replace this with your function call for upward-scrolling
             $('#Layer_2').css({'opacity': 0});
       $('#Layer_1').css({'opacity': 1});
          }
          //Updates scroll position
          lastScroll = st;
      });
    });
/* end me script */

/* begin steve script*/
$(function(){  
  s = Snap('#svg');

  var frame = s.path("M164.821907,281.140772 C164.821907,295.721883 152.868648,307.650994 138.257352,307.650994 L26.6899636,307.650994 C12.0791134,307.650994 0.125186235,295.721883 0.125186235,281.140772 L0.125186235,26.6927722 C0.125186235,12.1118833 12.0791134,0.182327778 26.6899636,0.182327778 L138.257352,0.182327778 C152.868648,0.182327778 164.821907,12.1118833 164.821907,26.6927722 L164.821907,281.140772 L164.821907,281.140772 L164.821907,281.140772 L164.821907,281.140772 Z").addClass('frame');

  var screen = s.path("M153.617338,261.472083 L11.1072166,261.472083 L11.1072166,48.13875 L153.617338,48.13875 L153.617338,48.13875 L153.617338,261.472083 L153.617338,261.472083 Z").addClass('screen');

  var button = s.path("M97.4912186,283.457617 C97.4912186,291.735394 90.767413,298.44495 82.4735466,298.44495 C74.1799028,298.44495 67.4558745,291.735394 67.4558745,283.457617 C67.4558745,275.181394 74.1799028,268.471172 82.4735466,268.471172 C90.767413,268.471172 97.4912186,275.181394 97.4912186,283.457617 C97.4912186,283.457617 97.4912186,275.181394 97.4912186,283.457617 L97.4912186,283.457617 L97.4912186,283.457617 Z").addClass('button');

  var buttonMark = s.path("M77.4515368,286.9924 L77.4515368,279.922584 C77.4515368,279.10042 78.1171524,278.434831 78.9393499,278.434831 L86.0077432,278.434831 C86.8282326,278.434831 87.4955563,279.10042 87.4955563,279.922584 L87.4955563,286.9924 C87.4955563,287.814564 86.8282326,288.481291 86.0077432,288.481291 L78.9393499,288.481291 C78.1171524,288.481291 77.4515368,287.814564 77.4515368,286.9924").addClass('button-mark');
  
  var device = s.group(frame, screen, button, buttonMark);
  
  device.attr({
    transform: "translate(418.000000, 146.000000)"
  });
  
  
  var iPhone = function() {
      
   
    device.animate({transform: "translate(418.000000, 146.000000)"}, 400).removeClass('iMac');
    
    frame.animate({ d: "M164.821907,281.140772 C164.821907,295.721883 152.868648,307.650994 138.257352,307.650994 L26.6899636,307.650994 C12.0791134,307.650994 0.125186235,295.721883 0.125186235,281.140772 L0.125186235,26.6927722 C0.125186235,12.1118833 12.0791134,0.182327778 26.6899636,0.182327778 L138.257352,0.182327778 C152.868648,0.182327778 164.821907,12.1118833 164.821907,26.6927722 L164.821907,281.140772 L164.821907,281.140772 L164.821907,281.140772 L164.821907,281.140772 Z"}, 1000, mina.bounce);

    screen.animate({ d: "M153.617338,261.472083 L11.1072166,261.472083 L11.1072166,48.13875 L153.617338,48.13875 L153.617338,48.13875 L153.617338,261.472083 L153.617338,261.472083 Z"}, 1100, mina.bounce);

    button.animate({ d: "M97.4912186,283.457617 C97.4912186,291.735394 90.767413,298.44495 82.4735466,298.44495 C74.1799028,298.44495 67.4558745,291.735394 67.4558745,283.457617 C67.4558745,275.181394 74.1799028,268.471172 82.4735466,268.471172 C90.767413,268.471172 97.4912186,275.181394 97.4912186,283.457617 C97.4912186,283.457617 97.4912186,275.181394 97.4912186,283.457617 L97.4912186,283.457617 L97.4912186,283.457617 Z"}, 1200, mina.bounce);

    buttonMark.animate({ d: "M77.4515368,286.9924 L77.4515368,279.922584 C77.4515368,279.10042 78.1171524,278.434831 78.9393499,278.434831 L86.0077432,278.434831 C86.8282326,278.434831 87.4955563,279.10042 87.4955563,279.922584 L87.4955563,286.9924 C87.4955563,287.814564 86.8282326,288.481291 86.0077432,288.481291 L78.9393499,288.481291 C78.1171524,288.481291 77.4515368,287.814564 77.4515368,286.9924"}, 1000, mina.bounce);
  };
    
  
  
  var iPad = function() {
    device.animate({transform: "translate(296.000000, 36.000000)"}, 400).removeClass('iMac');

    frame.animate({ d: "M408.807844,502.315866 C408.807844,516.896977 396.854585,528.826088 382.243289,528.826088 L26.2024263,528.82608 C11.5915761,528.82608 -0.362351057,516.896969 -0.362351057,502.315857 L-0.362351057,27.043563 C-0.362351057,12.4626741 11.5915761,0.533118529 26.2024263,0.533118529 L382.243289,0.533126748 C396.854585,0.533126748 408.807844,12.4626823 408.807844,27.0435712 L408.807844,502.315866 L408.807844,502.315866 L408.807844,502.315866 L408.807844,502.315866 Z" }, 1000, mina.bounce);

    screen.animate({ d: "M367.503075,481.838872 L41.444018,481.838872 L41.444018,47.5070916 L367.503075,47.5070916 L367.503075,47.5070916 L367.503075,481.838872 L367.503075,481.838872 Z" }, 1100, mina.bounce);

    button.animate({ d: "M219.491219,506.457617 C219.491219,514.735394 212.767413,521.44495 204.473547,521.44495 C196.179903,521.44495 189.455874,514.735394 189.455874,506.457617 C189.455874,498.181394 196.179903,491.471172 204.473547,491.471172 C212.767413,491.471172 219.491219,498.181394 219.491219,506.457617 C219.491219,506.457617 219.491219,498.181394 219.491219,506.457617 L219.491219,506.457617 L219.491219,506.457617 Z" }, 1000, mina.bounce);

    buttonMark.animate({ d: "M199.451537,509.9924 L199.451537,502.922584 C199.451537,502.10042 200.117152,501.434831 200.93935,501.434831 L208.007743,501.434831 C208.828233,501.434831 209.495556,502.10042 209.495556,502.922584 L209.495556,509.9924 C209.495556,510.814564 208.828233,511.481291 208.007743,511.481291 L200.93935,511.481291 C200.117152,511.481291 199.451537,510.814564 199.451537,509.9924" }, 1000, mina.bounce);
  };
  
  
  var iMac = function() {
    device.animate({transform: "translate(167.000000, 41.000000)"}, 200, mina.bounce).addClass('iMac');
    
    frame.animate({ d: "M640.224014,434.852619 L26.7370332,434.852612 C12.126183,434.852612 0.172255877,423.811707 0.172255877,410.316262 L0.172255877,25.0383573 C0.172255877,11.5431178 12.126183,0.501801303 26.7370332,0.501801303 L640.224014,0.501808364 C654.835309,0.501808364 666.788568,11.5431249 666.788568,25.0383644 L666.788568,410.316269 C666.788568,423.811714 654.835309,434.852619 640.224014,434.852619 Z"}, 1000, mina.bounce);

    screen.animate({ d: "M646,410.023915 L20,410.023915 L20,22.0722711 L646,22.0722711 L646,22.0722711 L646,410.023915 L646,410.023915 Z"}, 1100, mina.bounce);

    button.animate({ d: "M468.412707,513.296284 L468.412707,518.303753 L333.473547,518.303753 L198.884063,518.30375 L198.884063,513.29628 C198.884063,513.29628 256.383845,495.33949 259.881126,489.737355 C263.378406,484.13522 261.881126,435.044633 261.881126,435.044633 L405.384185,435.044633 C405.384185,435.044633 403.34735,484.773326 407.384185,489.737356 C411.42102,494.701386 468.412707,513.296284 468.412707,513.296284 Z"}, 1200, mina.bounce);

    buttonMark.animate({ d: "M198.565009,513.637806 L468.848578,513.637806 L468.848578,518.896328 L198.565009,518.896328 L198.565009,513.637806 Z"}, 1000, mina.bounce);
  };
  
  
  var steve = function() {
    device.animate({transform: "translate(173.000000, 28.000000)"}, 200, mina.bounce).removeClass('iMac').addClass('steve');
    
    frame.animate({ d: "M220.37898,253.359207 C226.060033,280.282191 235.529931,303.81521 247.739238,322.723003 C254.161133,332.668189 244.631218,358.433289 250.860275,366.002747 C253.382118,369.067252 254.760274,375.675011 261.767086,381.456645 C272.067394,389.955891 292.209313,397.830884 327.000004,399.554596 C373.882803,401.877413 410.517865,382.830808 424.865368,355.948395 C429.623968,347.032372 433.305851,342.40351 434.290112,332.027557 C435.105247,323.434496 431.203901,318.804611 430.862164,309.434723 C430.657845,303.832642 432.731264,304.112425 434.290112,295.734161 C435.610384,288.638152 436.327445,272.846768 437.407436,267.787338 C441.229572,249.881798 441,216.47723 441,196.5 C441,99.0217417 392.1696,20 327,20 C261.8304,20 218,71.0217417 218,168.5 C218,192.327476 215.469706,230.093749 220.37898,253.359207 Z"}, 1000, mina.bounce);

    screen.animate({ d: "M217.08318,207.302721 C219.107901,216.895909 222.479365,230.047423 226.502319,234.704028 C233.118034,242.36178 246.349465,246.186742 251.074975,258.59337 C255.800486,270.999998 252.020078,293.053248 261.471099,303.582657 C270.922121,314.112066 271.867224,292.133248 276.592734,281.566623 C281.318245,270.999998 318.840266,268.208338 323.179627,268.20834 C327.518988,268.208341 327.518988,271.951649 331.727786,271.951653 C335.936584,271.951657 334.099085,268.093751 339.562911,268.093753 C345.026738,268.093754 353.533755,266.568334 364.983076,265.555714 C371.871129,264.94651 378.292267,263.510681 381.950378,265.555713 C391.689002,270.999998 396.452664,283.057808 399.253383,283.057807 C402.054101,283.057806 398.730787,263.689507 407.542943,251.928912 C412.407705,245.436462 419.553103,243.312417 425.535528,236.684212 C430.389826,231.305913 434.538725,221.00921 435.600633,218.596145 C436.935742,215.562263 439.005971,204.503555 440.559809,195.421405 C438.28018,188.566883 434.567142,176.487896 434.567141,170.53036 C434.567139,161.933921 424.537968,141.159201 424.537964,124.682696 C424.537961,108.206191 412.359677,99.6097554 403.763241,92.4460573 C395.166806,85.2823593 403.091648,69.1220654 392.346099,53.3619311 C381.600549,37.6017968 364.925366,36.7343183 358.47804,42.4652756 C352.030713,48.1962328 351.969177,74.8586426 320.423695,74.8586203 C288.878212,74.8585979 276.434116,43.1704504 264.255829,47.0741075 C252.077542,50.9777647 252.642802,57.223612 236.107535,80.23699 C219.572267,103.250368 231.809318,137.269533 231.809316,150.091436 C231.809315,162.913338 230.233863,169.097628 225.361989,185.909923 C222.48827,195.826806 219.253335,203.047715 217.08318,207.302721 Z M443.760413,186.211047 C444.112215,187.781912 444.468781,189.86465 444.695512,192.478599 C445.896309,206.322411 446.488968,231.540914 444.695507,249.837596 C443.572395,261.295451 443.694939,286.201051 430.021157,311.522984 C411.215786,346.347902 372.987671,381.485231 330.116219,379.198893 C304.194789,377.816502 284.118297,369.040542 269.507525,356.701771 C242.38284,333.795023 232.598417,300.532797 228.670517,293.061836 C222.626845,281.566624 214.508132,267.615538 214.508132,248.182504 C214.508132,228.74947 210.579641,215.983457 212.495927,212.10175 C213.3412,210.38953 213.020893,205.481527 213.576053,202.291632 C212.517221,194.557216 210.46249,183.790798 206.699997,176.683864 C200.252669,164.505575 194.723392,159.61152 194.723392,159.61152 C194.723392,159.61152 198.17072,145.865969 198.17072,137.269537 C198.170719,128.673104 196.00762,117.177607 196.007619,102.850209 C196.007617,88.5228105 216.622835,60.3633291 230.233863,43.1704521 C243.84489,25.977575 269.220048,0.483474395 318.520838,-0.258262446 C367.821628,-0.999999286 358.478039,-1.0000011 385.867989,15.7888973 C399.579375,24.1934053 419.897293,40.6553665 429.874362,54.3619296 C439.827549,68.0356838 439.450457,78.9555486 444.322082,86.1106623 C454.077021,100.438058 454.488377,118.848182 454.488376,130.8362 C454.488375,142.824219 455.786595,159.49099 455.786595,159.49099 C455.786595,159.49099 452.476383,162.65029 448.178166,169.097621 C446.129352,172.170844 444.697725,179.442123 443.760413,186.211047 Z M332.28138,298.581432 C357.014618,297.340851 375.026145,281.180831 383.301554,286.551583 C391.576964,291.922336 374.141668,331.444234 363.292798,339.064913 C352.443929,346.685592 348.282276,341.694215 336.91329,341.694214 C325.544304,341.694214 325.176847,348.565151 314.802019,346.464062 C304.42719,344.362974 289.11075,336.230003 284.911189,321.468396 C280.711628,306.706789 281.652864,298.055295 289.512006,295.584527 C297.371147,293.113759 307.548142,299.822012 332.28138,298.581432 Z"}, 1100, mina.bounce);

    button.animate({ d: "M242.522047,377.112074 C243.159915,375.950357 242.593741,370.718519 242.951613,365.223001 C243.322155,359.532913 244.61127,353.560143 244.961134,351.52992 C245.60186,347.81187 248.76338,345.828552 248.76338,345.828552 C248.76338,345.828552 252.422899,378.864332 310.007003,384.641099 C347.110327,388.363259 370.019904,385.972226 403.913016,361.186772 C437.806128,336.401318 431.313139,314.14398 431.313139,314.14398 C431.313139,314.14398 436.369866,314.527894 438.931334,318.864138 C441.01838,322.397246 443.787312,325.440387 444.808745,330.518531 C445.267115,332.797358 449.53076,334.018917 452.326994,345.828552 C452.823226,347.92434 472.050727,349.146502 493.568297,356.309374 C505.309249,360.217758 515.363856,366.503689 535.351142,374.88876 C551.285491,381.573542 578.324777,396.227893 611.614783,407.65265 C662.16378,425.000498 674.07495,419.362068 694.62229,445.537736 C701.204781,453.923303 713.441912,487.630431 716.958483,518.136412 C720.221941,546.446659 721.003607,571.999993 721.003607,571.999993 L0.940122993,571.999993 C0.940122993,571.999993 8.85941907,537.821084 37.7514441,502.126046 C50.8515641,485.941328 97.4483246,458.422997 121.19512,443.323662 C128.89483,438.427823 124.000601,444.584092 153.219756,425.431786 C182.43891,406.279481 221.184102,387.974344 221.691619,387.456132 C226.690847,382.351556 234.116687,381.523595 234.116687,381.523595 C234.116687,381.523595 240.415069,380.949413 242.522047,377.112074 Z"}, 1200, mina.bounce);

    buttonMark.animate({ d: "M311.78382,193.559936 C311.926668,194.853618 312,196.168245 312,197.5 C312,217.106109 296.106109,233 276.5,233 C256.893891,233 241,217.106109 241,197.5 C241,177.893891 256.893891,162 276.5,162 C293.716203,162 308.070038,174.25525 311.313579,190.517821 C314.251126,188.651824 321.983515,184.259434 330.074187,183.976901 C339.072311,183.66268 346.838402,188.490441 348.648794,189.709231 C351.817485,173.351508 366.216318,161 383.5,161 C403.106109,161 419,176.893891 419,196.5 C419,216.106109 403.106109,232 383.5,232 C363.893891,232 348,216.106109 348,196.5 C348,195.198305 348.070059,193.912974 348.206613,192.647571 C345.738241,191.020459 338.731144,187.009959 330.02244,187.314073 C321.872736,187.598667 314.824461,191.571255 311.78382,193.559936 Z M276.5,231 C295.001539,231 310,216.001539 310,197.5 C310,178.998461 295.001539,164 276.5,164 C257.998461,164 243,178.998461 243,197.5 C243,216.001539 257.998461,231 276.5,231 Z M383.5,230 C402.001539,230 417,215.001539 417,196.5 C417,177.998461 402.001539,163 383.5,163 C364.998461,163 350,177.998461 350,196.5 C350,215.001539 364.998461,230 383.5,230 Z"}, 1000, mina.bounce);
  };
  
    setTimeout(iPad, 1000);
    setTimeout(iMac, 3000);
    setTimeout(steve, 5000);
});
/* end steve script */


/* crocodile*/
 window.onload = function () {

            var croc = Snap.select("#crocodile"),
                head = croc.select("#upper-head"),
                jaw = croc.select("#upper-jaw"),
                symbol = croc.select("#symbol"),
                timer;
                
            var pivots = [
                [44, 147],
                [92, 126]
            ];

            function close() {
                clearTimeout(timer);

                head.animate({ 
                    transform: "r" + [8, pivots[0]]
                }, 500, mina.backin);
                
                jaw.animate({
                    transform: "r" + [37, pivots[1]]
                }, 500, mina.backin);

                timer = setTimeout(function () {
                    symbol.animate({
                        transform: "t-70,40r40"
                    }, 100);
                }, 400);
            }

            function open() {
                clearTimeout(timer);

                head.animate({ 
                    transform: "r" + [0, pivots[0]]
                }, 700, mina.elastic);
                
                jaw.animate({
                    transform: "r" + [0, pivots[1]]
                }, 700, mina.elastic);

                symbol.animate({
                    transform: "t0,0r0"
                }, 500, mina.elastic);
            }

            timer = setTimeout(close, 50);

            croc.hover(open, 
                function () {
                    timer = setTimeout(close, 200);
                }
            );
        };