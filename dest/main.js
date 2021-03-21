const lang = document.querySelector('.lang');
const langCurrentDisplay = document.querySelector('.lang__current span');
const langList = document.querySelector('.lang__list');
const langItem = document.querySelectorAll('.lang__list li');
const buger = document.querySelector('.menubuger');
const header = document.querySelector('header');
const slider = document.querySelector('.slider');
// const sliderList = document.querySelector('.slider__list');
// const sliderItem = document.querySelectorAll('.slider__list-item');
// const btnPrev = document.querySelector('.--btnprev');
// const btnNext = document.querySelector('.--btnnext');
// const dots = document.querySelectorAll('.paging__dot li');
// const pagingNumber = document.querySelector('.paging__number');
const menuItem = document.querySelectorAll('.menu li a');
const menuItemMobile = document.querySelectorAll('.menumobile .menulist li')
const menuMobile = document.querySelector('.menumobile');
const sections = document.querySelectorAll('main section');
const popupVideo = document.querySelector('.popupvideo');
const videoPlayBtn = document.querySelectorAll('.productthumb__item-thumbnail');
const closeVideo = document.querySelector('.iframewrap .close');
const iframeVideo = document.querySelector('iframe');
const goToTopBtn = document.querySelector('.backtotop');

lang.addEventListener('click', (e) => {
    e.stopPropagation();
    langList.classList.toggle('active');
});
buger.addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelectorAll('.menubuger .menubuger__btn span').forEach(item => item.classList.toggle('active'));
    menuMobile.classList.toggle('active');
});
langItem.forEach((item) => {
    item.addEventListener('click', () => {
        let langCurrentTemp = langCurrentDisplay.innerHTML;
        langCurrentDisplay.innerHTML = item.innerHTML;
        item.innerHTML = langCurrentTemp;
    })
})
document.addEventListener('click', () => {
    langList.classList.remove('active');
    document.querySelectorAll('.menubuger .menubuger__btn span').forEach(item => item.classList.remove('active'));
    menuMobile.classList.remove('active');
});

function addBgHeader() {
    let scroll = window.pageYOffset + heightHd + 20;
    (scroll > slider.clientHeight) ? header.classList.add('active') : header.classList.remove('active');
    (scroll > slider.clientHeight) ? goToTopBtn.classList.add('active') : goToTopBtn.classList.remove('active');

};
let heightHd = header.clientHeight;
document.addEventListener('scroll', () => {
    addBgHeader();
});
goToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});

//SLIDER
// let sliderItemWidth = sliderItem[0].clientWidth;
// let sliderIndex = 1;
// sliderControl(sliderIndex);

// function sliderControl(n) {
//     if (n > sliderItem.length) {
//         sliderIndex = 1;
//     }
//     if (n < 1) {
//         sliderIndex = sliderItem.length;
//     }
//     sliderItem.forEach(item => {
//         item.style.display = 'none';
//     })
//     dots.forEach(dot => {
//         dot.classList.remove('activedot');
//     })
//     sliderItem[sliderIndex - 1].style.display = 'block';
//     dots[sliderIndex - 1].classList.add('activedot');
//     let pagingSlider = sliderIndex.toString();
//     pagingSlider = pagingSlider.padStart(2, 0);
//     pagingNumber.innerHTML = pagingSlider;
// }
// btnNext.addEventListener('click', () => {
//     sliderControl(++sliderIndex);
// });
// btnPrev.addEventListener('click', () => {
//     sliderControl(--sliderIndex);
// });
// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         sliderControl(sliderIndex = index + 1);
//     });
// });
//SCROLL TO SECTION
function removeActiveItem() {
    menuItem.forEach(item => {
        item.classList.remove('active');
    });
};
menuItem.forEach(item => {
    item.addEventListener('click', (e) => {
        let section = item.getAttribute('href').replace('#', '');
        window.scrollTo({
            top: document.querySelector(`.${section}`).offsetTop - heightHd + 5,
            behavior: 'smooth',
            // scrollBehavior: 'smooth'
        });
        removeActiveItem();
        item.classList.add('active');
    });
});
menuItemMobile.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        let section = document.querySelectorAll('.menumobile .menulist li a')[index].getAttribute('href').replace('#', '');
        window.scrollTo({
            top: document.querySelector(`.${section}`).offsetTop - heightHd + 5,
            behavior: 'smooth',
            scrollBehavior: 'smooth'
        });
        document.querySelectorAll('.menumobile .menulist li a').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.menumobile .menulist li a')[index].classList.add('active');
    });
});
window.addEventListener('scroll', () => {
    let positionScroll = window.pageYOffset + heightHd;
    sections.forEach((section, index) => {
        if (positionScroll > section.offsetTop && positionScroll < section.offsetTop + section.offsetHeight) {
            removeActiveItem();
            menuItem[index].classList.add('active');
            menuItemMobile[index].classList.add('active');
        }
        else {
            menuItem[index].classList.remove('active');
            menuItemMobile[index].classList.remove('active');
        }
    });
});

//Play video
videoPlayBtn.forEach(item => {
    item.addEventListener('click', () => {
        iframeVideo.setAttribute('src', `https://www.youtube.com/embed/${item.getAttribute('video-id')}?autoplay=1`)
        popupVideo.classList.add('active');
    });
});
closeVideo.addEventListener('click', () => {
    iframeVideo.src = '';
    popupVideo.classList.remove('active');
});
popupVideo.addEventListener('click', () => {
    iframeVideo.src = '';
    popupVideo.classList.remove('active');
});

// $(document).ready(function () {
//     $(".accordion").on('click', function () {
//         $(this).toggleClass('active');
//     });
//     $('#submitbtn').click(function (e) {
//         e.preventDefault();
//         let name = $('input[name = "name"]').val();
//         let phonenumber = $('input[name = "phonenumber"]').val();
//         let email = $('input[name = "email"]').val();

//         let error = {
//             name: [],
//             email: [],
//             phonenumber: []
//         }
//         let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if (name.length === 0) {
//             error.name.push('Không bỏ trống trường này')
//         } else if (name.length <= 2) {
//             error.name.push('tên phải lớn hơn hai ký tự');
//         }

//         if (phonenumber.length === 0) {
//             error.phonenumber.push('Không bỏ trống trường này');
//         } else if (phonenumber.length < 10 || phonenumber.length > 11) {
//             error.phonenumber.push('Số điện thoại không đúng định dạng');
//         }
//         if (email.length === 0) {
//             error.email.push('Không bỏ trống trường này');
//         } else if (!regex.test(email)) {
//             error.email.push('Email sai định dạng');
//         }
//         // console.log(error.name);
//         for (let index in error) {
//             let parent = $(`input[name=${index}]`).parent();
//             parent.find('.error').remove();
//             parent.append(`<p class="error">${error[index].join(" ")}</p>`);
//         }
//     })

// });
$(document).ready(function () {
    let $slider = $(".slider__list");
    $slider.flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        on: {
            ready: function () {
                let dotted = $('.flickity-page-dots');
                let paging = $('.paging .paging__dots');
                dotted.appendTo(paging);
            },
            change: function (index) {
                let number = $('.paging .paging__number');
                let indexPage = index + 1;
                number.text(indexPage.toString().padStart(2, 0));
            }
        }
    })
    $(".btnctrl.--btnprev").on('click', function () {
        $slider.flickity('previous');
    })
    $(".btnctrl.--btnnext").on('click', function () {
        $slider.flickity('next');
    })

    let $carousel = $(".carouselimg");
    $carousel.flickity({
        // cellAlign: 'left',
        contain: true,
        // wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        groupCells: true,
        // on: {
        //     ready: function () {
        //         // let dotted = $('.flickity-page-dots');
        //         // let paging = $('.paging .paging__dots');
        //         // dotted.appendTo(paging);
        //     },
        //     change: function (index) {
        //         // let number = $('.paging .paging__number');
        //         // let indexPage = index + 1;
        //         // number.text(indexPage.toString().padStart(2, 0));
        //     }
        // }
    })
})

var initPhotoSwipeFromDOM = function (gallerySelector) {
    var parseThumbnailElements = function (el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for (var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if (figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if (figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML;
            }
            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    var onThumbnailsClick = function (e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function (el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if (!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }
            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if (index >= 0) {
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };
    var photoswipeParseHash = function () {
        var hash = window.location.hash.substring(1),
            params = {};
        if (hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }
        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function (index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            },
            showAnimationDuration: 0,
            hideAnimationDuration: 0
        };
        if (fromURL) {
            if (options.galleryPIDs) {
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if (isNaN(options.index)) {
            return;
        }
        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll(gallerySelector);
    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};

window.onload = function () {
    initPhotoSwipeFromDOM('.galleryimglist');
    initPhotoSwipeFromDOM('.carouselimg');
};

