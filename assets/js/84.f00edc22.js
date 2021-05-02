(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{438:function(s,e,t){"use strict";t.r(e);var a=t(45),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_2021-01-25-월"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2021-01-25-월"}},[s._v("#")]),s._v(" 2021-01-25(월)")]),s._v(" "),t("h2",{attrs:{id:"_1-학습-날짜"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-학습-날짜"}},[s._v("#")]),s._v(" 1. 학습 날짜")]),s._v(" "),t("ul",[t("li",[s._v("2021-01-25(월)\n"),t("br")])]),s._v(" "),t("h2",{attrs:{id:"_2-학습-시간"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-학습-시간"}},[s._v("#")]),s._v(" 2. 학습 시간")]),s._v(" "),t("ul",[t("li",[s._v("10:00 ~ 13:00 (집)")]),s._v(" "),t("li",[s._v("14:00 ~ 18:00 (집)")]),s._v(" "),t("li",[s._v("19:00 ~ 23:00 (집)\n"),t("br")])]),s._v(" "),t("h2",{attrs:{id:"_3-학습-범위-및-주제"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-학습-범위-및-주제"}},[s._v("#")]),s._v(" 3. 학습 범위 및 주제")]),s._v(" "),t("ul",[t("li",[s._v("ft_server dockerfile 만들기\n"),t("br")])]),s._v(" "),t("h2",{attrs:{id:"_4-동료-학습-방법"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-동료-학습-방법"}},[s._v("#")]),s._v(" 4. 동료 학습 방법")]),s._v(" "),t("ul",[t("li",[s._v("그룹스터디 ("),t("code",[s._v("kyukim")]),s._v(", "),t("code",[s._v("yuchoi")]),s._v(", "),t("code",[s._v("hojo")]),s._v(")\n"),t("br")])]),s._v(" "),t("h2",{attrs:{id:"_5-학습-목표"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-학습-목표"}},[s._v("#")]),s._v(" 5. 학습 목표")]),s._v(" "),t("ul",[t("li",[s._v("dockerfile을 만들어 ft_server를 완료하자\n"),t("br")])]),s._v(" "),t("h2",{attrs:{id:"_6-상세-학습-내용"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-상세-학습-내용"}},[s._v("#")]),s._v(" 6. 상세 학습 내용")]),s._v(" "),t("blockquote",[t("p",[s._v("실제 코딩 시간 : 총 4시간.")])]),s._v(" "),t("h3",{attrs:{id:"dockerfile-상세코드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-상세코드"}},[s._v("#")]),s._v(" Dockerfile 상세코드")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('# OS\nFROM debian:buster\n\n# Ports\nEXPOSE 80\nEXPOSE 443\n\n# AUTOINDEX\nENV AUTOINDEX=on\n\n# Install\nRUN apt-get update && apt-get -y upgrade\nRUN\tapt-get -y install nginx vim wget openssl php7.3-fpm mariadb-server php-mbstring php-mysql\n\n# nginx\nCOPY srcs/default /etc/nginx/sites-available/\n\n# openssl\nRUN openssl req -newkey rsa:4096 -days 365 -nodes -x509 -subj "/C=KR/ST=Seoul/L=Seoul/O=42Seoul/OU=Gon/CN=localhost" -keyout ssl.key -out ssl.crt\n# RUN chmod 600 ssl.crt ssl.key\nRUN mv ssl.crt /etc/ssl/certs/\nRUN mv ssl.key /etc/ssl/private/\n\n# phpMyAdmin\nRUN wget https://files.phpmyadmin.net/phpMyAdmin/5.0.4/phpMyAdmin-5.0.4-all-languages.tar.gz\nRUN tar -xvf phpMyAdmin-5.0.4-all-languages.tar.gz\nRUN mv phpMyAdmin-5.0.4-all-languages /var/www/html/phpmyadmin\nCOPY srcs/config.inc.php /var/www/html/phpmyadmin/\n\n# Wordpress\nRUN wget https://wordpress.org/latest.tar.gz\nRUN tar -xvf latest.tar.gz\nRUN mv wordpress /var/www/html/\nCOPY srcs/wp-config.php /var/www/html/wordpress/\nRUN chown -R www-data:www-data /var/www/html/wordpress\n\n# remove tar file\nRUN rm phpMyAdmin-5.0.4-all-languages.tar.gz latest.tar.gz\n\n# run.sh\nCOPY srcs/run.sh /\nCMD bash run.sh\n')])])]),t("ul",[t("li",[s._v("각 실행 순서에 맞게 코드를 구성.")]),s._v(" "),t("li",[s._v("설치 파일 > ssl > phpmyadmin > wordpress > 압축파일 제거 > run.sh 실행")]),s._v(" "),t("li",[t("code",[s._v("autoindex")]),s._v(" 환경변수에 따라 on / off 를 해주기 위해서 "),t("code",[s._v("ENV AUTOINDEX=on")]),s._v(" 추가함.")])]),s._v(" "),t("h3",{attrs:{id:"run-sh-상세코드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-sh-상세코드"}},[s._v("#")]),s._v(" run.sh 상세코드")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#!/bin/bash\n\n# service on\nservice nginx start\nservice php7.3-fpm start\nservice mysql start\n\n# wordpress setting\necho \"CREATE DATABASE IF NOT EXISTS wordpress;\" | mysql -u root --skip-password\necho \"CREATE USER IF NOT EXISTS 'inshin'@'localhost' IDENTIFIED BY 'inshin';\" | mysql -u root --skip-password\necho \"GRANT ALL PRIVILEGES ON wordpress.* TO 'inshin'@'localhost' WITH GRANT OPTION;\" | mysql -u root --skip-password\n\n# autoindex off\nif [ \"$AUTOINDEX\" == \"off\" ]; then\n\tsed -e 's/autoindex on/autoindex off/g' -e 's/#index/index/g' /etc/nginx/sites-available/default > /etc/nginx/sites-available/default.tmp\n\tmv /etc/nginx/sites-available/default.tmp /etc/nginx/sites-available/default\n\tservice nginx reload\nfi\n\nbash\n")])])]),t("ul",[t("li",[t("code",[s._v("docker run -e AUTOINDEX=off ...")]),s._v(" 로 설정한 경우 autoindex off 로 설정 되도록 코드를 구성하였다.")]),s._v(" "),t("li",[t("code",[s._v("sed 's/autoindex on/autoindex off/g'")]),s._v(" 를 통하여 autoindex off 로 바꿔주기 위해서 변경된 파일을 tmp 로 저장한 후, 다시 기존파일로 이름을 바꿔 덮어쓰기 하는 방식으로 코드를 구성 하였다.")]),s._v(" "),t("li",[s._v("옵션 "),t("code",[s._v("sed -e")]),s._v(" 는 여러개의 명령을 동작시 사용됨.")]),s._v(" "),t("li",[s._v("컨테이너를 재시작하더라도 문제가 없도록 코드 구성하였다.")]),s._v(" "),t("li",[s._v("마지막에 bash 가 없는 경우, 컨테이너가 동작안하는 오류가 있어서 추가하였다.\n"),t("br")])]),s._v(" "),t("h2",{attrs:{id:"_7-학습-내용에-대한-개인적인-총평"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-학습-내용에-대한-개인적인-총평"}},[s._v("#")]),s._v(" 7. 학습 내용에 대한 개인적인 총평")]),s._v(" "),t("ul",[t("li",[s._v("dockerfile 에서 사용하는 기본적인 명령어들을 익히고, 직접 dockerfile을 작성해 동작환경에 이상이 없는지 확인을 하였다. 설치하면서 상관없는 것들은 묶어서 RUN 에 동작되도록 수행하였으며, bash 스크립트를 통하여 컨테이너가 실행 될때마다 "),t("code",[s._v("nginx, php7.3-fpm, mysql")]),s._v(" 이 동작하도록 코드를 만들었다.")]),s._v(" "),t("li",[s._v("추가적으로 build 할때 . 을 빠뜨리는 경우 동작하지 않으니 주의를 해야된다.")]),s._v(" "),t("li",[s._v("평가에 앞서 지금까지 배운 것들을 말로 정리하도록 해봐야겠다.\n"),t("br")])]),s._v(" "),t("h2",{attrs:{id:"_8-다음-학습-계획"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-다음-학습-계획"}},[s._v("#")]),s._v(" 8. 다음 학습 계획")]),s._v(" "),t("ul",[t("li",[s._v("ft_server 평가")]),s._v(" "),t("li",[s._v("docker, nginx, phpmyadmin, wordpress 정리\n"),t("br")])]),s._v(" "),t("h2",{attrs:{id:"_9-참고-링크"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-참고-링크"}},[s._v("#")]),s._v(" 9. 참고 링크")]),s._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://yeosong1.github.io/ftserver-%ED%92%80%EC%9D%B4%EA%B8%B0%EB%A1%9D",target:"_blank",rel:"noopener noreferrer"}},[s._v("yeosong's ft_server 공략법"),t("OutboundLink")],1),t("br"),s._v(" "),t("a",{attrs:{href:"https://www.joinc.co.kr/w/Site/Tip/StringReplace",target:"_blank",rel:"noopener noreferrer"}},[s._v("sed 명령어에 대하여"),t("OutboundLink")],1),s._v(" "),t("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);