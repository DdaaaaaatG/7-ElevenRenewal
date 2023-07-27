$(document).ready(function () {
  
  let swipers = []; // 각 탭의 swiper 객체를 관리할 배열

  function tab() {
    // 탭메뉴 실행 함수
    function activateTab(tabId) {
      // 초기화
      $(".tab_wrap .tit_list > li").removeClass("active");
      $(".tab_wrap .tab_list").hide();
      // 실행
      $(`.tab_wrap .tit_list > li a[href*="${tabId}"]`).parent().addClass("active");
      $(tabId).show();

      let index = $(tabId).index();

      // 현재 활성화된 탭의 슬라이더 숨기기
      $(".tab_list.active .slider").hide();
      $(".tab_list.active .swiper-container").hide();
      // 현재 활성화된 탭의 슬라이더 자동 재생 멈추기
      if (swipers[index]) {
        swipers[index].autoplay.stop();
      }

      // 해당 탭의 슬라이더 보여주기
      $(`.tab_list:eq(${index}) .slider`).show();
      $(`.tab_list:eq(${index}) .swiper-container`).show();

      // 해당 탭의 swiper 객체가 이미 생성되어 있다면 초기화하지 않고, 아니면 새로 생성하여 배열에 추가
      if (swipers[index]) {
        swipers[index].slideTo(0); // 해당 탭의 슬라이더를 첫 번째 슬라이드로 이동
        swipers[index].autoplay.start(); // 해당 탭의 슬라이더 자동 재생 시작
      } else {
        initSlider(index); // 해당 탭의 슬라이더 초기화
      }
    }

    // 탭메뉴 클릭할 때 실행
    $(".tab_wrap .tit_list > li a").on("click", function (e) {
      e.preventDefault();
      let tabId = $(this).attr("href");
      activateTab(tabId);
    });

    // 페이지 로드 했을 때 탭메뉴 선택
    let firstTabId = $('.tab_wrap .tit_list > li:first-child a').attr('href');
    activateTab(firstTabId);
  }

  function initSlider(index) {
    resizeSlider();
    let $slider = $(`.tab_list:eq(${index}) .slider`);
    let swiper = new Swiper($slider.find(".tabInner")[0], {
      slidesPerView: getSlidesPerView(), // 반응형으로 슬라이드 개수 설정
      spaceBetween: 10,
      slidesPerGroup: 2,
      observer: true,
      observeParents: true,
      loop: $slider.find('.swiper-slide').length > getSlidesPerView(),
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: $(`.slider${index} .paginationCount`),
        clickable: true,
      },
    });

    swipers[index] = swiper; // swiper 객체를 배열에 저장
  }

  function getSlidesPerView() {
    return window.innerWidth > 965 ? 4 : 2; // 윈도우 창 크기에 따라 슬라이드 개수 결정
  }

  // 윈도우 창 크기 변경 시 슬라이더 다시 초기화
  function resizeSlider() {
    let newSlidesPerView = getSlidesPerView();
    if (newSlidesPerView !== swipers[0]?.params.slidesPerView) {
      // 슬라이드 개수가 변경되면 슬라이더 다시 초기화
      swipers.forEach(swiper => {
        swiper.destroy();
      });
      swipers = [];
      slider();
  
      // pagination 보이기/감추기 처리
      $(".paginationCount").each(function (index) {
        let $pagination = $(this);
        if (newSlidesPerView > 2) {
          $pagination.show();
        } else {
          $pagination.hide();
        }
      });
    }
  }

  $(window).on('resize', resizeSlider);

  function slider() {
    
    $(".slider").each(function (index) {
      let $this = $(this);
      let swiper = swipers[index];

      let slideNum = $this.find('.swiper-slide').length;
      let viewNum = getSlidesPerView();
      let loopChk = slideNum > viewNum;

      $this.addClass(`slider${index}`);

      if (swiper != undefined) {
        swiper.destroy();
        swiper = undefined;
      }

      swiper = new Swiper(`.slider${index} .tabInner`, {
        slidesPerView: viewNum,
        initialSlide: 0,
        spaceBetween: 10,
        slidesPerGroup: 2,
        observer: true,
        observeParents: true,
        loop: loopChk,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: $(`.tab_list .slider${index} .paginationCount`),
          clickable: true,
        },
        on: {
          activeIndexChange: function () {
            if ($(`.slider${index}`).parent('.tab_list').css('display') != 'none') {
              slideInx = this.realIndex;
            }
          },
        },
      });

      swipers[index] = swiper;
    });
  }

  tab(); // 탭 초기화
});