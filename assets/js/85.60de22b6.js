(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{440:function(t,r,e){"use strict";e.r(r);var a=e(45),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_2021-01-26-화"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2021-01-26-화"}},[t._v("#")]),t._v(" 2021-01-26(화)")]),t._v(" "),e("h2",{attrs:{id:"_1-학습-날짜"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-학습-날짜"}},[t._v("#")]),t._v(" 1. 학습 날짜")]),t._v(" "),e("ul",[e("li",[t._v("2021-01-26(화)\n"),e("br")])]),t._v(" "),e("h2",{attrs:{id:"_2-학습-시간"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-학습-시간"}},[t._v("#")]),t._v(" 2. 학습 시간")]),t._v(" "),e("ul",[e("li",[t._v("18:00 ~ 00:00 (집)\n"),e("br")])]),t._v(" "),e("h2",{attrs:{id:"_3-학습-범위-및-주제"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-학습-범위-및-주제"}},[t._v("#")]),t._v(" 3. 학습 범위 및 주제")]),t._v(" "),e("ul",[e("li",[t._v("ft_server file 수정 및 평가\n"),e("br")])]),t._v(" "),e("h2",{attrs:{id:"_4-동료-학습-방법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-동료-학습-방법"}},[t._v("#")]),t._v(" 4. 동료 학습 방법")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("yuchoi")]),t._v(", "),e("code",[t._v("hojo")]),t._v(" 님과 디스코드를 통한 그룹스터디\n"),e("br")])]),t._v(" "),e("h2",{attrs:{id:"_5-학습-목표"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-학습-목표"}},[t._v("#")]),t._v(" 5. 학습 목표")]),t._v(" "),e("ul",[e("li",[t._v("평가 받기전 ft_server 확인 작업\n"),e("br")])]),t._v(" "),e("h2",{attrs:{id:"_6-상세-학습-내용"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-상세-학습-내용"}},[t._v("#")]),t._v(" 6. 상세 학습 내용")]),t._v(" "),e("blockquote",[e("p",[t._v("실제 코딩 시간 : 총 2시간.")])]),t._v(" "),e("h3",{attrs:{id:"ft-server-수정사항"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ft-server-수정사항"}},[t._v("#")]),t._v(" ft_server 수정사항")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("phpmyadmin 에 접속하면 아래에 오류가 뜨는데, 이는 tmp 와 관련된 오류이며, 아래의 코드를 넣을 시 오류가 사라진다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# phpmyadmin -> config.inc.php\n$cfg['TempDir'] = '/tmp';\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"dockerfile-수정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-수정"}},[t._v("#")]),t._v(" Dockerfile 수정")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('# OS\nFROM debian:buster\n\n# Ports\nEXPOSE 80 443\n\n# AUTOINDEX\nENV AUTOINDEX=on\n\n# Install required programs\nRUN apt-get update && apt-get -y upgrade\nRUN\tapt-get -y install nginx vim wget openssl php7.3-fpm mariadb-server php-mbstring php-mysql\n\n# Install phpMyAdmin with wget & Move directory\nRUN wget https://files.phpmyadmin.net/phpMyAdmin/5.0.4/phpMyAdmin-5.0.4-all-languages.tar.gz\nRUN tar -xvf phpMyAdmin-5.0.4-all-languages.tar.gz\nRUN mv phpMyAdmin-5.0.4-all-languages /var/www/html/phpmyadmin\n\n# Install Wordpress with wget & Move directory\nRUN wget https://wordpress.org/latest.tar.gz\nRUN tar -xvf latest.tar.gz\nRUN chown -R www-data:www-data wordpress\nRUN mv wordpress /var/www/html/\n\n# Remove tar.gz files\nRUN rm phpMyAdmin-5.0.4-all-languages.tar.gz latest.tar.gz\n\n# Create Certificates & private key\nRUN openssl req -newkey rsa:4096 -days 365 -nodes -x509 -subj "/C=KR/ST=Seoul/L=Seoul/O=42Seoul/OU=Gon/CN=localhost" -keyout ssl.key -out ssl.crt\nRUN mv ssl.crt /etc/ssl/certs/\nRUN mv ssl.key /etc/ssl/private/\n\n# Copy config files\nCOPY srcs/default /etc/nginx/sites-available/\nCOPY srcs/wp-config.php /var/www/html/wordpress/\nCOPY srcs/config.inc.php /var/www/html/phpmyadmin/\n\n# Run run.sh\nCOPY srcs/run.sh /\nENTRYPOINT bash run.sh\n')])])]),e("ul",[e("li",[t._v("순서를 수정이 거의 없는 설치 파일을 위로 올리고, 수정이 있을 수 있는 config 파일들을 아래로 내려서 docker images 가 다시 생성될 경우의 시간 소요를 줄여 주는 방식으로 코드를 구성함. (불필요한 데이터 다운로드를 방지)")]),t._v(" "),e("li",[e("code",[t._v("CMD bash run.sh")]),t._v(" 를 "),e("code",[t._v("ENTRYPOINT bash run.sh")]),t._v(" 로 변경.\n"),e("ul",[e("li",[e("code",[t._v("CMD")]),t._v(" 의 경우 "),e("code",[t._v("docker run")]),t._v(" 에서 명령어를 넣어주면 "),e("code",[t._v("run.sh")]),t._v(" 가 실행되지 않을 수 있다. 이러한 상황을 방지하면서 초기에 실행이 꼭 되어야 하는 명령어를 사용할 시엔 "),e("code",[t._v("ENTRYPOINT")]),t._v(" 명령어를 사용하는 것이 더 적합하여 수정.")])])])]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"_7-학습-내용에-대한-개인적인-총평"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-학습-내용에-대한-개인적인-총평"}},[t._v("#")]),t._v(" 7. 학습 내용에 대한 개인적인 총평")]),t._v(" "),e("ul",[e("li",[t._v("금일 평가까지 모두 진행하려고 했으나, 계속 정보를 찾아보는 도중에 수정하고 싶은 부분들이 계속 해서 생겼다. 지금까지의 코드도 충분히 잘 돌아가고 큰 차이는 없지만, 조금더 효율적으로 코드가 동작하고 이후에 수정하였을 경우까지 생각해주는 코드로 바꾸게 되었다. 이러한 습관들은 코드를 구성하는데 좋은 밑거름이 될 것이라 생각이 들고, 하루가 더 늦어지지만 더 정확하게 짚고 넘어 가도록 하자.")]),t._v(" "),e("li",[t._v("다음 cub3d 를 진행할 때엔, 지금보다 더 몰입하여 코드를 짤 수 있길 기대해본다.\n"),e("br")])]),t._v(" "),e("h2",{attrs:{id:"_8-다음-학습-계획"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-다음-학습-계획"}},[t._v("#")]),t._v(" 8. 다음 학습 계획")]),t._v(" "),e("ul",[e("li",[t._v("ft_server 평가")]),t._v(" "),e("li",[t._v("cub3d 시작\n"),e("br")])]),t._v(" "),e("h2",{attrs:{id:"_9-참고-링크"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-참고-링크"}},[t._v("#")]),t._v(" 9. 참고 링크")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://bluese05.tistory.com/77",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dockerfile Entrypoint 와 CMD의 올바른 사용 방법"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://www.daleseo.com/dockerfile/",target:"_blank",rel:"noopener noreferrer"}},[t._v("도커에서 자주쓰이는 명령어"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://mind10.tistory.com/entry/phpMyAdmin-%EC%84%A4%EC%B9%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("phpMyAdmin 에러 처리"),e("OutboundLink")],1),t._v(" "),e("br")])])])}),[],!1,null,null,null);r.default=s.exports}}]);