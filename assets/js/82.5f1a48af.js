(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{439:function(a,t,s){"use strict";s.r(t);var r=s(45),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_2021-01-21-목"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2021-01-21-목"}},[a._v("#")]),a._v(" 2021-01-21(목)")]),a._v(" "),s("h2",{attrs:{id:"_1-학습-날짜"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-학습-날짜"}},[a._v("#")]),a._v(" 1. 학습 날짜")]),a._v(" "),s("ul",[s("li",[a._v("2021-01-21(목)\n"),s("br")])]),a._v(" "),s("h2",{attrs:{id:"_2-학습-시간"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-학습-시간"}},[a._v("#")]),a._v(" 2. 학습 시간")]),a._v(" "),s("ul",[s("li",[a._v("13:00 ~ 17:00 (집)\n"),s("br")])]),a._v(" "),s("h2",{attrs:{id:"_3-학습-범위-및-주제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-학습-범위-및-주제"}},[a._v("#")]),a._v(" 3. 학습 범위 및 주제")]),a._v(" "),s("ul",[s("li",[a._v("ft_server - mysql, phpmyadmin 에 대한 이해\n"),s("br")])]),a._v(" "),s("h2",{attrs:{id:"_4-동료-학습-방법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-동료-학습-방법"}},[a._v("#")]),a._v(" 4. 동료 학습 방법")]),a._v(" "),s("ul",[s("li",[a._v("그룹스터디 ("),s("code",[a._v("kyukim")]),a._v(", "),s("code",[a._v("yuchoi")]),a._v(", "),s("code",[a._v("hojo")]),a._v(")\n"),s("br")])]),a._v(" "),s("h2",{attrs:{id:"_5-학습-목표"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-학습-목표"}},[a._v("#")]),a._v(" 5. 학습 목표")]),a._v(" "),s("ul",[s("li",[a._v("ft_server 설치를 진행하고, database 에 대한 이해도를 높이기.\n"),s("br")])]),a._v(" "),s("h2",{attrs:{id:"_6-상세-학습-내용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-상세-학습-내용"}},[a._v("#")]),a._v(" 6. 상세 학습 내용")]),a._v(" "),s("blockquote",[s("p",[a._v("실제 코딩 시간 : 총 2시간.")])]),a._v(" "),s("h3",{attrs:{id:"mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[a._v("#")]),a._v(" mysql")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("이전까지 설치를 진행하면서 어떻게 설치를 하고 어떤 구성이 필요한지는 알았으나 각각이 정확히 어떠한 작업들을 위해 필요한건지, 어떤 명령어로 이루어져 있는지에 대해 면밀히 알아보지 않아서 정리가 필요 했다.")])]),a._v(" "),s("li",[s("p",[a._v("클라이언트 -  "),s("strong",[a._v("mysql monitor")]),s("br"),a._v("\n: 터미널에서 mysql 을 입력하면 들어가지는 기본으로 구성된 프로그램이다. 명령어 기반으로 사용가능하며, mysql database 에 대해 이해도를 높이려면 이 명령어를 기반으로 사용하는 것이 좋다.")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("사용법")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysql -u아이디 -p비밀번호\nmysql -h호스트주소 -p포트번호 -u아이디 -p비밀번호\n")])])])]),a._v(" "),s("li",[s("p",[a._v("데이터베이스 생성")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("CREATE DATABASE music CHARACTER SET utf8 COLLATE utf8_general_ci;\n")])])])]),a._v(" "),s("li",[s("p",[a._v("데이터베이스 사용")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("use music;\n")])])])]),a._v(" "),s("li",[s("p",[a._v("테이블 생성")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("CREATE TABLE `favorite_music` (\n`title` varchar(255) NOT NULL,\n `musician` varchar(20) NOT NULL,\n`duration` varchar(20) NOT NULL,\n `album` varchar(30) NOT NULL\n) ENGINE=innodb;\n")])])])]),a._v(" "),s("li",[s("p",[a._v("테이블에 데이터 추가")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("insert into favorite_music (`title`,`musician`, `duration`, `album`) values('Chasing Pavements', '아델', '3:30', 19);\n")])])])]),a._v(" "),s("li",[s("p",[a._v("입력된 데이터 조회")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("select * from favorite_music;\n")])])])])])]),a._v(" "),s("li",[s("p",[a._v("클라이언트 -  "),s("strong",[a._v("phpMyAdmin")]),s("br"),a._v("\n:웹 기반으로 mysql을 제어할 수 있는 mysql 클라이언트 이다.")]),a._v(" "),s("ul",[s("li",[a._v("서버가 있는 로컬에서만 mysql를 제어할 수 있는 mysql-monitor 와 다르게 웹을 통해서 어디서든 mysql 을 제어할 수 있는 장점이 있다.")]),a._v(" "),s("li",[a._v("php로 구성되어 있으며 데이터베이스, 테이블, 필드, 열의 작성, 수정, 삭제, 또 SQL 상태 실행, 사용자 및 사용 권한 관리 등의 다양한 작업을 수행할 수 있다.")])])])]),a._v(" "),s("br"),a._v(" "),s("h2",{attrs:{id:"_7-학습-내용에-대한-개인적인-총평"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-학습-내용에-대한-개인적인-총평"}},[a._v("#")]),a._v(" 7. 학습 내용에 대한 개인적인 총평")]),a._v(" "),s("ul",[s("li",[a._v("무작정 필요한 프로그램을 깔아서 설치와 config 수정을 통하여 ft_server 과제를 진행하여 봤으나, 정확히 어떤 역할을 각각 수행하는지에 대해서 이해도가 낮은 것 같아서 database 에 사용되는 mariaDB 와 phpMyAdmin 에 대해서 정리를 해보았다. 서버와 데이터베이스, wordpress 를 서로 이어주면서 백엔드와 프론트엔드 모두를 만들어 보는 작업을 수행해보니 웹에서 어떠한 방식으로 구조가 구성되어 있고, 어떤 것들이 있어야 동작을 하는지에 대해서 알 수 있었던 시간이었다.")]),a._v(" "),s("li",[a._v("함께 과제를 진행하는 분들이 있어서 조금은 수월하다. 이 인연을 잘 가꾸어서 42 생활을 잘 보내길 기원해본다.\n"),s("br")])]),a._v(" "),s("h2",{attrs:{id:"_8-다음-학습-계획"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-다음-학습-계획"}},[a._v("#")]),a._v(" 8. 다음 학습 계획")]),a._v(" "),s("ul",[s("li",[a._v("Dockerfile 작성법")]),a._v(" "),s("li",[a._v("필요한 srcs 파일 작성\n"),s("br")])]),a._v(" "),s("h2",{attrs:{id:"_9-참고-링크"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-참고-링크"}},[a._v("#")]),a._v(" 9. 참고 링크")]),a._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://seunguklee.github.io/2017/11/03/php-fpm/#FastCGI-vs-CGI",target:"_blank",rel:"noopener noreferrer"}},[a._v("what is php-fpm"),s("OutboundLink")],1),s("br"),a._v(" "),s("a",{attrs:{href:"https://opentutorials.org/course/195/1468",target:"_blank",rel:"noopener noreferrer"}},[a._v("생활 코딩 : mysql monitor"),s("OutboundLink")],1),a._v(" "),s("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);