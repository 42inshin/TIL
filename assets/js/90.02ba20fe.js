(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{445:function(_,l,v){"use strict";v.r(l);var a=v(45),t=Object(a.a)({},(function(){var _=this,l=_.$createElement,v=_._self._c||l;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"_2021-02-02-화"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2021-02-02-화"}},[_._v("#")]),_._v(" 2021-02-02(화)")]),_._v(" "),v("h2",{attrs:{id:"_1-학습-날짜"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-학습-날짜"}},[_._v("#")]),_._v(" 1. 학습 날짜")]),_._v(" "),v("ul",[v("li",[_._v("2021-02-02(화)\n"),v("br")])]),_._v(" "),v("h2",{attrs:{id:"_2-학습-시간"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-학습-시간"}},[_._v("#")]),_._v(" 2. 학습 시간")]),_._v(" "),v("ul",[v("li",[_._v("12:00 ~ 14:00 (집)")]),_._v(" "),v("li",[_._v("15:00 ~ 18:00 (집)")]),_._v(" "),v("li",[_._v("19:00 ~ 21:00 (집)\n"),v("br")])]),_._v(" "),v("h2",{attrs:{id:"_3-학습-범위-및-주제"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-학습-범위-및-주제"}},[_._v("#")]),_._v(" 3. 학습 범위 및 주제")]),_._v(" "),v("ul",[v("li",[_._v("gnl 리뷰")]),_._v(" "),v("li",[_._v("cub3d minilibX 설치\n"),v("br")])]),_._v(" "),v("h2",{attrs:{id:"_4-동료-학습-방법"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-동료-학습-방법"}},[_._v("#")]),_._v(" 4. 동료 학습 방법")]),_._v(" "),v("ul",[v("li",[_._v("그룹스터디 ("),v("code",[_._v("kyukim")]),_._v(", "),v("code",[_._v("yuchoi")]),_._v(", "),v("code",[_._v("hojo")]),_._v(")\n"),v("br")])]),_._v(" "),v("h2",{attrs:{id:"_5-학습-목표"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-학습-목표"}},[_._v("#")]),_._v(" 5. 학습 목표")]),_._v(" "),v("ul",[v("li",[_._v("gnl 코드 재구성")]),_._v(" "),v("li",[_._v("cub3d 에 필요한 minilibX 을 사용하여 창 띄우기\n"),v("br")])]),_._v(" "),v("h2",{attrs:{id:"_6-상세-학습-내용"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-상세-학습-내용"}},[_._v("#")]),_._v(" 6. 상세 학습 내용")]),_._v(" "),v("blockquote",[v("p",[_._v("실제 코딩 시간 : 총 2시간.")])]),_._v(" "),v("h3",{attrs:{id:"cub3d-시작"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cub3d-시작"}},[_._v("#")]),_._v(" cub3d 시작")]),_._v(" "),v("ul",[v("li",[v("p",[v("code",[_._v("minilibX")]),_._v(", 줄여서 "),v("code",[_._v("mlx")]),_._v(" 를 사용해야 하며, intra 과제 페이지에서 다운받을 수 있다.")])]),_._v(" "),v("li",[v("p",[_._v("주어진 minilibX는 "),v("code",[_._v("mms")]),_._v(" 버전과 "),v("code",[_._v("OpenGL")]),_._v(" 버전이 있다. 그중에서 하나만 이용하면 되고, mms가 최신버전이라 mms를 이용하기로 결정 했다.")])]),_._v(" "),v("li",[v("p",[_._v("받은 파일을 압축 풀면, "),v("code",[_._v("Makefile이")]),_._v(" 있는데, "),v("code",[_._v("make")]),_._v(" 명령어로 컴파일하게 되면 "),v("code",[_._v("libmlx.a")]),_._v(" 나 "),v("code",[_._v("libmlx.dylib")]),_._v(" 파일을 얻을 수 있다.")])]),_._v(" "),v("li",[v("p",[_._v("mac 에서 사용 시 몇가지 사항들을 고려해서 "),v("code",[_._v("main.c")]),_._v(" 를 만들어야 한다.")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v('// 예시 main.c\n#include "../mlx.h" // 헤더파일 경로를 정확히 맞춰줘야 한다.\n\t\t\t\t\t// 심볼릭 링크를 만들 시엔 경로 빼도 된다.\nint\t\tmain(void)\n{\n\tvoid\t*mlx;\n\tvoid\t*win;\n\n\tmlx = mlx_init();\n\twin = mlx_new_window(mlx, 500, 500, "mlx_project");\n\tmlx_loop(mlx);\n}\n')])])])]),_._v(" "),v("li",[v("p",[_._v("컴파일 명령어")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("gcc -I<headerfile 경로> main.c -L<library 경로> -lmlx -framework OpenGL -framework AppKit\n")])])]),v("ul",[v("li",[v("code",[_._v("libmlx.a")]),_._v(" 또는 "),v("code",[_._v("libmlx.dylib")]),_._v(" 파일을 컴파일에 사용해야하며 -l, -L 옵션을 통해 다룰 수 있다.")]),_._v(" "),v("li",[v("code",[_._v("libmlx.dylib")]),_._v(" 이름 앞 "),v("code",[_._v("lib")]),_._v(" 와 확장자가 빠진 "),v("code",[_._v("mlx")]),_._v(" 에 "),v("code",[_._v("-l")]),_._v(" 을 붙여서 "),v("code",[_._v("-lmlx")]),_._v(" 를 적으면 해당 파일에 접근할 수 있다.")]),_._v(" "),v("li",[v("code",[_._v("-L")]),_._v(" 로 라이브러리 파일의 경로를 설정한다.")]),_._v(" "),v("li",[_._v("framework\n"),v("ul",[v("li",[v("code",[_._v("OpenGL")]),_._v(" : 2D, 3D 그래픽 출력 라이브러리 & API")]),_._v(" "),v("li",[v("code",[_._v("AppKit")]),_._v(" : 그래픽 사용자 인터페이스(GUI) tool kit")])])])])])]),_._v(" "),v("h3",{attrs:{id:"헤더-라이브러리-경로를-적지-않게-하는-방법"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#헤더-라이브러리-경로를-적지-않게-하는-방법"}},[_._v("#")]),_._v(" 헤더, 라이브러리 경로를 적지 않게 하는 방법")]),_._v(" "),v("ul",[v("li",[_._v("c 파일에서 헤더 및 라이브러리 파일을 사용시 "),v("code",[_._v("/usr/lib")]),_._v(" 나 "),v("code",[_._v("/usr/local/lib")]),_._v(" | "),v("code",[_._v("/usr/local/include")]),_._v(" 에서 찾는데, 그 위치에 해당 헤더, 라이브러리가 없으면 컴파일 시 에러가 난다.")]),_._v(" "),v("li",[_._v("그렇기 때문에 임의의 헤더 및 라이브러리를 사용할 경우 폴더의 root에 같이 두거나 해당 경로를 적야 한다.")]),_._v(" "),v("li",[_._v("이러한 불편함을 없애기 위해선 "),v("code",[_._v("/usr/local/lib")]),_._v(" , "),v("code",[_._v("/usr/local/include")]),_._v(" 경로에 두 파일을 심볼릭링크로 넣어주면 해결 된다.")]),_._v(" "),v("li",[_._v("심볼릭 링크 생성 방법"),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("ln -s <해당파일경로> /usr/local/lib/\n")])])])])]),_._v(" "),v("h3",{attrs:{id:"gcc-옵션-l-l"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gcc-옵션-l-l"}},[_._v("#")]),_._v(" GCC 옵션 -L, -l")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("-l 옵션 (소문자 엘)"),v("br"),_._v("\n링크할 라이브러리를 명시하는 옵션이다. 정적 라이브러리를 링크시키는데 사용되며 대상 라이브러리 파일의 이름에서 앞의 lib와 뒤의 .a를 때고 인식한다. 예를 들어 libmylib.a 라는 라이브러리 파일을 링크시키려면 -lmylib 로 옵션을 주면 된다.")])]),_._v(" "),v("li",[v("p",[_._v("-L 옵션 (대문자 엘)"),v("br"),_._v("\n-L은 라이브러리 위치를 정해주는 옵션이다. 사용은 다음과 같이 -L<디렉토리명> 으로 한다. 기본적으로 리눅스는 /lib, /usr/lib, /usr/local/lib 만을 검색해서 라이브러리를 찾는다. 그러므로 추가적으로 디렉토리를 검색하도록 하려면 -L 옵션을 사용하면 된다.\n"),v("br")])])]),_._v(" "),v("h2",{attrs:{id:"_7-학습-내용에-대한-개인적인-총평"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-학습-내용에-대한-개인적인-총평"}},[_._v("#")]),_._v(" 7. 학습 내용에 대한 개인적인 총평")]),_._v(" "),v("ul",[v("li",[_._v("mlx 사용 방법에 대해서 알아보았다. 지금까지 c 언어에 대해서 많이 배웠다고 생각했지만, 그래픽 과제로 넘어오면서 여전히 초보의 코딩실력 밖에 되지 않았구나 라는 생각을 하게 된다. 절로 겸손해지는 과제들이다.")]),_._v(" "),v("li",[_._v("지금의 과제들을 하나하나 독파해 나가면서 실질적으로 사회에 필요한 app들을 만들어 나갈 수 있길 기대해본다.")]),_._v(" "),v("li",[_._v("경열님의 gnl을 영덕님과 함께 3명이서 리뷰 및 피드백을 진행하였다. 진행하는 가운데 문제되는 부분들을 수정하고, 추가적으로 함수를 생성하면서, 새로운 방식으로 동작하는 gnl을 만들어 보았다. 아직까지는 문제가 있는 부분들이 있지만 약간의 수정으로 새 방식의 짧은 구성의 gnl 이 만들어 질 것으로 기대가 된다.\n"),v("br")])]),_._v(" "),v("h2",{attrs:{id:"_8-다음-학습-계획"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-다음-학습-계획"}},[_._v("#")]),_._v(" 8. 다음 학습 계획")]),_._v(" "),v("ul",[v("li",[_._v("cub3d 내용 이해")]),_._v(" "),v("li",[_._v("cub3d main 코드 작성 - 방향키 동작 수행\n"),v("br")])]),_._v(" "),v("h2",{attrs:{id:"_9-참고-링크"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-참고-링크"}},[_._v("#")]),_._v(" 9. 참고 링크")]),_._v(" "),v("blockquote",[v("p",[v("a",{attrs:{href:"https://github.com/taelee42/mlx_example",target:"_blank",rel:"noopener noreferrer"}},[_._v("mlx 예제 - github"),v("OutboundLink")],1),_._v(" "),v("br")])])])}),[],!1,null,null,null);l.default=t.exports}}]);